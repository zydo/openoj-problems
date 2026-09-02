# K Largest in Original Order

## Description

You are given an integer array `nums` and an integer `k`. Choose `k` elements
of `nums` whose total is the largest achievable — keeping them in their
original left-to-right order — and return those values as an array of length
`k`.

When several choices tie for the largest total, the judge still expects one
specific answer: among all maximum-sum choices, return the one whose set of
original positions is lexicographically smallest.

Choosing elements but keeping their relative order is exactly what a
subsequence does — nothing is rearranged, some positions are simply left out.

### Example 1

```text
Input: nums = [5,-2,9,1,7], k = 3
Output: [5,9,7]
Explanation: No three values beat 5 + 9 + 7 = 21, and they reappear here in
their original order.
```

### Example 2

```text
Input: nums = [-3,-8,-1], k = 2
Output: [-3,-1]
Explanation: With every value negative the best total is still forced upward:
-3 + -1 = -4 loses the least.
```

### Example 3

```text
Input: nums = [4,4,4,4], k = 2
Output: [4,4]
Explanation: All values are equal, so the earliest two positions are taken,
matching the tie-breaking rule.
```

### Example 4

```text
Input: nums = [6,2,6,1,6], k = 3
Output: [6,6,6]
Explanation: The three 6s sum to 18, the largest any trio reaches, and their
positions happen to already be the smallest possible.
```

### Constraints

- `1 <= nums.length <= 1000`
- `-10⁵ <= nums[i] <= 10⁵`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Greedily, which `k` values would any sum-maximizing selection have to
contain?

### Hint 2

Sorting the array while carrying each value's original index along lets you
find those `k` winners — and settle ties by position.
