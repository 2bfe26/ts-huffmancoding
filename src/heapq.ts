export type Node<T> = { frequency: number } & T;

export function heap_push<T>(heap: Array<Node<T>>, value: Node<T>) {
  heap.push(value);
  bubble_up(heap, heap.length - 1);
}

export function heap_pop<T>(heap: Array<Node<T>>) {
  swap(heap, 0, heap.length - 1);
  let min = heap.pop();
  min_heapfy(heap, 0, heap.length - 1);

  return min;
}

export function bubble_up<T>(heap: Array<Node<T>>, index: number) {
  let idx_current = index;
  let idx_parent = Math.floor((idx_current - 1) / 2);

  while (
    idx_current > 0 &&
    heap[idx_current].frequency < heap[idx_parent].frequency
  ) {
    swap(heap, idx_current, idx_parent);

    idx_current = idx_parent;
    idx_parent = Math.floor((idx_current - 1) / 2);
  }
}

export function min_heapfy<T>(
  heap: Array<Node<T>>,
  idx_current: number,
  idx_end: number
) {
  let idx_left_child = 2 * idx_current + 1;
  let idx_right_child = idx_left_child + 1 >= idx_end ? -1 : idx_left_child + 1;

  let idx_smallest =
    idx_right_child !== -1 &&
    heap[idx_right_child]?.frequency < heap[idx_left_child]?.frequency
      ? idx_right_child
      : idx_left_child;

  if (heap[idx_current]?.frequency > heap[idx_smallest]?.frequency) {
    swap(heap, idx_current, idx_smallest);
    min_heapfy(heap, idx_smallest, idx_end);
  }
}

export function swap<T>(heap: Array<Node<T>>, i: number, j: number) {
  let temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}
