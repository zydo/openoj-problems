# Calculator With Precedence

## Description

You are given a string `s` holding an arithmetic expression built from
non-negative whole numbers, the four operators `'+'`, `'-'`, `'*'` and `'/'`,
and spaces. There are no brackets. Work out the value of the expression and
return it, respecting the usual rule that `'*'` and `'/'` bind tighter than
`'+'` and `'-'`.

Division is whole-number division and drops the remainder of a negative
quotient toward zero rather than down.

The expression is always valid. Do not call on anything that evaluates
expression text for you, such as a language's `eval`.

### Example 1

```text
Input: s = "7+6/3"
Output: 9
Explanation: The division runs first — 6 / 3 is 2 — and 7 + 2 is 9.
```

### Example 2

```text
Input: s = " 2*3-10/4 "
Output: 4
Explanation: 10 / 4 drops to 2 and 2 * 3 is 6, leaving 6 - 2. Spaces around
operators carry no meaning.
```

### Example 3

```text
Input: s = "8-12/5*2"
Output: 4
Explanation: The chain 12 / 5 * 2 evaluates left to right within itself:
12 / 5 drops to 2, 2 * 2 is 4, and 8 - 4 is 4.
```

### Constraints

- `1 <= s.length <= 3 * 10⁵`
- `s` holds whole numbers and the four operators, separated by any number of
  spaces.
- `s` is a valid expression.
- Every number appearing in `s` lies in `[0, 2³¹ - 1]`.
- The value, and every intermediate value, fits in a 32-bit integer.

### Follow-up

The expression can be evaluated in one left-to-right pass using `O(n)` extra
space — and, with a little more care, `O(1)`. How?

## Hints

### Hint 1

With `*` and `/` binding tighter, the whole expression is a plain sum of
terms, each term a maximal run of `*` and `/`. Read left to right and hold off
the additions while a `*` or `/` might still extend the current term.

### Hint 2

Keep the finished terms somewhere. When a number finishes reading, the
operator that came _before_ it says what to do: `+` adds the number as a new
term, `-` adds it negated, and `*` or `/` folds it into the term already
waiting.

### Hint 3

Whole-number division here drops toward zero, and the waiting term can be
negative — for `8-12/5` the term handed to the division is `-12` and the
result must be `-2`, not `-3`. Check what your language's division operator
does with negative operands before trusting it.
