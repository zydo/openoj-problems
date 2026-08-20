# Median Subarray Distinct Count

## Description

You are given an integer array `nums`. Every contiguous subarray `nums[i..j]`
(with `0 <= i <= j < nums.length`) has a distinct count: how many different
values it contains. Collect the distinct count of **every** subarray into one
list and sort it.

Return the median of that list, taking the smaller of the two middle values
when the list has even length.

### Example 1

```text
Input: nums = [5,1,5,2]
Output: 2
Explanation: The ten subarrays contribute the distinct counts
[1, 1, 1, 1, 2, 2, 2, 2, 3, 3] once sorted — the four single elements give 1,
four subarrays contain exactly two different values, and the two subarrays
[1,5,2] and [5,1,5,2] contain three. The list has even length, so the median
is its 5th entry, 2.
```

### Example 2

```text
Input: nums = [6,6,6,2]
Output: 1
Explanation: Seven of the ten subarrays stay inside the run of sixes and hold
one value; only the three subarrays that reach the 2 hold two. Sorted, the
counts are [1, 1, 1, 1, 1, 1, 1, 2, 2, 2], whose 5th entry is 1.
```

### Example 3

```text
Input: nums = [5,9,2,7,3,8,6]
Output: 3
Explanation: All seven values are different, so a subarray's distinct count
equals its length: seven subarrays of length 1, six of length 2, five of
length 3, and so on. The 28-entry sorted list therefore begins with seven 1s,
then six 2s, then five 3s — and its middle (14th) entry is 3.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

The list you need the middle of has `n(n+1)/2` entries — far too many to
build. What property of "how many entries are at most x" lets you search over
values instead?

### Hint 2

For a candidate `x`, counting the subarrays whose distinct count is `<= x`
tells you whether the median sits at or below `x`.

### Hint 3

That count falls out of a two-pointer window that never lets more than `x`
different values inside.
