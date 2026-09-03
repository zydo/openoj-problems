# Mountain Cut Balance

## Description

You are given an integer array `nums`.

Make exactly one cut so the array falls into two contiguous, non-empty
halves: the rise on the left and the fall on the right. With `n` the length
of `nums`, a cut after index `i` (0-indexed) keeps `nums[0..i]` as the left
half and hands `nums[i+1..n-1]` to the right half. The cut counts as clean
when the left half climbs strictly and the right half descends strictly; a
half holding a single element automatically satisfies both.

Among every clean cut, find the smallest possible absolute difference
between the sums of the two halves. If no cut is clean, return `-1`.

### Example 1

```text
Input: nums = [3,4,7,1]
Output: 1
Explanation: The clean cuts are i = 1 (left = [3,4], right = [7,1]) and
i = 2 (left = [3,4,7], right = [1]). Their differences are |7 - 8| = 1 and
|14 - 1| = 13, so the smallest is 1.
```

### Example 2

```text
Input: nums = [2,5,9,4]
Output: 6
Explanation: Cutting at i = 0 leaves right = [5,9,4], which does not
descend strictly. The cuts i = 1 (left = [2,5], right = [9,4]) and i = 2
(left = [2,5,9], right = [4]) are clean, with differences |7 - 13| = 6 and
|16 - 4| = 12. The smaller is 6.
```

### Example 3

```text
Input: nums = [1,2,3,4,5]
Output: 5
Explanation: The whole array climbs, so only the final element qualifies as
the right half: i = 3 gives left = [1,2,3,4], right = [5], a difference of
|10 - 5| = 5.
```

### Example 4

```text
Input: nums = [5,3,1,2]
Output: -1
Explanation: No left half starting at 5 can climb strictly, and the only
other candidate cuts fail the right half's descent, so no clean cut exists.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

A legal left half is always a prefix of the longest strictly rising run that
starts at the first element.

### Hint 2

Mirror that observation on the other side: a legal right half is a suffix of
the longest strictly falling run that ends at the last element.

### Hint 3

Each of the two one-pass scans fixes one boundary; only cut points squeezed
between both boundaries are clean, and there are at most a couple of them.

### Hint 4

Sweep the candidate cuts once with a running left sum, read the right sum as
the total minus it, and answer with the smallest gap — or `-1` when the
candidate window stays empty.
