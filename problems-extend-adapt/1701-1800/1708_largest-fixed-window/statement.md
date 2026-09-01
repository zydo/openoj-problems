# Largest Fixed Window

## Description

Compare two same-length arrays by scanning them together: whatever the
first position is where they disagree decides the comparison, and the
array holding the bigger value there is the larger array.

Using 0-indexing:

```text
[4,9,1] > [4,7,9], since index 0 ties and 9 > 7 at index 1.
[2,8] < [3,1], since 2 < 3 at index 0.
```

A window is a run of consecutive elements of `nums`.

Given `nums`, an array of pairwise distinct integers, and an integer `k`,
return the largest window of `nums` whose length is exactly `k`.

### Example 1

```text
Input: nums = [6,1,8,3,5], k = 2
Output: [8,3]
Explanation: The windows of length 2 are [6,1], [1,8], [8,3], and [3,5].
All start with different values, and [8,3] starts with the largest.
```

### Example 2

```text
Input: nums = [6,1,8,3,5], k = 4
Output: [6,1,8,3]
Explanation: Only two windows qualify, [6,1,8,3] and [1,8,3,5], and the
first starts with the larger value, 6 over 1.
```

### Example 3

```text
Input: nums = [6,1,8,3,5], k = 1
Output: [8]
```

### Constraints

- `1 <= k <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- Every element of `nums` is distinct.

### Follow-up

How would you cope if the elements of `nums` were not all distinct?

## Hints

### Hint 1

Distinct values mean two windows can never tie: the first elements alone
rank them, so the window starting at the biggest value wins.

### Hint 2

A window's first element may sit anywhere in `nums[0..n-k]`; find the
maximum of that prefix and slice `k` elements from it.
