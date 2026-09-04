# Alternating Jump Starts

## Description

Stand on some index of an integer array `arr` and jump strictly forward,
one index after another. Your first jump counts as jump 1, the next as
jump 2, and so on — the numbering belongs to the jumps, not to the
positions. Odd-numbered jumps (1st, 3rd, 5th, ...) follow one rule and
even-numbered jumps follow the other:

- An odd-numbered jump from index `i` lands on an index `j > i` whose value
  `arr[j]` is the smallest among values that are at least `arr[i]`. When
  several indices carry that same value, the leftmost of them is the
  landing spot.
- An even-numbered jump from index `i` lands on an index `j > i` whose
  value `arr[j]` is the largest among values that are at most `arr[i]`,
  with a tie again going to the leftmost index.
- Either rule may find no legal landing spot at all.

A starting index is good when, beginning there, some number of jumps —
possibly zero — brings you to the final index `arr.length - 1`. Return how
many starting indices are good.

### Example 1

```text
Input: arr = [3,2,1,5]
Output: 4
Explanation: From each of the first three indices, the first jump lands
directly on index 3 — value 5 is the smallest right-hand value that is at
least as large as 3, 2, and 1 respectively. All four starts reach the end.
```

### Example 2

```text
Input: arr = [1,4,2,3]
Output: 2
Explanation: Index 0 first jumps to index 2 (value 2), where no
even-numbered jump exists; index 1 has no odd-numbered jump at all. Only
index 2, whose first jump lands on index 3, and index 3 itself are good.
```

### Example 3

```text
Input: arr = [2,2,2]
Output: 3
Explanation: Every jump resolves to the leftmost tied index, so each of
the three starts steps one index at a time to the end.
```

### Constraints

- `1 <= arr.length <= 2 * 10⁴`
- `0 <= arr[i] < 10⁵`
