# Counting Odd-Sum Subarrays

## Description

You are given an integer array `arr`. Count how many of its contiguous
subarrays have a sum that is odd. Because the total can be enormous,
report it modulo `10⁹ + 7`.

### Example 1

```text
Input: arr = [4,7]
Output: 2
Explanation: The subarrays are [4], [4,7], [7], with sums 4, 11, and 7.
The last two are odd, so the count is 2.
```

### Example 2

```text
Input: arr = [2,8]
Output: 0
Explanation: The sums are 2, 10, and 8 — every one of them is even.
```

### Example 3

```text
Input: arr = [3,5,2,6,7,3,8]
Output: 12
```

### Constraints

- `1 <= arr.length <= 10⁵`
- `1 <= arr[i] <= 100`

## Hints

### Hint 1

Walk the array while maintaining only the parity of the running prefix
sum; it flips exactly when you step over an odd element.

### Hint 2

A subarray ending at the current position has an odd sum precisely when
the prefix parity before it and the current prefix parity disagree — so
keep counts of even and odd prefixes seen so far.
