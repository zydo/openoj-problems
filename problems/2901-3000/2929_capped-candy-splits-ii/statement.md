# Capped Candy Splits II

## Description

Three children share a pile of `n` identical candies under a per-child
ceiling of `limit`; a child may also walk away empty-handed.

Because the children are distinct, each split is an ordered triple of
shares adding up to `n`. Count the triples in which no share passes the
ceiling.

### Example 1

```text
Input: n = 4, limit = 2
Output: 6
Explanation: The valid triples are (2, 2, 0), (2, 0, 2), (0, 2, 2),
(2, 1, 1), (1, 2, 1) and (1, 1, 2).
```

### Example 2

```text
Input: n = 8, limit = 3
Output: 3
Explanation: Two children must take 3 candies and the third takes the
remaining 2, which can happen as (3, 3, 2), (3, 2, 3) or (2, 3, 3).
```

### Example 3

```text
Input: n = 1000000, limit = 1000000
Output: 500001500001
Explanation: No share can pass a ceiling as tall as the whole pile, so
every triple summing to 1000000 counts.
```

### Constraints

- `1 <= n <= 10⁶`
- `1 <= limit <= 10⁶`

## Hints

### Hint 1

Walking over the first child's share value by value is fast enough
here, but a closed count per value removes the walk.

### Hint 2

For a fixed first share, the second child's options form one contiguous
interval once both remaining ceilings are applied; the third share then
follows from the total.

### Hint 3

Alternatively, drop the ceiling and count with stars and bars
(`C(n + 2, 2)`), then repair the splits that break the ceiling with
inclusion-exclusion.
