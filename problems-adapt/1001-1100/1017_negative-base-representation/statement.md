# Negative-Base Representation

## Description

Bases do not have to be positive. In base -2 the place values still grow
by a factor of two at each step to the left, but their signs alternate:
1, -2, 4, -8, 16, and so on. A string of 0s and 1s names an integer by
adding up the place values of the positions that hold a 1.

Given a non-negative integer `n`, return its base -2 representation as a
string of 0s and 1s with no leading zeros — unless the representation is
exactly `"0"`.

### Example 1

```text
Input: n = 11
Output: "11111"
Explanation: 16 - 8 + 4 - 2 + 1 = 11.
```

### Example 2

```text
Input: n = 13
Output: "11101"
Explanation: 16 - 8 + 4 + 1 = 13.
```

### Example 3

```text
Input: n = 12345
Output: "111000001001001"
Explanation: 16384 - 8192 + 4096 + 64 - 8 + 1 = 12345.
```

### Constraints

- `0 <= n <= 10^9`

## Hints

### Hint 1

Peel off one position at a time: the parity of `n` fixes the digit, and
dividing what remains by -2 exposes the rest. Keep the digit inside
{0, 1} and the division exact, and the alternating signs never cause
trouble.
