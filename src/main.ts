import { build_tree, decode, encode } from "./huffman_coding.ts";
import { count_frequency } from "./helpers.ts";

let TEXT_INPUT = "That's impressive";

let freq = count_frequency(TEXT_INPUT);
let root = build_tree(freq);

let encoded_text = encode(root, TEXT_INPUT);
let decoded_text = decode(root, encoded_text);

console.log("TEXT_INPUT:", TEXT_INPUT);
console.log("FREQUENCY:", JSON.stringify(freq, null, 2));
console.log("Text ENCODED:", encoded_text);
console.log("Text DECODED:", decoded_text);
