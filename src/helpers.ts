export function count_frequency(text: string) {
  return text.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
