# Switchback Arrays II

## Description

You are given three integers `n`, `l`, and `r`.

An array of length `n` is a _switchback array_ when every entry is an
integer in the inclusive window `[l, r]`, no entry repeats the one
immediately before it, and each step switches direction relative to the one
before — after a move to a larger value comes a move to a smaller one, and
the other way around.

Count the switchback arrays of length `n` over the window `[l, r]`, and
report the total modulo `10⁹ + 7`. Compared with the first version, `n` can
be enormous while the window stays narrow.

### Example 1

```text
Input: n = 1000000000, l = 1, r = 2
Output: 2
Explanation: Two values leave no freedom at all — the array must alternate
between them forever, so only the choice of the first entry matters.
```

### Example 2

```text
Input: n = 1000000000, l = 1, r = 75
Output: 16
Explanation: A billion alternating steps leave only a sliver of the
starting mass standing; exactly 16 of the arrays survive.
```

### Example 3

```text
Input: n = 500000000, l = 4, r = 9
Output: 164852694
Explanation: The total is far beyond the width-six window's raw supply of
arrays, so it is the reduced residue — the count modulo 10⁹ + 7.
```

### Constraints

- `3 <= n <= 10⁹`
- `1 <= l < r <= 75`

## Hints

### Hint 1

The per-step transition on the pair (last value, direction the next step
must take) is linear, so a step count in the billions calls for matrix
exponentiation.

### Hint 2

Reflecting the window — replacing every value `x` by `l + r - x` — swaps
the two required directions while leaving the all-ones starting vector in
place, so one half of the state evolves on its own and the other half is
its mirror image.

### Hint 3

In the surviving half, the transition entry between indices is `1` exactly
when their sum stays below a fixed bound; the matrix is symmetric and every
power of it stays symmetric, so each squaring is one Gram-matrix pass over
its rows.

### Hint 4

A dot product of seventy-odd residues can exceed 64 bits at the top end:
widen the accumulator or reduce earlier, and in JavaScript split the
multipliers to keep every intermediate exact.
