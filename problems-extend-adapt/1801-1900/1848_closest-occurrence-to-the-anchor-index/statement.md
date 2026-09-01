# Closest Occurrence to the Anchor Index

## Description

You are given a 0-indexed integer array `nums` together with two integers
`target` and `start`. The value `start` acts as an anchor position.

Locate the index `i` whose value `nums[i]` equals `target` and whose
distance `abs(i - start)` from the anchor is as small as possible, then
return that distance.

The array is guaranteed to contain `target` somewhere, so a nearest
occurrence always exists.

### Example 1

```text
Input: nums = [4,8,4,9], target = 9, start = 0
Output: 3
Explanation: The only position holding 9 is index 3, and abs(3 - 0) = 3.
```

### Example 2

```text
Input: nums = [7,1,5,3,6], target = 3, start = 4
Output: 1
Explanation: The value 3 sits at index 3, one step left of the anchor at
index 4.
```

### Example 3

```text
Input: nums = [2,9,2,2,5], target = 2, start = 3
Output: 0
Explanation: Index 3 itself holds a 2, so the anchor already sits on an
occurrence and the distance is 0.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^4`
- `0 <= start < nums.length`
- `target` appears in `nums`.

## Hints

### Hint 1

A single pass over the array is enough — no ordering assumption exists to
exploit.

### Hint 2

Whenever `nums[i]` equals `target`, the candidate answer is
`abs(i - start)`; keep the smallest one seen.
