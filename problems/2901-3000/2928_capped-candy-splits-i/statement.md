# Capped Candy Splits I

## Description

Split `n` identical candies between three children so that nobody
receives more than `limit` of them. A child may receive zero candies.

Two splits differ as soon as any child's share differs — the children
are distinguishable while the candies are not. Return how many splits
meet the cap.

### Example 1

```text
Input: n = 2, limit = 10
Output: 6
Explanation: With only 2 candies the cap is out of reach. The splits
are (2, 0, 0), (0, 2, 0), (0, 0, 2), (1, 1, 0), (1, 0, 1) and
(0, 1, 1).
```

### Example 2

```text
Input: n = 5, limit = 3
Output: 12
Explanation: Twelve ordered triples sum to 5 with every entry at most
3; the only splits removed are those where some child takes 4 or 5
candies.
```

### Example 3

```text
Input: n = 50, limit = 1
Output: 0
Explanation: Three children capped at 1 candy absorb at most 3 candies
in total, so a pile of 50 has nowhere to go.
```

### Constraints

- `1 <= n <= 50`
- `1 <= limit <= 50`

## Hints

### Hint 1

`n` and `limit` are at most 50, so checking candidate splits one by one
is affordable.

### Hint 2

Fix how many candies the first child takes. The second child's share is
then confined to one interval, and the third child's count is forced.
