# H-Index

## Description

Each entry of the integer array `citations` records how many times one
paper has been cited. The h-index of the collection is the largest `h`
with this property: at least `h` of the papers have each been cited `h`
or more times.

Return the h-index of `citations`.

### Example 1

```text
Input: citations = [2,7,4,0,5,9]
Output: 4
Explanation: Four papers — with 9, 7, 5, and 4 citations — each clear the
bar of 4. Only three clear a bar of 5 (the next paper has 2), so 4 is the
largest h that qualifies.
```

### Example 2

```text
Input: citations = [1000,999,3]
Output: 3
Explanation: Huge counts do not help beyond the paper count: with three
papers the index can reach at most 3, and all three clear a bar of 3.
```

### Example 3

```text
Input: citations = [0,0,0]
Output: 0
Explanation: No paper has even one citation, so no positive h qualifies.
```

### Constraints

- `1 <= citations.length <= 5000`
- `0 <= citations[i] <= 1000`

## Hints

### Hint 1

Sorting the entries from largest to smallest turns the definition into a
scan: walk down the list, and the answer is the last position where the
entry there still meets the bar set by its position.

### Hint 2

No statistic computed this way can exceed the number of papers, however
large the individual counts are.

### Hint 3

That cap also caps the useful values: any count above `n` behaves exactly
like `n`. So `n + 1` buckets — counting each paper at `min(value, n)` —
replace the sort, and one downward sweep over the buckets finds the answer.
