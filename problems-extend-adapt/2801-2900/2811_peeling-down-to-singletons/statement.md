# Peeling Down To Singletons

## Description

You are given an array `nums` of length `n` and an integer `m`.

The goal is to cut the array apart until only one-element arrays remain. A
piece is called good when either it consists of a single element, or the
sum of its elements is at least `m`.

In each step you may choose one existing piece (possibly one produced by an
earlier step) that contains at least two elements and split it into two
pieces, but the step is only allowed when both halves are good.

Return `true` if some sequence of steps can reduce `nums` to `n` arrays of
size one, and `false` otherwise.

### Example 1

```text
Input: nums = [3, 1, 4], m = 5
Output: true
Explanation: Split [3, 1, 4] into [3] and [1, 4]. The piece [3] holds a
single element, and the piece [1, 4] sums to 5, which reaches m, so both
halves are good and the cut is legal. Then split [1, 4] into [1] and [4];
every piece is now a singleton, so the array has fully come apart.
```

### Example 2

```text
Input: nums = [4, 1, 2], m = 7
Output: false
Explanation: The first cut has only two options. Splitting into [4] and
[1, 2] fails because [1, 2] sums to 3, below m, and splitting into [4, 1]
and [2] fails because [4, 1] sums to 5, also below m. Since no legal first
cut exists, the array can never be reduced to singletons.
```

### Example 3

```text
Input: nums = [5, 6], m = 100
Output: true
Explanation: Split [5, 6] into [5] and [6]. Each half contains a single
element, and a one-element piece is good by definition, so this cut is
legal even though no piece ever reaches m.
```

### Constraints

- `1 <= n == nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= m <= 200`

## Hints

### Hint 1

Arrays of length one or two are settled immediately. Beyond that, the
answer is yes exactly when two neighboring elements somewhere in the array
sum to at least `m` — and you can argue both directions of that claim.
