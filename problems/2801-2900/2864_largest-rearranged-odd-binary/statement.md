# Largest Rearranged Odd Binary

## Description

You are given a binary string `s` containing at least one `'1'`, and you
may rearrange its characters in any order you like.

Build the odd number whose binary representation is as large as possible,
using every character of `s` exactly once, and return that representation
as a string.

Leading zeros are permitted in the result.

### Example 1

```text
Input: s = "00110"
Output: "10001"
Explanation: The two ones go to the two ends — the leading position and
the units position — so the largest odd arrangement is "10001".
```

### Example 2

```text
Input: s = "111000"
Output: "110001"
Explanation: One `'1'` must be reserved for the final cell to keep the
value odd, and the remaining two belong in the highest cells. That gives
"11", then every zero, then the reserved one.
```

### Example 3

```text
Input: s = "1"
Output: "1"
Explanation: A lone one is already odd and there is nothing to rearrange.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists solely of the characters '0' and '1'.
- `s` contains at least one '1'.

## Hints

### Hint 1

Oddness is decided entirely by the last bit, so a `'1'` has to occupy the
final position no matter what the other characters do.

### Hint 2

After setting that trailing `'1'` aside, the biggest arrangement puts every
remaining `'1'` at the front and all zeros behind them.
