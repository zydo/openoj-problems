# Origin of the XOR Ring

## Description

Take a binary array — one holding only 0's and 1's — call it `original`,
with `n` elements indexed from 0. A second array `derived` of the same
length records, at every position, the bitwise XOR (⊕) of two neighbours in
`original`:

- for `i < n - 1`, `derived[i] = original[i] ⊕ original[i + 1]`;
- for the last slot, `derived[n - 1] = original[n - 1] ⊕ original[0]` —
  the ring closes, pairing the final element with the first.

You are given `derived`. Decide whether some binary array `original` could
have produced it this way, returning `true` when at least one exists and
`false` otherwise.

### Example 1

```text
Input: derived = [0]
Output: true
Explanation: The original array [0] works: its only slot XORs the element
with itself, 0 ⊕ 0 = 0.
```

### Example 2

```text
Input: derived = [1]
Output: false
Explanation: A one-element ring always compares the element with itself,
which yields 0 no matter what the element is, so 1 can never appear.
```

### Example 3

```text
Input: derived = [1,1,0,0]
Output: true
Explanation: The original array [0,1,0,0] produces it:
derived[0] = 0 ⊕ 1 = 1
derived[1] = 1 ⊕ 0 = 1
derived[2] = 0 ⊕ 0 = 0
derived[3] = 0 ⊕ 0 = 0
```

### Example 4

```text
Input: derived = [1,0,1,1]
Output: false
Explanation: No binary array of length 4 reproduces this derived pattern.
```

### Constraints

- `n == derived.length`
- `1 <= n <= 10⁵`
- Every element of `derived` is 0 or 1.

## Hints

### Hint 1

Each element of `original` takes part in exactly two derived entries — its
own slot and the neighbouring slot — so every element appears twice when
the whole ring is folded together.

### Hint 2

XOR-folding all of `derived` therefore cancels the pairs, leaving 0 exactly
when a valid `original` exists; a fold of 1 rules it out.
