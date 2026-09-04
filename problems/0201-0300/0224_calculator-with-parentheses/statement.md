# Calculator With Parentheses

## Description

You are given a string `s` holding an arithmetic expression built from
non-negative whole numbers, the operators `'+'` and `'-'`, round brackets for
grouping, and spaces. Work out the value of the expression and return it.

A `'-'` may also stand in front of a number or a bracketed group, negating
it. A `'+''` never appears in that position.

Do not call on anything that evaluates expression text for you, such as a
language's `eval`.

### Example 1

```text
Input: s = "(8-(3+1))"
Output: 4
Explanation: The inner brackets give 4, and 8 - 4 is 4. Grouping overrides
the left-to-right reading.
```

### Example 2

```text
Input: s = "14 - (6 - 2) + 3"
Output: 13
Explanation: The bracketed 6 - 2 is 4, so the whole reads 14 - 4 + 3.
```

### Example 3

```text
Input: s = "-(7-3)+2"
Output: -2
Explanation: The leading '-' negates the whole group, so the value is -4 + 2.
```

### Constraints

- `1 <= s.length <= 3 × 10⁵`
- `s` uses only digits, `'+'`, `'-'`, `'('`, `')'` and spaces.
- `s` is a valid expression: brackets are balanced, no two operators sit side
  by side, and `+` is never unary.
- Every number, and every running total along the way, fits in a signed 32-bit
  integer.

## Hints

### Hint 1

With only addition and subtraction present, the expression is one long sum of
signed terms. Read it once from the left, carrying three things: the running
total, the number currently being assembled, and the sign waiting to be applied
to the next term.

### Hint 2

A number's digits extend a working value place by place (`d` appended means
`working = working * 10 + d`). Each operator folds the finished number into
the total and remembers the sign for what follows.

### Hint 3

Brackets are a suspend-and-resume: on `'('` put the running total and pending
sign aside and start both afresh; on `')'` finish the inner sum and combine it
with what you set aside.

### Hint 4

A leading `'-'` needs no special handling — it simply leaves the pending sign
at `-1`, and the next number or group arrives with that sign attached.
