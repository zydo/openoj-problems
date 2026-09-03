# Gentle Digit Steps

## Description

You are given a string `s` made up entirely of digits.

Walk the string from left to right and look at each neighboring pair of
digits. The walk is called gentle when every pair of neighbors differs by at
most `2` in numeric value, i.e. `abs(a - b) <= 2` for consecutive digits
`a` and `b`.

Return `true` if the walk through `s` is gentle, and `false` otherwise.

### Example 1

```text
Input: s = "579"
Output: true
Explanation:
    Neighbors 5 and 7 differ by abs(5 - 7) = 2.
    Neighbors 7 and 9 differ by abs(7 - 9) = 2.
    Every step is at most 2, so the answer is true.
```

### Example 2

```text
Input: s = "90"
Output: false
Explanation:
    Neighbors 9 and 0 differ by abs(9 - 0) = 9, which is greater than 2,
    so the answer is false.
```

### Example 3

```text
Input: s = "1020"
Output: true
Explanation:
    The neighboring differences are abs(1 - 0) = 1, abs(0 - 2) = 2, and
    abs(2 - 0) = 2. None exceeds 2, so the answer is true.
```

### Constraints

- `2 <= s.length <= 100`
- `s` consists only of digit characters.

### Hint 1

Compare each adjacent pair of characters once and let any oversized gap
decide the answer immediately.
