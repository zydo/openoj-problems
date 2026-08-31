# Interleaved List Iterator

## Description

Given two integer arrays `v1` and `v2`, build an iterator that returns
their elements interleaved one at a time, alternating between the two
arrays.

Implement the `InterleavingIterator` class:

- `InterleavingIterator(v1, v2)` initializes the iterator over the two
  arrays.
- `hasNext()` returns whether the iterator has any element left to
  return.
- `next()` returns the current element and advances the iterator.

Once one array runs out, the iterator keeps returning elements from
whichever array still has some left.

### Example 1

```text
Input:
["InterleavingIterator", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 8, 9], [1, 2]], [], [], [], [], [], [], [], [], [], [], []]
Output: [null, true, 7, true, 1, true, 8, true, 2, true, 9, false]
Explanation:
InterleavingIterator it = new InterleavingIterator([7, 8, 9], [1, 2]);
// calling next() repeatedly until hasNext() is false yields, in order:
// 7, 1, 8, 2, 9 — once v2 is exhausted after 2, the remaining elements
// of v1 (just 9) are returned on their own.
```

### Example 2

```text
Input:
["InterleavingIterator", "hasNext", "next", "hasNext"]
[[[4], []], [], [], []]
Output: [null, true, 4, false]
```

### Example 3

```text
Input:
["InterleavingIterator", "hasNext", "next", "hasNext"]
[[[], [4]], [], [], []]
Output: [null, true, 4, false]
```

### Constraints

- `0 <= v1.length, v2.length <= 1000`
- `1 <= v1.length + v2.length <= 2000`
- `-2³¹ <= v1[i], v2[i] <= 2³¹ - 1`

### Follow-up

How would this extend to `k` arrays instead of 2? (For `k > 2`, "strict
alternation" stops being uniquely defined — a round-robin over whichever
arrays still have elements is a reasonable generalization.)

Follow-up example: `v1 = [1,2,3], v2 = [4,5,6,7], v3 = [8,9]` interleaves
to `[1,4,8,2,5,9,3,6,7]`.
