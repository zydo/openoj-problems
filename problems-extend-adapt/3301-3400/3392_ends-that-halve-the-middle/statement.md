# Ends That Halve The Middle

## Description

You are given an integer array `nums`. Slide over every contiguous
window of exactly three elements and count the windows whose two outer
numbers add up to exactly half the middle number.

Return that count.

### Example 1

```text
Input: nums = [1,4,1,3,10,2]
Output: 2
Explanation: The windows [1,4,1] and [3,10,2] pass: 1 + 1 = 2 is half
of 4, and 3 + 2 = 5 is half of 10. Neither of the remaining windows
does.
```

### Example 2

```text
Input: nums = [-1,2,2,-1]
Output: 2
Explanation: Both windows in the array pass: the outer pair sums to 1
each time, and 1 is exactly half of the middle 2.
```

### Example 3

```text
Input: nums = [2,2,2]
Output: 0
Explanation: The only window puts its ends at 2 + 2 = 4, which is not
half of the middle 2.
```

### Constraints

- `3 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

The array is tiny. Check every run of three neighbors directly against
the condition.
