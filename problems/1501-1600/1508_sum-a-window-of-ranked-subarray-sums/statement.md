# Sum A Window Of Ranked Subarray Sums

## Description

You are given an array `nums` of `n` positive integers. Add up every
non-empty contiguous run of elements, collect the `n * (n + 1) / 2`
results, and arrange them in non-decreasing order.

Report the total of the ordered results lying between position `left` and
position `right` (1-indexed, inclusive). The total can be enormous, so
return it modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [5,2,7], n = 3, left = 1, right = 6
Output: 44
Explanation: The six subarray sums are 5, 7, 14, 2, 9, 7, which order to
[2,5,7,7,9,14]. Their entire total is 44.
```

### Example 2

```text
Input: nums = [4,1,3], n = 3, left = 2, right = 4
Output: 11
Explanation: The subarray sums 4, 5, 8, 1, 4, 3 order to [1,3,4,4,5,8].
Positions 2 through 4 hold 3 + 4 + 4 = 11.
```

### Example 3

```text
Input: nums = [10,20], n = 2, left = 1, right = 3
Output: 60
```

### Constraints

- `n == nums.length`
- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 100`
- `1 <= left <= right <= n * (n + 1) / 2`

## Hints

### Hint 1

Materialize every subarray sum into one list — the counts stay small.

### Hint 2

After ordering the list, walk from the `left`-th entry to the `right`-th,
adding as you go and reducing modulo `10^9 + 7`.
