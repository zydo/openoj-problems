# Reachable Sums From Zero

## Description

You hold `n` coins, the `i`th worth `coins[i]`; coins of equal value may appear
more than once. Call a value `x` reachable when some sub-collection of your
coins — the empty one included — has total value exactly `x`.

Starting at `0` and moving upward, count the consecutive integers that are all
reachable, and stop at the first that is not. Return that count.

### Example 1

```text
Input: coins = [3,4]
Output: 1
Explanation: The empty collection makes 0, but 1 is impossible — every coin is
worth at least 3, so the run ends immediately after 0.
```

### Example 2

```text
Input: coins = [1,1,3]
Output: 6
Explanation: The two unit coins cover 0, 1 and 2, the 3 extends the run
through 5: 0, 1, 1+1, 3, 3+1, 3+1+1. Six consecutive values are reachable.
```

### Example 3

```text
Input: coins = [5,1,2]
Output: 4
Explanation: The 1 and the 2 together reach 0 through 3. The value 4 has no
representation, and the 5 cannot help — the run counts 0, 1, 2, 3 and stops,
even though 5 itself is reachable.
```

### Constraints

- `1 <= coins.length <= 4 * 10⁴`
- `1 <= coins[i] <= 4 * 10⁴`

## Hints

### Hint 1

Keep track of the largest `r` such that every integer from `0` through `r` is
reachable, and ask what a new coin must be worth to stretch that interval.

### Hint 2

Ascending order is the natural order to try coins in: the cheapest coin left
is the one most likely to close the next hole.

### Hint 3

Scan the sorted coins, growing the interval while each coin is worth at most
`r + 1`, and stop at the first that is too big — nothing behind it can do any
better.
