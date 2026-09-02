# Capped Candy Splits III

## Description

Hand out `n` identical candies to three children, subject to one rule:
no child may end up holding more than `limit` candies. Giving a child
nothing at all is allowed.

The children are distinct while the candies are indistinguishable, so a
split is simply an ordered triple `(a, b, c)` whose entries sum to `n`.
Return how many such triples respect the cap.

### Example 1

```text
Input: n = 7, limit = 3
Output: 6
Explanation: The valid triples are (3, 3, 1), (3, 1, 3), (1, 3, 3),
(3, 2, 2), (2, 3, 2) and (2, 2, 3).
```

### Example 2

```text
Input: n = 4, limit = 1
Output: 0
Explanation: Three capped children can hold at most 3 candies between
them, so a pile of 4 cannot be placed at all.
```

### Example 3

```text
Input: n = 6, limit = 6
Output: 28
Explanation: No single child can exceed 6 candies when the whole pile
holds 6, so the cap never binds and every split of 6 counts — C(8, 2)
= 28 of them.
```

### Constraints

- `1 <= n <= 10⁸`
- `1 <= limit <= 10⁸`

## Hints

### Hint 1

A triple loop is hopeless at these bounds — the answer has to come from
a closed formula.

### Hint 2

Forget the cap for a moment. The non-negative solutions of
`a + b + c = n` are counted by stars and bars: `C(n + 2, 2)`.

### Hint 3

A split breaks the cap exactly when some child holds `limit + 1` or
more candies. Hand that child `limit + 1` candies up front and count
the splits of what remains to see how many trip over the cap.

### Hint 4

Subtracting each over-cap child double-counts splits where two children
both break the cap, so add those back. Inclusion-exclusion stops there:
once `n > 3 * limit` is settled as zero, three children can never
exceed the cap simultaneously.
