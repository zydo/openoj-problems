# Canonical Maximum-Win Permutation

## Description

Two integer arrays `available` and `opponents` have equal length. After
permuting `available`, index `i` is a win when
`available[i] > opponents[i]`.

Return the permutation with the greatest possible win count. Resolve ties by
visiting opponent positions in increasing index order. At each position, use
the least unspent available number exceeding its opponent; when none exists,
use the least unspent number overall.

### Example 1

```text
Input: available = [6,2,9,4], opponents = [5,8,3,10]
Output: [6,9,4,2]
```

### Example 2

```text
Input: available = [3,3,7,8], opponents = [3,6,8,2]
Output: [7,8,3,3]
```

### Constraints

- `1 <= available.length <= 10^5`
- `opponents.length == available.length`
- `0 <= available[i], opponents[i] <= 10^9`

## Hints

### Hint 1

For each opponent, preserve larger winning values by using the smallest value
that still wins.

### Hint 2

If no remaining value wins, spend the smallest remaining value instead.

### Hint 3

A sorted multiset supports both choices in logarithmic time per index.
