# Cuts That Leave a Rising Array I

## Description

You are given a 0-indexed array of positive integers `nums`.

Consider deleting one stretch of adjacent elements — a subarray — from
`nums`. Call that stretch a rising cut when the elements left behind,
read in their original order, form a strictly increasing sequence. For
instance, cutting `[3, 4]` out of `[5, 3, 4, 6, 7]` leaves `[5, 6, 7]`,
so that stretch qualifies.

A subarray is a contiguous, non-empty run of elements. Cutting the
entire array is allowed, and an empty remainder counts as strictly
increasing.

Return how many rising cuts `nums` contains.

### Example 1

```text
Input: nums = [2,1,3]
Output: 5
Explanation: The qualifying stretches are [2], [2,1], [2,1,3], [1], and
[1,3]. Deleting [2,1] leaves [3] and deleting [1,3] leaves [2], both
strictly increasing. The remaining stretch, [3], leaves [2,1] behind,
which is not increasing, so the answer is 5.
```

### Example 2

```text
Input: nums = [4,3,2]
Output: 3
Explanation: Only [4,3], [3,2], and [4,3,2] qualify: they leave [2],
[4], and an empty array respectively. Every cut of length 1 leaves a
descending pair behind.
```

### Example 3

```text
Input: nums = [1,1,2]
Output: 5
Explanation: The qualifying stretches are each of the two [1] cuts, the
pair [1,1] (leaving [2]), the pair [1,2] (leaving [1]), and the whole
array. Cutting the lone 2 leaves [1,1], which rises but not strictly,
so it does not count.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Hints

### Hint 1

The array is tiny — simply try every start/end pair of stretches.

### Hint 2

For a fixed stretch, walk the survivors from left to right — the prefix
before the cut followed by the suffix after it — and require each element
to exceed the one before it; since every value is positive, 0 works as
the starting sentinel.
