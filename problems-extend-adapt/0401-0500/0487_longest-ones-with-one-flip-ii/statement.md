# Longest Ones With One Flip II

## Description

Given a binary array `nums`, find the longest consecutive block of `1`s you
can obtain by flipping at most one `0` to `1`.

You are not required to actually perform a flip when one is not needed, and
an all-ones array is already maximal.

### Example 1

```text
Input: nums = [0,1,1,0,1,0,1,1]
Output: 4
Explanation: Flipping the `0` at index 3 gives `[0,1,1,1,1,0,1,1]`, whose
longest run of ones has length 4.
```

### Example 2

```text
Input: nums = [1,0,0,1,1]
Output: 3
Explanation: Flipping the `0` at index 2 yields `[1,0,1,1,1]`; no single flip
creates a longer run.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- Each `nums[i]` is `0` or `1`.

### Follow-up

Suppose the values arrive one at a time as a stream far too large to store.
How would you report the answer while consuming each value once?