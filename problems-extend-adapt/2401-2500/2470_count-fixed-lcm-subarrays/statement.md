# Count Fixed-LCM Subarrays

## Description

You are given an integer array `nums` and an integer `k`.

Return the number of subarrays of `nums` whose elements have a least
common multiple of exactly `k`.

A subarray is a contiguous, non-empty sequence of elements within the
array, and the least common multiple of a collection is the smallest
positive integer divisible by every element in the collection.

### Example 1

```text
Input: nums = [1,2,3], k = 6
Output: 2
Explanation: The subarrays with lcm 6 are [2,3] and [1,2,3].
```

### Example 2

```text
Input: nums = [2,2,2], k = 2
Output: 6
Explanation: Every subarray is made only of 2s, whose lcm is always 2.
There are 3 single-element, 2 two-element, and 1 three-element subarrays,
for 6 total.
```

### Example 3

```text
Input: nums = [5,7], k = 35
Output: 1
Explanation: The single-element subarrays have lcm 5 and 7, and only the
whole array [5,7] has lcm 35.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i], k <= 1000`

## Hints

### Hint 1

The length bound is small enough to check every subarray directly.

### Hint 2

Compute the lcm with `lcm(a, b) = a * b / gcd(a, b)`, extending a running
lcm as the subarray grows.

### Hint 3

A running lcm never decreases as it grows. Once it exceeds `k`, every
longer subarray with the same left endpoint has an even larger lcm, so the
search along that endpoint can stop.
