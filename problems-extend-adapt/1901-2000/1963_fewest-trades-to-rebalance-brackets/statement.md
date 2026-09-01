# Fewest Trades to Rebalance Brackets

## Description

You are given a string `s` of even length `n`, built from exactly `n / 2`
brackets `'['` and exactly `n / 2` brackets `']'`.

Call a string level if every prefix of it carries at least as many `'['` as
`']'` and the whole string carries equal counts — equivalently, the empty
string is level, a concatenation `AB` of two level strings is level, and a
wrapping `[C]` around a level string is level.

In one trade you pick any two positions of `s` and exchange the characters
sitting there. Trades may be repeated any number of times.

Return the fewest trades needed to turn `s` into a level string.

### Example 1

```text
Input: s = "]][]["
Output: 1
Explanation:
Trading position 0 with position 3 turns s into "[][]", which is level.
```

### Example 2

```text
Input: s = "]]]][[["
Output: 2
Explanation:
Trade position 0 with position 7 to get "[]]][[[]", then position 2 with
position 6 to get "[][][[]]", which is level. One trade cannot repair the
deficit carried by the opening run of closing brackets.
```

### Example 3

```text
Input: s = "[[]][]"
Output: 0
Explanation:
The string is already level.
```

### Constraints

- `n == s.length`
- `2 <= n <= 10⁶`
- `n` is even.
- Each character of `s` is `'['` or `']'`.
- Exactly `n / 2` characters are `'['` and exactly `n / 2` are `']'`.

## Hints

### Hint 1

Scan left to right keeping a running count of `'['` minus `']'`; a level
string never lets this count drop below zero.

### Hint 2

The moment the count dips below zero, that `']'` is unusable where it sits —
one trade is unavoidable, and pairing it with an `'['` from the untouched
tail repairs exactly this deficit.

### Hint 3

Modeling that trade as raising the count by two lets the whole scan finish
in one pass; the number of dips seen is the answer.
