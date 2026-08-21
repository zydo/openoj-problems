# Clean Subarrays After One Pair Removal

## Description

You are given an integer `n`, standing for an array that lists the integers `1`
through `n` in increasing order. You are also given a list of pairs
`forbiddenPairs`, where `forbiddenPairs[i] = [a, b]` declares the values `a` and
`b` incompatible.

Call a contiguous subarray *clean* when, for every pair still under
consideration, the subarray does not hold both members of that pair.

Exactly one pair must be dropped from `forbiddenPairs`. Return the largest
number of non-empty clean subarrays obtainable after that single deletion.

### Example 1

```text
Input: n = 4, forbiddenPairs = [[1,3],[2,4]]
Output: 8
Explanation: Drop [1,3]. The one surviving pair, [2,4], disqualifies exactly
the two subarrays that span positions 2 through 4, so 10 - 2 = 8 subarrays
remain clean. Dropping [2,4] instead yields the same total.
```

### Example 2

```text
Input: n = 5, forbiddenPairs = [[2,4],[1,5],[4,5]]
Output: 11
Explanation: Dropping [2,4] or [4,5] leaves 11 clean subarrays. Dropping [1,5]
would leave only 9, so which pair goes matters.
```

### Example 3

```text
Input: n = 5, forbiddenPairs = [[1,5],[2,4]]
Output: 14
Explanation: Drop [2,4]. The lone surviving pair [1,5] is contained in just one
subarray — the whole array — so 14 of the 15 subarrays are clean.
```

### Constraints

- `2 <= n <= 10⁵`
- `1 <= forbiddenPairs.length <= 2n`
- every pair has exactly two elements
- `1 <= forbiddenPairs[i][j] <= n`
- the two elements of a pair differ

## Hints

### Hint 1

For each left endpoint, find the farthest right endpoint a clean subarray
starting there can reach — the pairs still under consideration cap it.

### Hint 2

Summing those reaches gives the count of clean subarrays for a fixed set of
pairs. Deleting one pair can only extend a reach where that pair was the unique
capping pair, so the gain of a deletion concentrates where it is tightest alone.

### Hint 3

Sweep left endpoints from right to left, keeping the two smallest right
endpoints among the pairs activated so far: the smallest bounds the count, and
the gap to the second smallest is exactly what deleting the tightest pair would
recover. Bank that gap per sweep position and take the best total.
