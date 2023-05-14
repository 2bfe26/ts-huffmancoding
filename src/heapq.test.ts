import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { heap_pop, heap_push } from "./heapq.ts";

function makeSut(arr: number[] = []) {
  let heap = [] as Array<{ frequency: number }>;

  for (let value of arr) {
    heap_push(heap, { frequency: value });
  }

  return heap;
}

Deno.test("[peak] expect show the top value in the heap", () => {
  let sut = makeSut([2, 4, 10, 23, 43, 42, 39, 7, 9, 16, 85, 1, 51]);

  assertEquals(sut[0], { frequency: 1 });
});

Deno.test(
  "[heap_pop] expect remove and return the top value in the heap",
  () => {
    let sut = makeSut([2, 4, 10, 23, 43, 42, 39, 7, 9, 16, 85, 1, 51]);

    let minValue = heap_pop(sut);

    assertEquals(minValue, { frequency: 1 });
    assertEquals(sut, [
      { frequency: 2 },
      { frequency: 4 },
      { frequency: 10 },
      { frequency: 7 },
      { frequency: 16 },
      { frequency: 42 },
      { frequency: 39 },
      { frequency: 23 },
      { frequency: 9 },
      { frequency: 43 },
      { frequency: 85 },
      { frequency: 51 },
    ]);
  },
);

Deno.test(
  "[heap_push] expect insert a new value and sort until it meets heap conditions",
  () => {
    let sut = makeSut([2, 4, 10, 23, 43, 42, 39, 7, 9, 16, 85, 51]);

    heap_push(sut, { frequency: 15 });

    assertEquals(sut, [
      { frequency: 2 },
      { frequency: 4 },
      { frequency: 10 },
      { frequency: 7 },
      { frequency: 16 },
      { frequency: 15 },
      { frequency: 39 },
      { frequency: 23 },
      { frequency: 9 },
      { frequency: 43 },
      { frequency: 85 },
      { frequency: 51 },
      { frequency: 42 },
    ]);
  },
);
