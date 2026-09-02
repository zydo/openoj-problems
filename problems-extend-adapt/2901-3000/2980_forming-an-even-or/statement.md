# Forming an Even OR

## Description

You are given an array `nums` of positive integers. Pick two or more of
its elements and OR them together bitwise. The OR is "even" when its
binary form ends in a zero — for instance 13 is `1101` (odd), while 12
is `1100` (even).

Decide whether any selection of two or more elements produces an even
OR. Return `true` if one exists and `false` otherwise.

### Example 1

```text
Input: nums = [3,8,5,12]
Output: true
Explanation: Choosing 8 and 12 gives 8 | 12 = 12, whose binary form
"1100" ends in two zeros.
```

### Example 2

```text
Input: nums = [1,2]
Output: false
Explanation: Only one element is even, and any two-element selection
has to include the odd 1, whose lowest bit keeps the OR odd.
```

### Example 3

```text
Input: nums = [4,14,22]
Output: true
Explanation: Every element is even here, so e.g. 4 | 14 = 14
("1110") already ends in a zero.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

OR never clears a bit, so if any selection works, some pair already
works.

### Hint 2

That means you can just try every pair — the array is tiny.

### Hint 3

The lowest bit of the OR is the AND of the operands' lowest bits, so
the real question is whether at least two elements of the array are
even.
