# Calculator With Parentheses And Precedence

## Description

You are given a string `s` holding an arithmetic expression built from
non-negative whole numbers, the four operators `'+'`, `'-'`, `'*'` and `'/'`,
and round brackets for grouping. Work out the value of the expression and return
it.

Two rules settle the reading. `'*'` and `'/'` bind tighter than `'+'` and `'-'`,
and a bracketed group is evaluated as a unit before it takes part in whatever
surrounds it. Groups may sit inside other groups to any depth.

Division is whole-number division and drops the remainder toward zero, so a
negative quotient rounds up rather than down. Every operator here is binary: no
`'-'` ever stands alone in front of a number or a group, though a bracketed group
may still work out to a negative value.

Do not call on anything that evaluates expression text for you, such as a
language's `eval`.

### Example 1

```text
Input: s = "9-2*3"
Output: 3
Explanation: The multiplication runs first — 2 * 3 is 6 — and 9 - 6 is 3.
```

### Example 2

```text
Input: s = "(9-2)*3"
Output: 21
Explanation: Brackets outrank precedence: the group is 7, and 7 * 3 is 21.
```

### Example 3

```text
Input: s = "(4-9)/2+2*(6-(1+1))"
Output: 6
Explanation: The first group is -5, and -5 / 2 drops toward zero to -2. In the
second, the nested group is 2, so 6 - 2 is 4 and 2 * 4 is 8. The sum is -2 + 8.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` holds only digits and the six symbols `'+'`, `'-'`, `'*'`, `'/'`, `'('`
  and `')'` — no spaces
- `s` is a valid expression with balanced brackets
- Every number written in `s` is a non-negative whole number, and no operator is
  used in a unary position
- The result, and every value computed along the way, lies in `[-2³¹, 2³¹ - 1]`

### Follow-up

The call stack is what makes the nesting easy here. Can you get the same answer
in one left-to-right pass with the pending state held in explicit stacks
instead, so that deep nesting spends heap rather than stack frames?

## Hints

### Hint 1

Describe the input as a three-level grammar rather than a string of symbols. The
whole expression is a chain of terms joined by `'+'` and `'-'`; a term is a chain
of factors joined by `'*'` and `'/'`; a factor is either a run of digits or a
bracketed expression. Layering the levels this way makes precedence automatic.

### Hint 2

Give each level a function, and let all three share one cursor into the string.
A function consumes exactly the symbols belonging to its level and stops on the
first symbol it does not own — so the term reader halts at `'+'`, `'-'`, `')'` or
the end, and the expression reader halts at `')'` or the end. Nesting is then a
factor calling back into the expression reader and swallowing the matching `')'`
itself.

### Hint 3

Watch the division. The left side of a `/` can be negative once a group has been
evaluated, and the answer must be truncated toward zero: `(1-8)/2` is `-3`, not
`-4`. Languages whose integer division floors will silently give the other
answer.
