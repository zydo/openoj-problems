# The Biggest Number Hitting A Digit Total

## Description

You are given two non-negative integers, `n` and `s`.

Find the biggest whole number that fits in at most `n` digits and whose
digits add up to exactly `s`. If no such number exists, return `-1`.

### Example 1

```text
Input: n = 3, s = 21
Output: 993
Explanation: Loading nines into the two leading slots leaves 3 for the
last one, and no 3-digit number with digit total 21 can start any
higher than 993.
```

### Example 2

```text
Input: n = 2, s = 17
Output: 98
Explanation: The leading slot takes the largest digit it can hold (9),
leaving 8 for the units slot, which yields 98.
```

### Example 3

```text
Input: n = 1, s = 10
Output: -1
Explanation: A single digit tops out at 9, so a digit total of 10 is
out of reach and the answer is -1.
```

### Example 4

```text
Input: n = 5, s = 0
Output: 0
Explanation: The only whole number whose digits add to 0 is 0 itself;
no nonzero digit may appear.
```

### Constraints

- `1 <= n <= 5`
- `0 <= s <= 100`

## Hints

### Hint 1

If `s > 9 * n`, even all-nines cannot carry the total — answer `-1`
right away.

### Hint 2

Leading zeros change nothing about a number's value, so an optimal
answer always uses the full `n` slots.

### Hint 3

Scan the slots from left to right, and drop the biggest digit into each
one — capped at `9` and at what the remaining total allows.

### Hint 4

Treat `s = 0` on its own: the answer is exactly `0`, since a longer
string of leading zeros is still just zero.
