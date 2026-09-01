# Two-End Takeaway Game VII

## Description

Alice and Bob play a turn-based game, with Alice taking the first turn.

A row of `n` stones lies between them; the `i`-th stone from the left has
value `stones[i]`. On a turn, the player takes away either the leftmost or
the rightmost stone of the row, and immediately scores the total value of
the stones left behind. When the row is empty, whoever holds the higher
total wins.

Bob has given up on winning outright, so he plays to leave the two totals
as close together as he can, while Alice plays to blow the gap as wide as
she can. Both play perfectly. Return how far Alice's total ends up ahead of
Bob's.

### Example 1

```text
Input: stones = [4,1,2,10]
Output: 11
Explanation:
- Alice removes 4 and scores 1 + 2 + 10 = 13 points.
- Bob removes 1 and scores 2 + 10 = 12 points.
- Alice removes 2 and scores 10 points.
- Bob removes 10 and scores 0 points.
Alice leads 23 to 12, a difference of 11.
```

### Example 2

```text
Input: stones = [3,7,2]
Output: 3
Explanation:
- Alice removes 2 and scores 3 + 7 = 10 points.
- Bob removes 3 and scores 7 points.
- Alice removes 7 and scores 0 points.
Alice leads 10 to 7, a difference of 3.
```

### Example 3

```text
Input: stones = [5,8]
Output: 8
Explanation:
- Alice removes 5 and scores 8 points.
- Bob removes 8 and scores 0 points.
Alice leads 8 to 0, a difference of 8.
```

### Constraints

- `n == stones.length`
- `2 <= n <= 1000`
- `1 <= stones[i] <= 1000`

## Hints

### Hint 1

The row only ever shrinks from its two ends, so a game state is just the
interval of stones still on the table — there are only `O(n²)` of them.

### Hint 2

Let `dp[l][r]` be the best margin the player about to move can secure on
that interval; prefix sums turn each move's award into a single subtraction.
