# Peak Division Expression

## Description

You are given an array of positive integers `nums`. Read left to right,
the values would normally chain together as one long float division:
`nums[0] / nums[1] / nums[2] / ... / nums[n-1]`.

You may drop parentheses anywhere in that chain to change which divisions
group together first, and different groupings evaluate to different
values. Choose a grouping that makes the final value as large as
possible, and return that expression as a string.

The string you return must not carry any parenthesis pair that could be
deleted without changing how the expression groups — every parenthesis
you include has to actually matter.

### Example 1

```text
Input: nums = [840,60,5,4]
Output: "840/(60/5/4)"
Explanation: 840/(60/5/4) = 840/((60/5)/4) = 840/(12/4) = 840/3 = 280
The bold parenthesis in "840/((60/5)/4)" change nothing about how the
expression groups, so they are dropped in the answer.
Other groupings score lower:
840/60/5/4 = 0.7
840/(60/5)/4 = 17.5
840/60/(5/4) = 11.2
840/(60/(5/4)) = 17.5
```

### Example 2

```text
Input: nums = [6,8,3]
Output: "6/(8/3)"
Explanation: 6/(8/3) = 6/(8/3) = 18/8 = 2.25
Every other placement of parentheses in a three-value chain evaluates to
the unparenthesized default, 6/8/3 = 0.25, so grouping the last two
values is strictly better.
```

### Example 3

```text
Input: nums = [9,3]
Output: "9/3"
Explanation: With only two values there is a single division and nothing
left to regroup, so the answer is the plain chain with no parentheses at
all.
```

### Constraints

- `1 <= nums.length <= 10`
- `2 <= nums[i] <= 1000`
- Exactly one grouping reaches the maximum value for every input this
  problem tests.
