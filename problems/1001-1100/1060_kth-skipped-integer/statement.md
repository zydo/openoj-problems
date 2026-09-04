# Kth Skipped Integer

## Description

The entries of `nums` climb strictly, so as you count upward from `nums[0]` some
integers turn up in the array and others are skipped over. Collect the skipped
ones in increasing order and return the one at rank `k`.

Counting does not stop at the final entry: everything above it was skipped as
well, so a `k`th skipped integer always exists.

### Example 1

```text
Input: nums = [2,3,6,7,11], k = 2
Output: 5
Explanation: Counting up from 2, the skipped values are 4, 5, 8, 9, 10, 12, ...
The one at rank 2 is 5.
```

### Example 2

```text
Input: nums = [5,6,7], k = 4
Output: 11
Explanation: The array itself skips nothing, so the sequence begins above 7:
8, 9, 10, 11. The fourth of them is 11.
```

### Example 3

```text
Input: nums = [1,10], k = 6
Output: 7
Explanation: A single wide gap holds 2 through 9, and its sixth value is 7.
```

### Constraints

- `nums` holds between 1 and `5 * 10^4` integers
- `1 <= nums[i] <= 10^7`
- Consecutive entries satisfy `nums[i] < nums[i + 1]`, so no value repeats
- `1 <= k <= 10^8`

### Follow-up

A left-to-right walk costs `O(n)`. Can you get the rank down to time
logarithmic in the array's length?

## Hints

### Hint 1

Had nothing been skipped, `nums[i]` would sit exactly `i` above `nums[0]`. The
shortfall `nums[i] - nums[0] - i` is therefore the number of skipped values
strictly below `nums[i]`.

### Hint 2

That shortfall never shrinks as `i` grows. A quantity that only climbs is
exactly what a binary search can be run against: hunt for the leftmost index
whose shortfall has already reached `k`.

### Hint 3

Deal with the tail before searching. When even the last index falls short of
`k`, the answer lies past `nums[n - 1]`; otherwise it sits inside the gap that
opens just after the index the search returns.
