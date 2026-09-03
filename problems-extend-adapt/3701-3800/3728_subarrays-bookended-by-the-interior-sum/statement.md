# Subarrays Bookended by the Interior Sum

## Description

You are given an integer array `capacity`.

Call a subarray `capacity[l..r]` **bookended** when both of these hold:

- It covers at least 3 elements.
- Each of its two end elements equals the sum of everything strictly
  between them, i.e. `capacity[l] == capacity[r] == capacity[l + 1] +
capacity[l + 2] + ... + capacity[r - 1]`.

Return how many bookended subarrays `capacity` contains.

### Example 1

```text
Input: capacity = [8,2,2,2,2,8]
Output: 3
Explanation: The whole array is bookended — its ends are both 8 and the
interior sums to 2 + 2 + 2 + 2 = 8. The two interior runs [2,2,2] (each
with a single 2 between equal ends) are bookended as well, for a count
of 3.
```

### Example 2

```text
Input: capacity = [3,3,0,0,3,3]
Output: 2
Explanation: [3,3,0,0,3] is bookended because 3 + 0 + 0 = 3, and
[3,0,0,3] is bookended because 0 + 0 + 3 = 3. No other subarray
qualifies.
```

### Example 3

```text
Input: capacity = [2,4,6,2,0,2,8,2]
Output: 0
Explanation: Although the value 2 appears at four positions, no choice
of two of them as endpoints ever leaves an interior summing to 2, so the
count is 0.
```

### Constraints

- `3 <= capacity.length <= 10⁵`
- `-10⁹ <= capacity[i] <= 10⁹`

## Hints

### Hint 1

Prefix sums turn the interior-sum demand into plain equality: for
`[l, r]` it reads `p[r - 1] - p[l] == capacity[r]`, next to the boundary
demand `capacity[l] == capacity[r]`.

### Hint 2

So a right end `r` just needs earlier positions `l` (at most `r - 2`,
since the span must reach 3) whose pair `(capacity[l], p[l])` equals
`(capacity[r], p[r - 1] - capacity[r])`.

### Hint 3

Sweep `r` left to right and keep a map from `(value, prefix)` pairs to
frequencies, inserting position `r - 2` just before querying `r` — the
length rule then costs nothing and each pair is counted once.
