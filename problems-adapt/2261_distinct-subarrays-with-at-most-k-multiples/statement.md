# Distinct Subarrays With at Most K Multiples

## Description

Given an integer array `nums` and two integers `k` and `p`, count the distinct
subarrays in which at most `k` elements are divisible by `p`.

Two arrays are distinct when they differ in length, or when some position
holds different values in the two arrays.

A subarray is a non-empty run of consecutive elements of `nums`.

### Example 1

```text
Input: nums = [3,6,6,3,3], k = 1, p = 6
Output: 6
Explanation: Only the 6s are divisible by p = 6. The six distinct subarrays
holding at most one of them are [3], [6], [3,3], [3,6], [6,3] and [6,3,3].
The lone [3] and the lone [6] each occur at several positions, but each is
counted once. Runs containing both 6s, such as [6,6] or [3,6,6,3], hold two
multiples and are excluded.
```

### Example 2

```text
Input: nums = [2,4,8,4], k = 4, p = 2
Output: 9
Explanation: Every element is even, so the bound k = 4 never bites and every
subarray qualifies. The array holds 10 subarrays, of which [4] and [8,4]-style
repeats leave 9 distinct ones: [2], [4], [8], [2,4], [4,8], [8,4], [2,4,8],
[4,8,4] and [2,4,8,4].
```

### Example 3

```text
Input: nums = [7,3,7,3,7], k = 1, p = 7
Output: 5
Explanation: The 7s alternate with 3s, and any run reaching a second 7 is out.
The distinct survivors are [7], [3], [7,3], [3,7] and [3,7,3].
```

### Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i], p <= 200`
- `1 <= k <= nums.length`

### Follow-up

Can you bring the running time down to `O(n²)`?

## Hints

### Hint 1

Walk over every left endpoint and stretch the right endpoint as far as the
divisibility budget allows — what happens to that budget as the run grows?

### Hint 2

The same run of values can start at several positions. What does it take to
recognize two runs as identical without comparing every pair?
