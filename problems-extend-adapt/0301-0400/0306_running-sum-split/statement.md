# Running Sum Split

## Description

Given a string `num` made up only of digits, decide whether it can be split
into three or more consecutive pieces such that each piece read as a number
has no leading zero (a lone `"0"` is fine), and starting from the third
piece, every piece equals the sum of the two pieces before it.

Return `true` if such a split exists, `false` otherwise.

### Example 1

```text
Input: num = "123581321"
Output: true
Explanation: Split as 1, 2, 3, 5, 8, 13, 21.
1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13, 8 + 13 = 21.
```

### Example 2

```text
Input: num = "1023"
Output: false
```

### Constraints

- `1 <= num.length <= 35`
- `num` consists only of digits.

### Follow-up

How would you handle overflow for very large input integers?
