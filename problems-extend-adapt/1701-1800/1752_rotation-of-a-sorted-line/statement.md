# Rotation of a Sorted Line

## Description

An array `nums` is interesting if some non-decreasing array — the
"original line" — could have been turned (rotated) to produce it.
Turning by `x` positions moves the element at index `i + x` (wrapping
around) to index `i`; turning by zero leaves the line alone. The
original line may contain duplicates.

Report whether `nums` is interesting.

### Example 1

```text
Input: nums = [5,6,7,1,2,3]
Output: true
Explanation: Turning the sorted array [1,2,3,5,6,7] by x = 3 positions
starts it at the 5: [5,6,7,1,2,3].
```

### Example 2

```text
Input: nums = [3,1,2,4]
Output: false
Explanation: No turning of any sorted array can produce nums.
```

### Example 3

```text
Input: nums = [2,2,3,1,2]
Output: true
Explanation: Turning the sorted array [1,2,2,2,3] by x = 2 positions
gives [2,2,3,1,2]; duplicates are allowed.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Read `nums` as a ring: its last element is followed by its first.

### Hint 2

A non-decreasing line, turned, drops in value exactly once — right at
the seam where the turned array restarts.

### Hint 3

So count the positions where a ring neighbor decreases; anything past
one such drop cannot come from a turned sorted line.
