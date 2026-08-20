# Minimum Deletions for a Peak Array

## Description

Call an array a **peak array** when it has at least three entries and
they rise strictly to one interior summit and then fall strictly away
from it: some index `i` with `0 < i < n - 1` satisfies

- `nums[0] < nums[1] < ... < nums[i]`, and
- `nums[i] > nums[i + 1] > ... > nums[n - 1]`.

Given `nums`, report how few entries must be deleted so that what
survives, still in its original order, is a peak array.

### Example 1

```text
Input: nums = [2,5,9,4,1]
Output: 0
Explanation: 2 < 5 < 9 and 9 > 4 > 1, so the array already peaks in the
middle and nothing needs to go.
```

### Example 2

```text
Input: nums = [4,3,7,8,2,6,1]
Output: 2
Explanation: Delete the entries 3 and 2 (indices 1 and 4). What is left,
[4,7,8,6,1], climbs to 8 and descends after it.
```

### Example 3

```text
Input: nums = [2,2,3,3,2,2]
Output: 3
Explanation: Repeated values can sit on neither slope, since both sides
compare strictly. The longest peak subsequence is [2,3,2], so three of
the six entries have to be dropped.
```

### Constraints

- `3 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁹`
- The input always admits at least one peak selection.

## Hints

### Hint 1

Turn the question inside out: deleting as little as possible means
keeping as much as possible. Hunt for the longest subsequence that is
itself a peak array.

### Hint 2

Such a subsequence is two classic chains glued at the summit. For every
index, compute the longest strictly rising chain ending there and the
longest strictly falling chain starting there.

### Hint 3

The summit cannot sit at an end of the array: counting itself, each of
the two chains must span at least two entries, or the shape degenerates
into a one-sided climb.
