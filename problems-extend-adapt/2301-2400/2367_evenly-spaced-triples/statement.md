# Evenly Spaced Triples

## Description

You are given a strictly increasing integer array `nums` and a positive
integer `diff`. An index triple `(i, j, k)` is evenly spaced when

- `i < j < k`,
- `nums[j] - nums[i] == diff`, and
- `nums[k] - nums[j] == diff`,

that is, the three values climb by exactly `diff` at each step.

Return how many evenly spaced triples `nums` contains.

### Example 1

```text
Input: nums = [1,3,5,7,9,11,13], diff = 2
Output: 5
Explanation: Every run of three consecutive entries qualifies: (1,3,5),
(3,5,7), (5,7,9), (7,9,11), and (9,11,13) — five in all. Each takes a
middle value whose neighbours on both sides sit exactly 2 away.
```

### Example 2

```text
Input: nums = [2,6,10,15,19,23], diff = 4
Output: 2
Explanation: The triple (0, 1, 2) qualifies since 6 - 2 = 10 - 6 = 4,
and (3, 4, 5) qualifies since 19 - 15 = 23 - 19 = 4. No other middle
value has both of its required partners present.
```

### Example 3

```text
Input: nums = [10,20,31], diff = 10
Output: 0
Explanation: The only candidate triple fails its last step: 31 sits 11
above 20, not 10.
```

### Constraints

- `3 <= nums.length <= 200`
- `0 <= nums[i] <= 200`
- `1 <= diff <= 50`
- `nums` is strictly increasing.

## Hints

### Hint 1

A triple is decided by its middle element: ask, for each value, whether
`value - diff` and `value + diff` both occur.

### Hint 2

The array's ordering fixes the indices once the values are known, so a
hash set plus one sweep is enough.
