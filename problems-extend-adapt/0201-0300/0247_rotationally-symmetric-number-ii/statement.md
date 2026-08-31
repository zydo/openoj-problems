# Rotationally Symmetric Number II

## Description

A number is **rotationally symmetric** if turning its written form upside
down (a 180-degree rotation) reproduces the exact same digit string. Only
five digits survive a 180-degree turn at all: `0`, `1`, and `8` rotate
into themselves, while `6` and `9` rotate into each other. Every other
digit becomes something that isn't a digit, so it can never appear in
such a number.

Given an integer `n`, return every rotationally symmetric number with
exactly `n` digits, as strings, sorted in ascending lexicographic order.

### Example 1

```text
Input: n = 3
Output: ["101","111","181","609","619","689","808","818","888","906","916","986"]
```

### Example 2

```text
Input: n = 1
Output: ["0","1","8"]
```

### Constraints

- `1 <= n <= 14`

## Hints

### Hint 1

Think of building the number from the outside in: a valid digit pair at
the two ends wraps around a shorter valid number, so the length shrinks
by two at each step, not by one.
