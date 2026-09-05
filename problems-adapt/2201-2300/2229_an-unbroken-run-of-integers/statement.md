# An Unbroken Run of Integers

## Description

Given an integer array `nums`, decide whether its values form an unbroken
run. The array is an unbroken run when every integer from its minimum `x`
up through `x + n - 1` appears in it, where `n` is the array's length —
viewed as a set, the values must be exactly `x, x + 1, …, x + n - 1`, with
no gap inside the window and no value outside it. Return `true` when `nums`
is an unbroken run and `false` otherwise.

### Example 1

```text
Input: nums = [8,6,7,9,10]
Output: true
Explanation: The smallest value is 6 and the length is 5, so the run must
cover 6 through 10 — and all five values are present.
```

### Example 2

```text
Input: nums = [4,6]
Output: false
Explanation: The window for minimum 4 and length 2 is 4 through 5, but 5
never appears.
```

### Example 3

```text
Input: nums = [0,2,1,3,5]
Output: false
Explanation: The window for minimum 0 and length 5 is 0 through 4, yet the
array carries 5 while missing 4.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Sorting the array puts a genuine run into its most readable shape.

### Hint 2

In sorted order an unbroken run steps up by exactly one at every adjacent
pair; a step of 0 or of 2 or more rules the array out.
