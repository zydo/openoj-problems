# Lone Element and One Pair

## Description

The integer array `nums` obeys a strict filling pattern: one value occupies a
single position, a second value occupies exactly two positions, and every
remaining value occupies exactly three positions.

Return a length-2 array whose first entry is the value occupying one position
and whose second entry is the value occupying two.

It must run in `O(n)` time and `O(1)` extra space.

### Example 1

```text
Input: nums = [3,8,3,3,8,8,1,5,5]
Output: [1,5]
Explanation: The value 1 appears once and the value 5 appears twice; 3 and 8
each appear three times.
```

### Example 2

```text
Input: nums = [9,4,4]
Output: [9,4]
Explanation: The array is as short as the rules allow: one single 9 and one
pair of 4s, with nothing left over.
```

### Example 3

```text
Input: nums = [-2,-2,-2,-7,-7,6]
Output: [6,-7]
Explanation: Negative values follow the same rules: 6 appears once, -7 twice,
and -2 three times.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- The length of `nums` is a multiple of `3`.
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- One value occurs once, another exactly twice, and the rest exactly three
  times each.

## Hints

### Hint 1

Values appearing three times cancel out of any per-bit count taken modulo 3,
leaving only the bits of the two special values.

### Hint 2

Keep two running masks: bits counted one time (mod 3) build the single
occurrence, and bits counted two times (mod 3) build the pair.
