# Order By Magnitude

## Description

An integer array `nums` is given. Rearrange its elements so their
absolute values read in non-decreasing order from left to right, and
return the rearranged array.

The absolute value of an integer `x` is `x` itself when `x >= 0`, and
`-x` when `x < 0`.

Ties on magnitude are settled by a fixed rule so that exactly one
arrangement is correct: among elements sharing the same absolute value,
every negative element is placed before every positive one — between a
tied pair `-x` and `x`, the `-x` comes first. Elements equal in both
value and sign are interchangeable, since no way of reading the array
can tell them apart.

### Example 1

```text
Input: nums = [-7, 3, -3, 8]
Output: [-3, 3, -7, 8]
Explanation: The magnitudes read 7, 3, 3, 8. In sorted order they are
3, 3, 7, 8, and the tie at magnitude 3 places -3 ahead of 3.
```

### Example 2

```text
Input: nums = [0, -2, 5, -5, 2]
Output: [0, -2, 2, -5, 5]
Explanation: Zero has the smallest magnitude. The two magnitude-2
elements then come before the two magnitude-5 elements, with the
negative element first inside each tie.
```

### Example 3

```text
Input: nums = [6, -6, 6]
Output: [-6, 6, 6]
Explanation: All three magnitudes equal 6, so the lone negative element
moves to the front and the two equal 6s follow it.
```

### Constraints

- `1 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

Sort with a key that reads the absolute value first and the raw signed
value second — that second component enforces the
negative-before-positive tie rule entirely on its own.
