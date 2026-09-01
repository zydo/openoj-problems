# Squares Kept in Order

## Description

You receive an integer array `nums` already arranged in non-decreasing
order. Square every element and return the results, also arranged in
non-decreasing order.

Squaring leaves magnitudes untouched but folds the number line at zero, so
deeply negative entries turn into some of the largest outputs — the
result's ordering is no longer the input's whenever negatives are present.

### Example 1

```text
Input: nums = [-6,-2,1,5]
Output: [1,4,25,36]
Explanation: Squaring yields [36,4,1,25], which reads [1,4,25,36] once put
into ascending order.
```

### Example 2

```text
Input: nums = [-3,0,4]
Output: [0,9,16]
```

### Example 3

```text
Input: nums = [-8,-5,-1]
Output: [1,25,64]
Explanation: Every entry is negative, so the output runs opposite to the
input: the value closest to zero comes first.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` is sorted in non-decreasing order.

### Follow-up

Computing each square and sorting the results is the obvious route. Can you
produce the ordered squares in `O(n)` with a different idea?
