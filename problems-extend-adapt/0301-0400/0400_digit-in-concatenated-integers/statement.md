# Digit in Concatenated Integers

## Description

Write the positive integers one after another to form the endless decimal
string `123456789101112...`. Positions are numbered starting from 1.

Given `n`, return the digit at position `n` in that string.

### Example 1

```text
Input: n = 15
Output: 2
Explanation: Positions 14 and 15 belong to the number 12, so position 15
contains its final digit, 2.
```

### Example 2

```text
Input: n = 192
Output: 0
Explanation: The one- and two-digit blocks use 189 positions. The next three
positions spell 100, making the digit at position 192 equal to 0.
```

### Example 3

```text
Input: n = 250
Output: 1
```

### Constraints

- `1 <= n <= 2³¹ - 1`
