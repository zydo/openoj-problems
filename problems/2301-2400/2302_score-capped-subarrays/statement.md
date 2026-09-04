# Score-Capped Subarrays

## Description

An array's score is its sum multiplied by its length. For instance, the score
of [1, 2, 3] works out to (1 + 2 + 3) × 3 = 18.

Given an array `nums` of positive integers and an integer `k`, count the
non-empty subarrays of `nums` whose score is strictly less than `k`. A
subarray occupies a contiguous stretch of `nums`, preserving the original
order of its elements.

### Example 1

```text
Input: nums = [3,1,2], k = 9
Output: 5
Explanation:
The 5 subarrays scoring under 9 are:
- [3] with score 3 * 1 = 3.
- [1] with score 1 * 1 = 1.
- [2] with score 2 * 1 = 2.
- [3,1] with score (3 + 1) * 2 = 8.
- [1,2] with score (1 + 2) * 2 = 6.
The full window [3,1,2] misses out because its score is (3 + 1 + 2) * 3 = 18.
```

### Example 2

```text
Input: nums = [1,2,3], k = 10
Output: 4
Explanation:
The qualifying subarrays are [1], [2], [3], and [1,2] with score (1 + 2) * 2 =
6. Note that [2,3] scores exactly (2 + 3) * 2 = 10 and is not counted, since
the cap is strict.
```

### Example 3

```text
Input: nums = [1,1,2,1], k = 12
Output: 7
Explanation:
All four singles and all three adjacent pairs qualify, but both length-3
windows, [1,1,2] and [1,2,1], land exactly on score 12 and are excluded.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= 10¹⁵`

## Hints

### Hint 1

How does the score respond when the window takes in one more element?

### Hint 2

For a fixed right endpoint, the qualifying subarrays are exactly the suffixes
ending there — how far left can the window stretch before its score reaches
`k`?

### Hint 3

Sweep the right endpoint across the array while moving the left endpoint only
forward; then each right position contributes the length of its surviving
window at once.
