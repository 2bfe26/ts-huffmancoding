import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { count_frequency } from "./helpers.ts";

Deno.test("count_frequency", () => {
  assertEquals(count_frequency("hello world"), {
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    " ": 1,
    w: 1,
    r: 1,
    d: 1,
  });

  assertEquals(count_frequency("AAAAAAAAAAAAAAAAAAAAAAABBBCCCCCCCCCCDDD"), {
    A: 23,
    B: 3,
    C: 10,
    D: 3,
  });
});
