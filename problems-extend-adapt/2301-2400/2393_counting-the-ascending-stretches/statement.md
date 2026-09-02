# Counting the Ascending Stretches

## Description

An array `nums` of positive integers is laid out in front of you.

Count its subarrays — contiguous slices, of any length — whose values
climb strictly from left to right: every element must be larger than the
one before it. Report how many such slices exist.

### Example 1

```text
Input: nums = [2,2,1,4,7]
Output: 8
Explanation: The stretches that qualify are: the six singleton slices,
plus [1,4] and [1,4,7] — the pair of ties (2,2) and the drop to 1 break
the array into runs of lengths 1, 1, and 3, which contribute
1 + 1 + (3·4)/2 = 8.
```

### Example 2

```text
Input: nums = [1,2,1,2,3]
Output: 9
Explanation: The array zigzags into two ascending pieces: [1,2] and
[1,2,3], contributing 3 and 6 slices respectively, for 9 in all.
```

### Example 3

```text
Input: nums = [5]
Output: 1
Explanation: A lone element forms a single subarray, and it trivially
never breaks the ascent.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

For each position, ask how many qualifying slices end exactly there.

### Hint 2

That count is one more than the count at the previous position whenever
the rise continues into the current element, and it resets to one
otherwise — add the per-position counts up over the whole array.
