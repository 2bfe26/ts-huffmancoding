import { heap_pop, heap_push } from "./heapq.ts";

type HuffmanNode = {
  char: string;
  frequency: number;
  left: HuffmanNode | null;
  right: HuffmanNode | null;
};

export function build_tree(frequencies: Record<string, number>) {
  let heap = [] as Array<HuffmanNode>;

  for (let [char, frequency] of Object.entries(frequencies)) {
    heap_push(heap, { char, frequency, left: null, right: null });
  }

  while (heap.length > 1) {
    let left = heap_pop(heap) as HuffmanNode;
    let right = heap_pop(heap) as HuffmanNode;

    heap_push(heap, {
      char: "*",
      frequency: left.frequency + right.frequency,
      left,
      right,
    });
  }

  return heap[0];
}

function build_huffman_codes(root: HuffmanNode) {
  let huffman_codes = {} as Record<string, string>;

  function walk(
    node: HuffmanNode | null,
    code: string,
    huffman_codes: Record<string, string>,
  ) {
    if (!node) return;

    if (!node.left && !node.right) {
      huffman_codes[node.char] = code;
    }

    walk(node.left, code + "0", huffman_codes);
    walk(node.right, code + "1", huffman_codes);
  }

  walk(root, "", huffman_codes);

  return huffman_codes;
}

export function encode(root: HuffmanNode, text: string) {
  let huffman_codes = build_huffman_codes(root);

  let encoded_text = "";
  for (let char of text) {
    encoded_text += huffman_codes[char];
  }

  return encoded_text;
}

export function decode(root: HuffmanNode, encoded_text: string) {
  let decoded_text = "";
  let current_node = root;

  for (let char of encoded_text) {
    if (char === "0" && current_node.left) {
      current_node = current_node.left;
    } else if (char === "1" && current_node.right) {
      current_node = current_node.right;
    }

    if (current_node.left === null && current_node.right === null) {
      decoded_text += current_node.char;
      current_node = root;
    }
  }

  return decoded_text;
}
