import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { build_tree, decode, encode } from "./huffman_coding.ts";
import { count_frequency } from "./helpers.ts";

function makeSut() {
  let TEXT = "hello";

  let frequency = count_frequency(TEXT);
  let tree = build_tree(frequency);

  return tree;
}

Deno.test("(build_tree) expect build a tree with the frequency of each character", () => {
  let sut = makeSut();

  assertEquals(sut, {
    char: "*",
    frequency: 5,
    left: {
      char: "l",
      frequency: 2,
      left: null,
      right: null,
    },
    right: {
      char: "*",
      frequency: 3,
      left: {
        char: "e",
        frequency: 1,
        left: null,
        right: null,
      },
      right: {
        char: "*",
        frequency: 2,
        left: {
          char: "h",
          frequency: 1,
          left: null,
          right: null,
        },
        right: {
          char: "o",
          frequency: 1,
          left: null,
          right: null,
        },
      },
    },
  });
});

Deno.test("(encode) expect encode a text", () => {
  let sut = makeSut();

  assertEquals(encode(sut, "hello"), "1101000111");
});

Deno.test("(decode) expect decode a text", () => {
  let sut = makeSut();

  assertEquals(decode(sut, "1101000111"), "hello");
});
