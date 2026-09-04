# Fewest GCD-Safe Blocks

## Description

You are given an array `nums` of positive integers. Split it into one or
more disjoint subarrays such that every element belongs to exactly one
subarray and the GCD of the elements of each subarray is strictly greater
than `1`. The GCD of a subarray is the largest positive integer that
divides every element of the subarray, and a subarray is a contiguous part
of the array. Return the minimum number of subarrays such a split can use.

### Example 1

```text
Input: nums = [2,4,8,3,9]
Output: 2
Explanation: Split as [2,4,8] and [3,9]. The first block has GCD 2 and the
second has GCD 3, both above 1. One block would make the whole GCD 1.
```

### Example 2

```text
Input: nums = [6,10,15,7]
Output: 3
Explanation: [6,10] has GCD 2 and [15] and [7] are each valid alone;
merging 15 with 7 would bring the GCD to 1.
```

### Example 3

```text
Input: nums = [9,15,21]
Output: 1
Explanation: The whole array already has GCD 3, so a single block works.
```

### Constraints

- `1 <= nums.length <= 2000`
- `2 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Growing a subarray never raises its GCD — adding elements can only push it
down toward 1.

### Hint 2

Keep extending the open block while its running GCD stays above 1, and cut
exactly at the element that would otherwise bring it to 1.
