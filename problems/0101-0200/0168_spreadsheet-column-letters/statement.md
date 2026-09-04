# Spreadsheet Column Letters

## Description

Spreadsheet programs label their columns with letters rather than numbers:
the first column is `A`, the twenty-sixth is `Z`, and then the labels roll
over into two letters — `AA`, `AB`, all the way through `AZ` and `BA`, and
on upward without end. The scheme works like an odometer that never heard
of zero: every position runs `A` through `Z` and a carry moves to the next
letter to the left.

Given a positive integer `number`, return the label of that column.

```text
A -> 1
B -> 2
...
Z -> 26
AA -> 27
AB -> 28
...
```

### Example 1

```text
Input: number = 5
Output: "E"
Explanation: E is the fifth letter of the alphabet.
```

### Example 2

```text
Input: number = 260
Output: "IZ"
Explanation: I is the ninth letter, covering 9 x 26 = 234 columns, and Z
adds the remaining 26.
```

### Example 3

```text
Input: number = 1234
Output: "AUL"
Explanation: A covers 1 x 26² = 676 columns, U covers 21 x 26 = 546 more,
and L is the twelfth letter — 676 + 546 + 12 = 1234.
```

### Constraints

- `1 <= number <= 2³¹ - 1`
