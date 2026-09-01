# Kth Largest Digit String

## Description

The entries of an array `nums` are digit strings — each one spells an
integer, written with no leading zeros — and these integers can be far
too long to fit any fixed-width type. Together with `k`, the task is to
report, as a string, the entry holding the `k`th largest of those
integers.

Equal entries each occupy their own place in the ranking. In
`["1","2","2"]`, for instance, `"2"` takes both first and second place
and `"1"` lands third.

### Example 1

```text
Input: nums = ["12","9","100","45","7"], k = 2
Output: "45"
Explanation: Ordering the values gives `7, 9, 12, 45, 100`, so the
runner-up — the second largest — is `45`.
```

### Example 2

```text
Input: nums = ["100","999","1000","99"], k = 4
Output: "99"
Explanation: The values ascend as `99, 100, 999, 1000`, putting `99` in
fourth place.
```

### Example 3

```text
Input: nums = ["5","5","3"], k = 2
Output: "5"
Explanation: The two copies of `5` are ranked separately: one is the
largest, the other is the second largest, ahead of `3`.
```

### Constraints

- `1 <= k <= nums.length <= 10⁴`
- `1 <= nums[i].length <= 100`
- Every character of `nums[i]` is a digit.
- No `nums[i]` begins with `0`.

## Hints

### Hint 1

Two digit strings of different lengths name two integers of different
sizes — the longer one always wins, since it has no leading zeros.

### Hint 2

When the lengths tie, the contest is decided digit by digit: scan both
strings from the left, and the first position where they differ picks
the larger number.

### Hint 3

That pair of rules is exactly an ordering — sort with it, then walk
`k - 1` steps from the top (or index `len - k` from the bottom).
