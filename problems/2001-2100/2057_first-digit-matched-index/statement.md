# First Digit-Matched Index

## Description

An array `nums` is indexed starting from 0. Call a position _settled_ when
its value repeats the final digit of the position it sits at, that is
`nums[i] == i % 10`. Walk the array from the front and report the index of
the first settled position, or `-1` if the array has none.

Here `i % 10` is the remainder left over after dividing `i` by 10.

### Example 1

```text
Input: nums = [7,2,5,3]
Output: 3
Explanation: Positions 0 through 2 fail — their values 7, 2, 5 never equal
the digits 0, 1, 2 — while position 3 holds 3, matching its own final
digit.
```

### Example 2

```text
Input: nums = [9,9,1,2,8]
Output: -1
Explanation: No position's value equals the last digit of that position,
so the answer is -1.
```

### Example 3

```text
Input: nums = [6,3,2,7,4,5,1]
Output: 2
Explanation: The value 2 at position 2 is the first one to repeat its
position's final digit.
```

### Constraints

- The array holds between 1 and 100 values.
- Every value is a single digit from 0 to 9.

## Hints

### Hint 1

Check positions in increasing order and stop at the first one whose value
repeats the last digit of its index — nothing earlier can be a better
answer.
