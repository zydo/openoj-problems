# Zeros To The End

## Description

Rearrange the integer array `nums` so that every `0` comes after all
non-zero values, and the non-zero values appear in exactly the order they
started in.

Do the rearrangement in place, without building a copy of the array, and
return `nums`.

### Example 1

```text
Input: nums = [7,0,4,0,9]
Output: [7,4,9,0,0]
Explanation: 7, 4, and 9 keep their relative order; both zeros land at the
back.
```

### Example 2

```text
Input: nums = [0,0,-3]
Output: [-3,0,0]
Explanation: Negative values are ordinary non-zero values and move to the
front.
```

### Example 3

```text
Input: nums = [0,8]
Output: [8,0]
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

Follow up: how close to one move per element can you get?

## Hints

### Hint 1

One cursor must read every element. The useful second cursor marks the
slot where the next non-zero value belongs — everything left of it is
already settled.

### Hint 2

When the reading cursor meets a non-zero value, exchange it into that slot
and advance both cursors; when it meets a zero, step past and change
nothing.

### Hint 3

The exchange is a self-swap until the first zero appears, so a zero-free
prefix costs no writes at all.
