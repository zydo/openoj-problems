# Spreadsheet Column Numbers

## Description

Spreadsheet columns are labelled with letters rather than numbers: the
first column is `A`, the twenty-sixth is `Z`, and then the labels roll
over into two letters — `AA`, `AB`, all the way through `AZ` and `BA`,
and on upward without end. The scheme works like an odometer that never
heard of zero: every position runs `A` through `Z` and a carry moves to
the next letter to the left.

Given a string `letters` holding one such label, return the column number
it stands for.

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
Input: letters = "D"
Output: 4
Explanation: D is the fourth letter of the alphabet.
```

### Example 2

```text
Input: letters = "CG"
Output: 85
Explanation: C is the third letter, covering 3 x 26 = 78 columns, and G
is the seventh letter — 78 + 7 = 85.
```

### Example 3

```text
Input: letters = "BKC"
Output: 1641
Explanation: B contributes 2 x 26² = 1352, K adds 11 x 26 = 286 more, and
C is the third letter — 1352 + 286 + 3 = 1641.
```

### Constraints

- `1 <= letters.length <= 7`
- `letters` consists only of uppercase English letters.
- `letters` is in the range `["A", "FXSHRXW"]`.
