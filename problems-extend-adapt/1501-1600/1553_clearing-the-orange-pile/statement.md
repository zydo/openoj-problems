# Clearing the Orange Pile

## Description

A pile of `n` oranges sits on the counter, and each day you clear some of
them away. On any given day you may do exactly one of the following:

- Remove a single orange.
- While the pile holds `n` oranges divisible by `2`, remove `n / 2` of
  them.
- While the pile holds `n` oranges divisible by `3`, remove `2 * (n / 3)`
  of them.

The divisibility options only exist on days when the current count is
actually divisible; otherwise the single-orange option is all you have.

Return the fewest days needed to empty a pile that starts with `n`
oranges.

### Example 1

```text
Input: n = 9
Output: 3
Explanation: Start with 9 oranges.
Day 1: 9 is divisible by 3 — remove 2 * (9 / 3) = 6, leaving 3.
Day 2: 3 is divisible by 3 — remove 2 * (3 / 3) = 2, leaving 1.
Day 3: Remove the last orange, leaving 0.
```

### Example 2

```text
Input: n = 11
Output: 5
Explanation: Eat one orange to reach 10, another to reach 9; from there
three days clear the rest (6, then 2, then 1).
```

### Example 3

```text
Input: n = 5
Output: 4
```

### Constraints

- `1 <= n <= 2 * 10⁹`

## Hints

### Hint 1

From any count `n` only two moves are ever worth considering: spend
`n % 2` single-orange days so a halve becomes possible, or spend `n % 3`
of them so the large `2n / 3` bite becomes possible.

### Hint 2

Every interesting state is reached by repeatedly floor-dividing by `2` or
`3`, so only about `O(log² n)` distinct counts ever matter — enough to
memoize.
