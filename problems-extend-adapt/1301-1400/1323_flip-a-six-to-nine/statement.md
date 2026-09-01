# Flip a Six to Nine

## Description

A positive integer `num` is written using only the digits 6 and 9. You may
switch at most one digit — a 6 turns into a 9, or a 9 turns into a 6.
Return the largest value reachable this way; leaving `num` untouched is
also allowed.

### Example 1

```text
Input: num = 6699
Output: 9699
Explanation: Turning the leading 6 into a 9 improves the most significant
position, and no other single flip produces a bigger number.
```

### Example 2

```text
Input: num = 9666
Output: 9966
Explanation: Again the first 6 is the digit to flip: 9666 becomes 9966.
```

### Example 3

```text
Input: num = 99
Output: 99
Explanation: There is no 6 to upgrade, so the number stays as it is.
```

### Constraints

- `1 <= num <= 10⁴`
- `num` consists of only the digits 6 and 9.

## Hints

### Hint 1

The further left a position sits, the more a 9 there is worth — digit
weight falls off from the leading position.

### Hint 2

Scan the digits once and upgrade the first 6 you meet; if the number has
no 6 at all, it is already the largest it can be.
