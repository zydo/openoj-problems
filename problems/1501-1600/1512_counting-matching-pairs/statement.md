# Counting Matching Pairs

## Description

Given an integer array `nums`, count its **matching pairs**: index pairs
`(i, j)` with `i < j` whose entries hold the same value,
`nums[i] == nums[j]`.

Return how many such pairs the array contains.

### Example 1

```text
Input: nums = [6,3,6,6,3,9]
Output: 4
Explanation: The matching pairs are (0,2), (0,3), (2,3) on the 6s and
(1,4) on the 3s — four in total, 0-indexed.
```

### Example 2

```text
Input: nums = [8,8,8,8,8]
Output: 10
Explanation: Every two positions match, so all C(5,2) = 10 index pairs
count.
```

### Example 3

```text
Input: nums = [1,2,4,8]
Output: 0
Explanation: No two entries share a value, so no pair matches.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Tally how often each value appears. A value seen `c` times contributes
`c * (c - 1) / 2` matching pairs on its own, independent of the others.

### Hint 2

Equivalently, sweep the array once: the current occurrence of a value
pairs with every earlier occurrence, so add the running count before
incrementing it.
