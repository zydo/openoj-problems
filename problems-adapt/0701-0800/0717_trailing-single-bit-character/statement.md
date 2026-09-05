# Trailing Single-Bit Character

## Description

A message is encoded as a sequence of two kinds of symbols:

- A single-bit symbol, written as the bit `0`.
- A two-bit symbol, written as either `10` or `11`.

You are given a binary array `bits` that always ends with a `0`. Decode
it from the left — at each position you are forced to read either a
single-bit symbol or a two-bit symbol, never both — and determine
whether that decoding is unique in one respect: does the very last
symbol have to be the single-bit kind?

Return `true` if the final symbol must be the one-bit symbol, `false`
otherwise.

### Example 1

```text
Input: bits = [1,1,0,0]
Output: true
```

### Example 2

```text
Input: bits = [1,0,1,0]
Output: false
```

### Example 3

```text
Input: bits = [0]
Output: true
```

### Constraints

- `1 <= bits.length <= 1000`
- Every entry of `bits` is `0` or `1`, and the array ends with `0`.

## Hints

### Hint 1

Track the index where the symbol currently being read began. Once you
reach the end, check whether that starting index was the array's very
last position.
