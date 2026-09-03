# Small Subsequences And Their Ends

## Description

Given an integer array `nums` and a positive integer `k`, look at every
subsequence of `nums` holding at most `k` elements. Each subsequence
contributes the sum of its largest and smallest elements. Return the total
over all of these subsequences, modulo 10⁹ + 7.

### Example 1

```text
Input: nums = [2,4,7], k = 2
Output: 52
Explanation: The subsequences with at most 2 elements are:
[2]: smallest 2, largest 2, contribution 4
[4]: smallest 4, largest 4, contribution 8
[7]: smallest 7, largest 7, contribution 14
[2, 4]: smallest 2, largest 4, contribution 6
[2, 7]: smallest 2, largest 7, contribution 9
[4, 7]: smallest 4, largest 7, contribution 11
Adding them up gives 4 + 8 + 14 + 6 + 9 + 11 = 52.
```

### Example 2

```text
Input: nums = [9,0,3], k = 1
Output: 24
Explanation: A one-element subsequence has that element as both its
smallest and its largest, so every value counts twice: 9 + 9 + 0 + 0 + 3 +
3 = 24.
```

### Example 3

```text
Input: nums = [6,6,6], k = 2
Output: 72
Explanation: Each of the three singletons contributes 6 + 6 = 12, and each
of the three two-element picks contributes 12 as well, for a total of
6 * 12 = 72.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `1 <= k <= min(70, nums.length)`

## Hints

### Hint 1

Put the array in sorted order first; end-to-end contributions become
positional.
