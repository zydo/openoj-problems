# Ways To Build Along A Street

## Description

A street carries `n` plots on each of its two sides, numbered `1` through
`n` per side, and a house may be raised on any plot. Count the distinct
layouts in which no two houses end up on neighboring plots of the same
side. The two sides are independent: a house on plot `i` of one side never
forbids a house on plot `i` of the other.

The count can be huge, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 1
Output: 4
Explanation: Each side independently holds either a house or nothing, so
the four layouts are: both sides empty, a house on the left only, a house
on the right only, and a house on each side.
```

### Example 2

![diagram](figures/2320-1.svg)

```text
Input: n = 2
Output: 9
Explanation: All 9 layouts are drawn in the diagram above.
```

### Example 3

```text
Input: n = 5
Output: 169
Explanation: Each side of five plots admits 13 house-or-empty patterns with
no two houses adjacent, and 13 * 13 = 169 combined layouts.
```

### Constraints

- `1 <= n <= 10⁴`

## Hints

### Hint 1

Solve for a single side first: decide the state of the last plot (empty or
built) and see which shorter prefix that leaves.

### Hint 2

One side's count follows the Fibonacci recurrence; two sides contribute
independently, so square the single-side count at the end.
