# The Largest One-Window Value

## Description

You are given an integer array `nums` and an integer `k`. Consider every
contiguous window of `k` entries inside `nums` — there are
`nums.length - k + 1` of them. A value is one-window if it shows up in
exactly one of those windows, no matter how many times it repeats inside
that window. Return the largest one-window value in `nums`, or `-1` when
no value qualifies.

### Example 1

```text
Input: nums = [5,2,5,8], k = 2
Output: 8
Explanation: The windows are [5,2], [2,5] and [5,8]. The value 8 occurs
only inside [5,8]; 5 occurs in the two windows [5,2] and [5,8], and 2 in
the two windows [5,2] and [2,5]. The largest value with a single window
is 8.
```

### Example 2

```text
Input: nums = [7,7,3,8,8], k = 1
Output: 3
Explanation: With windows of one entry, a value is counted once per
occurrence: 7 appears in two windows, 8 in two, and 3 in exactly one.
The answer is 3.
```

### Example 3

```text
Input: nums = [6,6,9,9], k = 2
Output: -1
Explanation: The windows are [6,6], [6,9] and [9,9]. Both 6 and 9
appear in two windows each, so no value is confined to a single window
and the answer is -1.
```

### Constraints

- `1 <= nums.length <= 50`
- `0 <= nums[i] <= 50`
- `1 <= k <= nums.length`

## Hints

### Hint 1

The limits are tiny: sweep every window and keep, for each value, how
many windows contain it.

### Hint 2

Watch repeats inside one window — a value that occurs several times in
the same window must still be credited for that window only once.

### Hint 3

The answer is the largest value whose window tally is exactly one; if
every tally is zero or at least two, the answer is `-1`.
