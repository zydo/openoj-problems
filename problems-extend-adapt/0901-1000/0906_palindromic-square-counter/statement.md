# Palindromic Square Counter

## Description

Call a positive integer special when its decimal form reads the same forward
and backward, and it is the square of another positive integer whose decimal
form is also a palindrome.

Given the inclusive bounds `left` and `right` as strings, count the special
integers in `[left, right]`.

### Example 1

```text
Input: left = "1", right = "500"
Output: 5
Explanation: The qualifying values are 1, 4, 9, 121, and 484.
```

### Example 2

```text
Input: left = "100", right = "10000"
Output: 2
```

### Constraints

- `1 <= left.length, right.length <= 18`
- `left` and `right` contain only decimal digits.
- Neither bound has leading zeros.
- `left` and `right` represent integers in `[1, 10¹⁸ - 1]`.
- `left <= right`
