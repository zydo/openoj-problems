# The Best Bookended Flower Row

## Description

A row of flowers stands in a line, and `flowers[i]` is the beauty score of
the `i`-th flower — scores may be zero or negative.

You may pluck out any flowers you like, including none at all. Whatever
remains must form a _presentable_ row:

- it still contains at least two flowers, and
- its first and last flowers carry the same beauty score.

The row's value is the total beauty of the flowers left standing. What is
the largest value a presentable row can have?

### Example 1

```text
Input: flowers = [3,-2,7,3]
Output: 13
Explanation: Pluck the -2 to leave [3,7,3], whose ends both have beauty 3
and whose total is 3 + 7 + 3 = 13.
```

### Example 2

```text
Input: flowers = [4,-1,-1,4,4]
Output: 12
Explanation: Pluck the two -1s to leave [4,4,4], whose ends both have
beauty 4 and whose total is 4 + 4 + 4 = 12. Keeping the -1s instead would
leave only 4 - 1 - 1 + 4 + 4 = 10.
```

### Example 3

```text
Input: flowers = [-4,6,-4]
Output: -2
Explanation: The only matching pair of ends is the two -4s, so the row must
run from one -4 to the other. Keeping the 6 between them gives
-4 + 6 - 4 = -2.
```

### Constraints

- `2 <= flowers.length <= 10⁵`
- `-10⁴ <= flowers[i] <= 10⁴`
- Some sequence of plucks can produce a presentable row.

## Hints

### Hint 1

For each beauty score, only its first and last occurrence can serve as the
best pair of ends.

### Hint 2

Everything positive between the chosen ends should survive; only negative
flowers in between are worth plucking.
