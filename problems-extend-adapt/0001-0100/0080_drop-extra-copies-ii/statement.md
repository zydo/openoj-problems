# Drop Extra Copies II

## Description

An integer array `nums` arrives already sorted in non-decreasing
order. Rewrite it in place so each distinct value is left with at most
two copies — the ones that open its run — and return the trimmed
array. This is the same trimming as its predecessor, loosened by one
allowed copy per value.

Nothing needs reordering: equal values already sit side by side, so
the first appearance of every value keeps its place and the second
copy rides right behind it, while any further surplus behind the pair
disappears. The array you return holds the surviving values in order,
and its length is the element count after the trim.

### Example 1

```text
Input: nums = [4,4,4,4]
Output: [4,4]
Explanation: A run of four identical values keeps only its first two
copies.
```

### Example 2

```text
Input: nums = [-1,-1,0,0,0,5,5,5]
Output: [-1,-1,0,0,5,5]
Explanation: Runs of different lengths all collapse to at most a
leading pair.
```

### Example 3

```text
Input: nums = [7]
Output: [7]
Explanation: A lone element is already within the two-copy allowance.
```

### Constraints

- `1 <= nums.length <= 3 * 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` is sorted in non-decreasing order.
