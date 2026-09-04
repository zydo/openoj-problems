# Smallest Digits After One Swap

## Description

You receive a string made purely of decimal digits. In one move you may
exchange two neighboring digits, but only when they share a parity — both
odd or both even. Perform this move at most once, and return the
lexicographically smallest string any legal choice (including no move at
all) can produce.

### Example 1

```text
Input: s = "7201"
Output: "7021"
Explanation: The digits 2 and 0 sit next to each other, are both even, and
appear in descending order. Exchanging them turns the string into "7021",
and no other legal move reaches anything smaller.
```

### Example 2

```text
Input: s = "8241"
Output: "2841"
Explanation: The opening pair 8 and 2 is a same-parity descent, so
swapping it pulls the 2 to the front and yields the smallest reachable
string.
```

### Constraints

- `2 <= s.length <= 100`
- `s` consists only of digits.

## Hints

### Hint 1

Enumerate the exchanges the rule permits — neighboring digits of matching
parity — and compare the strings each one produces.

### Hint 2

A single exchange helps only where a larger digit of one parity sits
directly before a smaller digit of the same parity; the earliest such spot
dictates the best result.
