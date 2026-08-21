# Weight Apportionment

## Description

A line of `n` positions is described by an integer array `scores`, one score
per position. You must hand every position a whole-number weight of at least
`1`, subject to a single rule:

> wherever a position's score is strictly greater than the score directly beside
> it, its weight must also be strictly greater than that neighbour's.

Both sides count, so a position is measured against the one on its left and the
one on its right. Positions whose scores are equal constrain each other in
neither direction.

Return the smallest total weight that any legal assignment can reach.

### Example 1

```text
Input: scores = [2,5,8,6,3]
Output: 9
Explanation: Weights 1, 2, 3, 2, 1 work — the climb 2 < 5 < 8 forces three
rising weights, and the descent to 3 forces two falling ones. Nothing smaller
satisfies both slopes.
```

### Example 2

```text
Input: scores = [6,6,6,6]
Output: 4
Explanation: No score beats a neighbour, so no weight has to beat one either.
Every position keeps the minimum of 1.
```

### Example 3

```text
Input: scores = [9,4,4,7,1]
Output: 7
Explanation: Weights 2, 1, 1, 2, 1. The flat pair in the middle needs nothing
extra; only the two positions that tower over a neighbour are raised.
```

### Constraints

- `scores` has `n` entries with `1 <= n <= 5 * 10⁴`
- `0 <= scores[i] <= 5 * 10⁴`

## Hints

### Hint 1

The rule is two rules wearing one coat: one about the left neighbour and one
about the right. Try satisfying them one at a time instead of together.

### Hint 2

Start every position at `1`. Sweeping left to right, a position that outscores
the one before it can take exactly one more than that one's current weight —
the least value that obeys the left-hand rule.

### Hint 3

Now sweep back the other way for the right-hand rule, but *raise* weights
rather than assign them: keeping the larger of the old and the new value means
the return sweep can never undo the first one's work. Sum the array.
