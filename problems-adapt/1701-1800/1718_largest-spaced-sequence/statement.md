# Largest Spaced Sequence

## Description

Build a sequence of length `2n - 1` using the integers `1` through `n`,
subject to all of these rules:

- The value `1` appears exactly once.
- Every value from `2` through `n` appears exactly twice.
- For each value `i` from `2` through `n`, the gap between its two copies
  is exactly `i` cells — where the gap between positions `i` and `j` is
  `|j - i|`.

Several sequences can satisfy the rules; return whichever one of them is
largest in lexicographic order. Comparing two equal-length sequences,
the larger is the one with the greater number at the first position where
they differ — for instance, `[0,1,9,0]` beats `[0,1,5,6]` because the
first differing position holds `9` versus `5`. The constraints always
admit at least one valid sequence.

### Example 1

```text
Input: n = 3
Output: [3,1,2,3,2]
Explanation: The two 3s sit 3 apart, the two 2s sit 2 apart, and the
single 1 fills the middle. A rival arrangement [2,3,2,1,3] is also valid,
but it is smaller where the two first differ.
```

### Example 2

```text
Input: n = 5
Output: [5,3,1,4,3,5,2,4,2]
Explanation: The leading 5 is possible because its pair lands exactly at
the far end, and the rest of the row still closes every remaining gap.
No valid sequence starts with anything larger than 5, and none that
starts with 5 beats this one.
```

### Constraints

- `1 <= n <= 20`

## Hints

### Hint 1

Only one value is free to appear singly — the `1` — and every other value
dictates both of its positions once its first copy is placed.

### Hint 2

Fill the row from the left, and at each empty cell try the candidates from
`n` downward. Committing cells in reading order while always preferring the
biggest placeable value makes the first completed row the largest one.
