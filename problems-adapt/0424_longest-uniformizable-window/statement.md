# Longest Uniformizable Window

## Description

You may replace at most `k` characters of the uppercase string `s`, choosing
any uppercase replacement letter each time.

Return the greatest length of a substring that can be made entirely one
letter within that replacement budget.

### Example 1

```text
Input: s = "ABBCBA", k = 2
Output: 5
Explanation: "ABBCB" can be changed to "BBBBB" with two replacements.
```

### Example 2

```text
Input: s = "ZZYXXYX", k = 1
Output: 4
Explanation: "XXYX" becomes "XXXX" after replacing its third character.
```

### Constraints

- `1 <= s.length <= 10^5`
- Every character of `s` is an uppercase English letter.
- `0 <= k <= s.length`

## Hints

### Hint 1

Inside a window, keep its most frequent letter and replace every other
position.

### Hint 2

A window is affordable when its length minus its highest letter frequency is
at most `k`.

### Hint 3

Advance the right boundary once per step and move the left boundary only when
the current window exceeds the budget.
