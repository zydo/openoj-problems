# Parity-Alternating Permutations IV

## Description

An alternating ordering of the first `n` positive integers is a
permutation of `1..n` whose neighbouring entries never share a parity —
an odd value is always followed by an even one, and an even value by an
odd one. Given two integers `n` and `k`, sort all alternating orderings
of `1..n` lexicographically and return the `k`-th one. If fewer than `k`
such orderings exist, return an empty array.

### Example 1

```text
Input: n = 3, k = 1
Output: [1,2,3]
Explanation: The alternating orderings of [1, 2, 3] are [1, 2, 3] and
[3, 2, 1]. The first of them is [1, 2, 3].
```

### Example 2

```text
Input: n = 4, k = 8
Output: [4,3,2,1]
Explanation: All eight alternating orderings of [1, 2, 3, 4], in
lexicographic order, are:

    [1, 2, 3, 4]
    [1, 4, 3, 2]
    [2, 1, 4, 3]
    [2, 3, 4, 1]
    [3, 2, 1, 4]
    [3, 4, 1, 2]
    [4, 1, 2, 3]
    [4, 3, 2, 1] ← 8th ordering

so the answer is [4, 3, 2, 1].
```

### Example 3

```text
Input: n = 5, k = 99
Output: []
Explanation: The value n = 5 admits only 12 alternating orderings, so
k = 99 is out of range and the answer is the empty array.
```

### Constraints

- `1 <= n <= 100`
- `1 <= k <= 10¹⁵`

## Hints

### Hint 1

When `n` is odd the counts of odd and even values differ, which forces
the leading entry: the ordering cannot start with an even value.

### Hint 2

When `n` is even the odd and even counts match, so either parity may
lead.

### Hint 3

Build the answer position by position: offer the unused values in
ascending order, and for each one ask how many completed orderings start
with the prefix it would form. Blocks smaller than `k` are skipped whole,
with their size subtracted from `k`.

### Hint 4

A prefix's block size is a product of two factorials — one over the
unused odd values, one over the unused even values — whenever the
leftover parities can still fill the forced pattern, and zero otherwise.
