# Every Digit Takes A Letter

## Description

A string `s` mixes lowercase letters with digits, and every digit must be
driven out. Removal proceeds one digit at a time:

- Pick the leftmost digit still present, and delete together with it the
  nearest non-digit character that sits anywhere to its left.

Repeat until no digit remains, then read off whatever is left in its
original order.

Return the string that survives once all digits are gone.

### Example 1

```text
Input: s = "a3bc2d"
Output: "bd"
Explanation: The first digit erases "a" beside it; the second erases "c",
which is now the closest letter to its left, leaving "bd".
```

### Example 2

```text
Input: s = "xy9"
Output: "x"
```

### Example 3

```text
Input: s = "leet7code3"
Output: "leecod"
```

### Constraints

- `1 <= s.length <= 100`
- `s` contains only lowercase English letters and digits.
- The input guarantees every digit can be removed, i.e. each one always
  finds a non-digit to its left when its turn comes.

## Hints

### Hint 1

Scan left to right and treat the characters that are still alive as a
stack: letters push, digits pop.

### Hint 2

A digit's victim — the closest surviving non-digit to its left — is exactly
the stack's top, so no rescanning is ever needed.
