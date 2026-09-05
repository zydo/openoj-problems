# Smallest Or-Pair Starts

## Description

You are handed an array `nums` of n prime numbers and build a companion
array `ans` of the same length. Position i holds the smallest non-negative
value that pairs with its own successor under OR to reproduce the prime:

    ans[i] OR (ans[i] + 1) == nums[i]

If nothing non-negative can be OR-ed with its successor to land on
`nums[i]`, that position is filled with -1 instead.

### Example 1

```text
Input: nums = [7,5,2,13]
Output: [3,4,-1,12]
Explanation:
For 7 the smallest value that works is 3, because 3 OR (3 + 1) = 7 and no
smaller value reaches 7.
For 5 the smallest value that works is 4, because 4 OR (4 + 1) = 5.
For 2 no value can work — an OR of a value with its successor is always
odd — so the slot is -1.
For 13 the smallest value that works is 12, because 12 OR (12 + 1) = 13.
```

### Example 2

```text
Input: nums = [29,3,101]
Output: [28,1,100]
Explanation:
28 OR (28 + 1) = 29, and nothing smaller reaches 29; 1 OR (1 + 1) = 3;
100 OR (100 + 1) = 101, and nothing smaller reaches 101.
```

### Constraints

- `1 <= nums.length <= 100`
- `2 <= nums[i] <= 1000`
- Each `nums[i]` is a prime number.

## Hints

### Hint 1

The bounds are tiny. Handle each prime on its own: walk candidate values
upward from 0 and take the first one meeting the OR condition — the first
hit along that walk is automatically the smallest.
