# Top-Scoring Hops To The End I

## Description

Start on the first element of the array `nums` and hop from element to
element until you stand on the last one. A hop that leaves index `i` and
lands on index `j > i` pays `(j - i) * nums[j]` points.

Return the largest total a hopping route can collect.

### Example 1

```text
Input: nums = [2,4,1,6]
Output: 18
Explanation: One long hop does best here: 0 -> 3 earns
(3 - 0) * 6 = 18, beating any multi-hop route.
```

### Example 2

```text
Input: nums = [3,1,2,8,5]
Output: 29
Explanation: The route 0 -> 3 -> 4 collects
(3 - 0) * 8 + (4 - 3) * 5 = 29.
```

### Example 3

```text
Input: nums = [7,2]
Output: 2
Explanation: The only possible hop is 0 -> 1, worth
(1 - 0) * 2 = 2.
```

### Constraints

- `2 <= nums.length <= 10³`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Work backwards: give `dp[i]` the meaning "best total for a route that
departs from index `i` and finishes on the last element".

### Hint 2

The first hop out of `i` settles the rest — try every landing spot
`j > i`, bank `(j - i) * nums[j]`, and append the already-known `dp[j]`.
