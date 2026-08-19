# Cheapest Leap Route

## Description

You start on index `0` of the 0-indexed array `nums`, of length `n`, and want to
arrive at index `n - 1`. Leaps always go forward, and a leap from index `i` to a
later index `j` is legal in exactly two situations:

- `nums[j] >= nums[i]`, and every value strictly between the two is below
  `nums[i]`; or
- `nums[j] < nums[i]`, and no value strictly between the two is below `nums[i]`.

A second array `costs`, of the same length, prices the landings: touching down on
index `j` is charged `costs[j]`, and a route is charged the sum over the indices
it lands on. The index you begin on costs nothing, since you never land on it.

Return the cheapest total with which index `n - 1` can be reached.

### Example 1

```text
Input: nums = [4,1,5,4,6,3], costs = [7,1,6,7,2,8]
Output: 16
Explanation: The route 0 -> 2 -> 4 -> 5 is charged 6 + 2 + 8 = 16; note that
costs[0] is never paid. Going 0 -> 1 -> 2 -> 4 -> 5 instead adds the landing on
index 1 for 17, and 0 -> 2 -> 3 -> 5 comes to 21.
```

### Example 2

```text
Input: nums = [6,2,2,7], costs = [0,4,7,5]
Output: 5
Explanation: 7 is at least 6 and the two entries in between are both under 6, so
index 0 may leap straight to index 3 and pay 5 once.
```

### Example 3

```text
Input: nums = [8,2,9,1,1], costs = [0,3,4,1,5]
Output: 9
Explanation: The route 0 -> 1 -> 3 -> 4 pays 3 + 1 + 5 = 9. Its last leap lands
on an equal value, which the first rule permits.
```

### Constraints

- `n == nums.length == costs.length`, with `1 <= n <= 10^5`.
- `0 <= nums[i] <= 10^5` and `0 <= costs[i] <= 10^5`.

### Follow-up

Can the whole thing be done in time proportional to `n`?

## Hints

### Hint 1

Ask which indices index `i` can actually reach. Walking rightwards, the first
value that is not below `nums[i]` ends the first rule's run of smaller values,
and the first value that is below `nums[i]` ends the second rule's run. Convince
yourself that no index beyond those two is ever a legal target.

### Hint 2

Each of those two "first such index to the right" tables is one left-to-right
pass with a stack of indices still waiting for a match: an arriving value settles
every stacked index it qualifies for, and whatever is left on the stack at the
end has no target at all.

### Hint 3

That leaves at most two outgoing leaps per index, all of them pointing forward —
a DAG whose topological order is simply increasing index. Sweep `i` upward,
offering `dp[i] + costs[j]` to each of `i`'s two targets, and read the answer off
index `n - 1`.
