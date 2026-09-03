# Rebuilding The Coin Set

## Description

Somewhere there is a fixed set of coin denominations — every denomination a
positive integer no larger than `numWays.length` — available in unlimited
supply, and someone counted, for each amount, how many unordered ways the
coins can sum to it. Those counts reached you as a 1-indexed array numWays:
numWays[i] is the number of ways to form the amount i.

The denominations themselves were lost. Reconstruct the collection of coin
values that produces exactly the given counts.

Answer with the denominations as a sorted array of distinct values; if no
collection of coins can produce numWays, answer with an empty array.

### Example 1

```text
Input: numWays = [0,0,1,0,0,1,0,0,1]
Output: [3]
Explanation: The single coin 3 reaches only the multiples of 3, each in
exactly one way: amount 3 as [3], amount 6 as [3,3], and amount 9 as
[3,3,3]. Every other amount is unreachable, matching the zeros.
```

### Example 2

```text
Input: numWays = [1,1,2,2,2,3]
Output: [1,3]
Explanation: With coins 1 and 3 the counts come out as: amount 1 one way
([1]); amount 2 one way ([1,1]); amount 3 two ways ([1,1,1] and [3]);
amount 4 two ways ([1,1,1,1] and [1,3]); amount 5 two ways ([1,1,1,1,1]
and [1,1,3]); amount 6 three ways ([1,1,1,1,1,1], [1,1,1,3], and [3,3]).
```

### Example 3

```text
Input: numWays = [1,1,5]
Output: []
Explanation: Coin 1 is forced by the first count, but one coin can then
never make amount 3 reachable in five ways, so no coin set fits.
```

### Constraints

- `1 <= numWays.length <= 100`
- `0 <= numWays[i] <= 2 * 10⁸`

## Hints

### Hint 1

Counts for an amount can only be produced by coins no larger than that
amount, so the smallest positive position with count 1 exposes the
smallest coin.

### Hint 2

Process amounts in ascending order: whenever the running way-counts sit
one below numWays[i], the value i must be a coin; whenever they already
match, it must not be.

### Hint 3

Fold each confirmed coin i into the running counts with the unbounded
knapsack transition dp[s] += dp[s - i] for s from i to n.

### Hint 4

If at any amount the counts are off by anything other than exactly one
missing way, no coin set exists — report the empty array.
