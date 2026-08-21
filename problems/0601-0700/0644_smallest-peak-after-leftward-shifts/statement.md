# Smallest Peak After Leftward Shifts

## Description

You are given an array `nums` of `n` non-negative integers.

One shift chooses an index `i` with `1 <= i < n` and `nums[i] > 0`, removes
one unit from `nums[i]`, and adds that unit to `nums[i - 1]`. Value travels
one step left — never right.

Apply as many shifts as you like. Return the smallest value the array's
maximum cell can be reduced to.

### Example 1

```text
Input: nums = [4,9,2,5]
Output: 7
Explanation:
The first two cells hold 13 units between them, and no shift ever moves a
unit out of that pair, so leveled as evenly as possible they peak at
ceil(13 / 2) = 7. Two shifts from index 1 to index 0 give [6,7,2,5], whose
maximum is 7.
```

### Example 2

```text
Input: nums = [8,0,0]
Output: 8
Explanation:
Value never travels rightward, so the leading 8 can only grow. Leave the
array untouched.
```

### Example 3

```text
Input: nums = [6,6,6]
Output: 6
Explanation:
Every prefix is already level, and every prefix ceiling equals 6.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Watch a prefix rather than a cell: after any sequence of shifts, can a single
unit ever leave the first `i` cells?

### Hint 2

If the first `i` cells permanently hold `S` units, how small could their
largest cell possibly be?

### Hint 3

Take the ceiling average of every prefix. The largest of those numbers is a
floor on the answer — and patient leveling shows it is reachable too.
