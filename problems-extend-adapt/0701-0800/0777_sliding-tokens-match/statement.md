# Sliding Tokens Match

## Description

A string made only of the characters `'L'`, `'R'`, and `'X'` — for
instance `RXXLXRXL` — supports two kinds of single-step slides: replace
one occurrence of `"XL"` with `"LX"` (an L slides one spot left across an
X), or replace one occurrence of `"RX"` with `"XR"` (an R slides one spot
right across an X).

Given strings `start` and `result` of equal length, return `true` if some
sequence of such slides turns `start` into `result`, and `false`
otherwise.

### Example 1

```text
Input: start = "RXXLXRXL", result = "XXRLXXRL"
Output: true
Explanation: One sequence of slides works:
RXXLXRXL -> XRXLXRXL -> XXRLXRXL -> XXRLXXRL
```

### Example 2

```text
Input: start = "R", result = "L"
Output: false
```

### Constraints

- `1 <= start.length <= 10⁴`
- `start.length == result.length`
- Both `start` and `result` consist only of the characters `'L'`, `'R'`,
  and `'X'`.

## Hints

### Hint 1

Picture the L's and R's as people standing on a line, with each X a free
space between them. The people can never step past each other, and an L
can only ever move left while an R can only ever move right.
