import { build_tree, decode, encode } from "./huffman_coding.ts";
import { count_frequency } from "./helpers.ts";

const TEXT_INPUT = "That's impressive";

const freq = count_frequency(TEXT_INPUT);
const root = build_tree(freq);

const encoded_text = encode(root, TEXT_INPUT);
const decoded_text = decode(root, encoded_text);

console.log("TEXT_INPUT:", TEXT_INPUT);
console.log("FREQUENCY:", JSON.stringify(freq, null, 2));
console.log("Text ENCODED:", encoded_text);
console.log("Text DECODED:", decoded_text);
