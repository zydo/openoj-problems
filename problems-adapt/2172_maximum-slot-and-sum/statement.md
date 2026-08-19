# Maximum Slot AND Sum

## Description

You are given an integer array `nums` of length `n` and an integer `slots`.
The slots are numbered `1` through `slots`, and each holds at most two
numbers.

Distribute every element of `nums` among the slots. A placement scores one
point per element: the value of the element bitwise-AND-ed with the number
of its slot. The total score is the sum of those points.

Return the maximum total score over all valid placements.

Slots may sit empty, and a slot with two elements scores both of them.

### Example 1

```text
Input: nums = [1,6,2,8,3,5], slots = 3
Output: 9
Explanation: Put 1 and 8 into slot 1, 6 and 2 into slot 2, 3 and 5 into slot 3.
The score is (1 AND 1) + (8 AND 1) + (6 AND 2) + (2 AND 2) + (3 AND 3) + (5 AND 3)
= 1 + 0 + 2 + 2 + 3 + 1 = 9.
```

### Example 2

```text
Input: nums = [2,7], slots = 3
Output: 5
Explanation: Put 2 into slot 2 and 7 into slot 3, leaving slot 1 empty.
The score is (2 AND 2) + (7 AND 3) = 2 + 3 = 5. Nothing forces a number into
a slot that shares its bits: 7 simply has no slot 7 to call home, and slot 3
keeps two of its three bits.
```

### Example 3

```text
Input: nums = [9,9,11,11], slots = 3
Output: 8
Explanation: Both nines fit in slot 1 and both elevens in slot 3.
The score is (9 AND 1) + (9 AND 1) + (11 AND 3) + (11 AND 3) = 1 + 1 + 3 + 3 = 8.
Slot 2 stays empty — capacity two is a ceiling, not a quota.
```

### Constraints

- `n == nums.length`
- `1 <= slots <= 9`
- `1 <= n <= 2 * slots`
- `1 <= nums[i] <= 15`

## Hints

### Hint 1

At most eighteen elements ever need placing. What is the smallest fact about
a half-finished placement that determines the choices still open to you?

### Hint 2

Which elements are already placed hardly matters — only how many, and where
the remaining room is. Split each slot into two single positions and record
the filled ones in one bitmask.

### Hint 3

The number of set bits in the mask says which element goes next. From each
state, drop that element into every unfilled position and keep the best
resulting score.
