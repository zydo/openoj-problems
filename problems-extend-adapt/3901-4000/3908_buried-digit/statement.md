# Buried Digit

## Description

Pick a digit `x` and look at the ordinary decimal representation of an
integer `n`. We call `n` **buried** for `x` when the digit appears somewhere
in that representation but never as the leading digit — the number has to
contain `x`, yet it must begin with something else.

Given `n` and `x`, return `true` exactly when `n` is buried for `x`.

### Example 1

```text
Input: n = 2701, x = 7
Output: true
Explanation: The representation "2701" contains the digit 7, and it starts
with 2, so both requirements hold.
```

### Example 2

```text
Input: n = 55, x = 5
Output: false
Explanation: Every 5 in "55" is at the front, since the number starts with 5.
The leading condition fails, so the answer is false.
```

### Example 3

```text
Input: n = 10, x = 0
Output: true
Explanation: The digit 0 occurs at the end of "10" while the number leads
with 1, so it qualifies.
```

### Example 4

```text
Input: n = 48, x = 9
Output: false
Explanation: The digit 9 never appears in "48" at all.
```

### Constraints

- `0 <= n <= 10⁵`
- `0 <= x <= 9`

## Hints

### Hint 1

Render `n` as its decimal digits. One glance at the first character settles
the leading requirement, and a plain containment scan settles the other.

### Hint 2

Watch the single-digit corner: a one-character representation can only carry
`x` at the front, so it can never qualify.
