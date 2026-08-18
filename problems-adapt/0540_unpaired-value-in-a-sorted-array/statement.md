# Unpaired Value In A Sorted Array

## Description

You are given a sorted array `nums` in which every value occurs exactly
twice — except for one value, which occurs exactly once.

Return the one value that has no partner.

Your solution should run in `O(log n)` time with `O(1)` extra space.

### Example 1

```text
Input: nums = [5,5,9,13,13,16,16,22,22]
Output: 9
Explanation: 9 stands alone in the middle; every other value appears twice.
```

### Example 2

```text
Input: nums = [6,6,15,15,27]
Output: 27
Explanation: The unpaired value can sit at the very end, after every
intact pair.
```

### Example 3

```text
Input: nums = [19]
Output: 19
Explanation: An array of one element contains no pairs at all.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`
- Each value in `nums` appears exactly twice, except exactly one value
  which appears exactly once.

## Hints

### Hint 1

Cut the array at the unpaired value: on the left, every pair occupies an
even slot followed by its twin on the next odd slot; on the right, the
pairing has slipped and each pair starts on an odd slot.

### Hint 2

That slip only happens once, so it is a monotone property — search for it.
Look at even positions only: if `nums[mid] == nums[mid + 1]` the pair there
is intact and the slip lies further right; otherwise the unpaired value is
at `mid` or earlier.

### Hint 3

Keep `lo = 0` and `hi = n - 1` and shrink until they meet; `nums[lo]` is
the answer. If a midpoint lands on an odd slot, step it back one so that
`mid` and `mid + 1` are always a candidate pair.
