# Bit Window Complement

## Description

Every integer occupies a window of bits when written in binary: the run
of positions from its most significant 1 down to the ones place. The
complement operation flips every bit inside that window — each 0 turns
into a 1 and each 1 into a 0 — while every position above the window
stays 0. Reading the flipped pattern back as an ordinary binary number
gives the complement of the original.

Given an integer `n`, return its complement.

### Example 1

```text
Input: n = 6
Output: 1
Explanation: 6 is "110" in binary. Flipping the bits of that window
yields "001", which reads back as 1.
```

### Example 2

```text
Input: n = 12
Output: 3
Explanation: 12 is "1100" in binary, and the flipped window "0011" is 3.
```

### Example 3

```text
Input: n = 100
Output: 27
Explanation: 100 is "1100100" in binary, and the flipped window
"0011011" is 27.
```

### Constraints

- `0 <= n < 10^9`

## Hints

### Hint 1

A number XOR-ed with a run of ones exactly as wide as its own bit window
has every occupied bit cancelled. Work out how wide that run must be for
a given `n`, and which single input never grows the run at all.
