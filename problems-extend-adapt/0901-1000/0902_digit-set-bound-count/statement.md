# Digit-Set Bound Count

## Description

You receive a sorted list `digits` of one-character decimal strings and a
positive integer `n`. A positive number is **buildable** when every character
in its decimal representation appears in `digits`; a permitted digit may be
used any number of times. For instance, with `digits = ["1","3","5"]`, the
numbers 13, 551, and 1351315 are buildable.

Count how many buildable positive integers are no greater than `n`.

### Example 1

```text
Input: digits = ["2","5","8"], n = 300
Output: 21
```

### Example 2

```text
Input: digits = ["1","2","9"], n = 210
Output: 21
```

### Constraints

- `1 <= digits.length <= 9`
- `digits[i].length == 1`
- Each `digits[i]` is a decimal digit from `'1'` through `'9'`.
- The values in `digits` are unique and sorted in non-decreasing order.
- `1 <= n <= 10⁹`
