# The Lone Stretch

## Description

Given an integer array `nums`, look at every contiguous stretch it
contains — all of its subarrays. Most of those stretches reappear
somewhere else in the array, but a few occur exactly once.

Find the length of the shortest subarray that appears exactly once in
`nums`.

Two subarrays are the same when they span the same number of elements and
agree position by position.

### Example 1

```text
Input: nums = [5,5,5,5]
Output: 4
Explanation:
    Every value is 5, so [5] shows up four times and each length-2 or
    length-3 window repeats as well. The whole array is the only stretch
    that never repeats, and its length is 4.
```

### Example 2

```text
Input: nums = [7,1,7,2,9,2]
Output: 1
Explanation:
    The values 7 and 2 each appear twice, but 1 and 9 appear once — and a
    single element is itself a subarray. The shortest lone stretch
    therefore has length 1.
```

### Example 3

```text
Input: nums = [1,2,1,2,1]
Output: 3
Explanation:
    Singles repeat: [1] three times, [2] twice. The length-2 windows
    repeat too, with [1,2] and [2,1] each appearing twice. Among the
    length-3 windows, [2,1,2] occurs exactly once, so the answer is 3.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

### Hint 1

Fix a length and ask whether any window of that length occurs exactly
once; the whole array itself always qualifies, so an answer always
exists.

### Hint 2

Rolling hashes turn every window into a constant-size key: build prefix
hashes once, then count the windows of a fixed length with a hash map in
a single pass.

### Hint 3

Feasibility is monotone — stretching a one-of-a-kind window by one
element on either side keeps it one-of-a-kind — so binary search for the
smallest working length.
