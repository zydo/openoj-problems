# Earliest Settled Index II

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

Every index `i` gets a spread value:

- `max(nums[0..i])` is the largest value occurring from the start of the
  array through `i`;
- `min(nums[i..n - 1])` is the smallest value occurring from `i` through the
  end.

The spread value of `i` is the difference between those two numbers. Index
`i` is _settled_ when its spread value is at most `k`.

Return the smallest settled index, or `-1` if no index qualifies.

### Example 1

```text
Input: nums = [6,12,3,10], k = 6
Output: 0
Explanation: At index 0, max = 6 and min = 3, so the spread is 6 - 3 = 3,
which is at most k = 6. Index 0 is settled, so the answer is 0.
```

### Example 2

```text
Input: nums = [8,5,9,2,6], k = 4
Output: 4
Explanation:
    Index 0: max = 8, min = 2, spread = 6.
    Index 1: max = 8, min = 2, spread = 6.
    Index 2: max = 9, min = 2, spread = 7.
    Index 3: max = 9, min = 2, spread = 7.
    Index 4: max = 9, min = 6, spread = 3, which is at most k = 4.
    The answer is 4.
```

### Example 3

```text
Input: nums = [5,0,9,4], k = 3
Output: -1
Explanation: Every spread value equals 5, which exceeds k = 3, so no index
is settled and the answer is -1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `0 <= k <= 10⁹`

## Hints

### Hint 1

A single right-to-left pass can store `suffMin[i]`, the minimum of
`nums[i..n - 1]`, for every index.

### Hint 2

Then sweep left to right carrying the largest value seen so far; at index
`i` the difference of that running maximum and `suffMin[i]` is exactly the
spread value.

### Hint 3

The first index whose spread is at most `k` is the answer; report `-1` when
the sweep finishes without one.
