# Fewest Block Adjustments to Match a Target

## Description

You are given two arrays of positive integers, `nums` and `target`, of equal
length.

Each operation selects a contiguous block of `nums` and either raises every
element in that block by `1` or lowers every element in it by `1`.

Return the least number of operations that turns `nums` into `target`
element by element.

### Example 1

```text
Input: nums = [2,2,2], target = [5,5,5]
Output: 3
Explanation: Every element needs the same +3, and a block can cover all of it
at once, so three identical operations on the whole array suffice: the answer
is the shared gap itself, not the gap times the length.
```

### Example 2

```text
Input: nums = [4,2,6,3], target = [2,5,4,3]
Output: 7
Explanation: The first three elements all sit too high by 2, so lower the
block nums[0..2] twice. That leaves nums = [2,0,4,3], and position 1 now needs
a +5 on its own: 2 + 5 = 7 operations.
```

### Example 3

```text
Input: nums = [1,2,1,2], target = [2,1,2,1]
Output: 4
Explanation: Neighbouring cells always pull in opposite directions, so no
block of length above 1 ever helps; each of the four cells pays its own
single adjustment.
```

### Constraints

- `1 <= nums.length == target.length <= 10⁵`
- `1 <= nums[i], target[i] <= 10⁸`

## Hints

### Hint 1

Only how far `nums` misses `target` at each position matters. What does one
operation look like when written against the array of those misses?

### Hint 2

One operation paints a contiguous stretch of the miss-array with `+1` or with
`-1`. Think of the miss-array as a skyline that must be flattened to zero,
and of operations as coats of paint.
