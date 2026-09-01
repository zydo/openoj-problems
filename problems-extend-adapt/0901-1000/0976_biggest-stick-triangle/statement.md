# Biggest Stick Triangle

## Description

Out of an array of stick lengths `nums`, choose three lengths that can be
the sides of a triangle with non-zero area, and return the largest
perimeter such a choice can reach. When no three lengths manage to form a
non-zero-area triangle, return `0`.

Three lengths make a triangle of non-zero area precisely when every two of
them sum to strictly more than the third. Once the two shorter sides add up
to exactly the longest, the figure flattens into a line segment and has no
area.

### Example 1

```text
Input: nums = [3,4,5,9]
Output: 12
Explanation: The tempting triple 4, 5, 9 fails — 4 + 5 equals 9, a flat
line. The triple 3, 4, 5 is a genuine triangle, with perimeter 12.
```

### Example 2

```text
Input: nums = [8,8,3]
Output: 19
Explanation: The lengths 3, 8, and 8 form a triangle, and its perimeter is
3 + 8 + 8 = 19.
```

### Example 3

```text
Input: nums = [2,5,30,40]
Output: 0
Explanation: In every triple the two shorter lengths fall short of the
longest, so no non-degenerate triangle can be built at all.
```

### Constraints

- `3 <= nums.length <= 10⁴`
- `1 <= nums[i] <= 10⁶`
