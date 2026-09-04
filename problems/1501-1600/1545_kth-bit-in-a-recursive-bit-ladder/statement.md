# Kth Bit in a Recursive Bit Ladder

## Description

Picture an endless ladder of bit strings, built one rung at a time. The
bottom rung is a single zero bit:

```text
S(1) = "0"
```

and each rung above extends the rung below it by wedging a fresh `1`
between that rung and a flipped, backwards copy of it:

```text
S(i) = S(i-1) + "1" + reverse(invert(S(i-1)))    for i > 1
```

Here `+` glues strings together, `reverse(x)` turns `x` back to front,
and `invert(x)` swaps every bit — each `0` turns into `1` and each `1`
into `0`. The first four rungs come out as:

```text
S(1) = "0"
S(2) = "011"
S(3) = "0111001"
S(4) = "011100110110001"
```

Given positive integers `n` and `k`, report the `k`-th bit (counting from

1. of `S(n)` as a one-character string. `k` always falls inside `S(n)`.

### Example 1

```text
Input: n = 2, k = 1
Output: "0"
Explanation: S(2) is "011", and its first bit is "0".
```

### Example 2

```text
Input: n = 4, k = 8
Output: "1"
Explanation: S(4) is "011100110110001". Position 8 sits exactly in the
middle of the 15-bit string, on the single "1" that rung 4 inserted.
```

### Example 3

```text
Input: n = 5, k = 21
Output: "0"
Explanation: S(5) has 31 bits, so position 21 lies past the middle, in
the flipped mirror of S(4). It corresponds to position 32 - 21 = 11 of
S(4), whose bit is "1"; the mirroring flips it to "0".
```

### Constraints

- `1 <= n <= 20`
- `1 <= k <= 2ⁿ - 1`

## Hints

### Hint 1

With `n` at most 20, the largest string is about a million characters —
actually stacking up the rungs from `S(1)` to `S(n)` is a workable, if
heavy-handed, way to reach the answer.

### Hint 2

There is no need to build anything. Each rung's exact middle is the
freshly inserted `1`, the left half is the rung below unchanged, and the
right half is that rung flipped and reversed — so every step either
answers `k` directly or shrinks the question to a smaller rung while
remembering one pending inversion.
