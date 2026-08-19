# Smallest Subarray Over a Length-Scaled Threshold

## Description

You are given an integer array `nums` and an integer `threshold`.

Call a subarray of length `k` eligible when every one of its elements is
greater than `threshold / k`. The bar an element must clear depends on how
much company it has: the longer the run, the weaker the requirement each of
its members has to meet.

Return the smallest eligible length. If no subarray is eligible, return `-1`.

A subarray is a contiguous non-empty run of elements from the array.

### Example 1

```text
Input: nums = [3,9,4,9,3], threshold = 11
Output: 3
Explanation: The subarray [9,4,9] has length 3 and each of its elements
exceeds 11 / 3, so 3 is eligible. Nothing shorter works: no element is above
11 / 1 = 11, and no adjacent pair stays above 11 / 2 = 5.5.
```

### Example 2

```text
Input: nums = [4,8,3,8], threshold = 6
Output: 1
Explanation: The element 8 is greater than 6 / 1 = 6, so the length-1
subarray [8] is eligible, and no length is smaller than 1.
```

### Example 3

```text
Input: nums = [1,4,7,4,1], threshold = 12
Output: -1
Explanation: Length 3 comes closest: [4,7,4] has minimum 4, and 4 * 3 = 12
equals the threshold rather than exceeding it. Shorter lengths ask too much
of every element, and longer lengths must include one of the 1s.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= threshold <= 10⁹`

## Hints

### Hint 1

A window of length `k` is eligible exactly when its smallest element times
`k` is greater than the threshold — only the weakest element matters.

### Hint 2

For every index, work out the widest stretch of the array in which the
element at that index is the minimum; the answer can be read off those
stretches.

### Hint 3

Nearest smaller element on each side, for all indexes at once, is what a
monotonic stack computes in one linear sweep per side.
