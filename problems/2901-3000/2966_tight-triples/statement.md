# Tight Triples

## Description

You are given an integer array `nums` whose length `n` is a multiple of
3, and a positive integer `k`. Split `nums` into `n / 3` groups of three
elements each, using every element exactly once, so that within every
group the largest and smallest elements differ by at most `k`.

Return the groups as a 2D array. If no split can satisfy the condition,
return an empty array. When several splits work, any of them is
accepted.

### Example 1

```text
Input: nums = [9,4,6,2,8,3], k = 3
Output: [[2,3,4],[6,8,9]]
Explanation: Read in increasing order, the values chain into the
consecutive triples [2,3,4] and [6,8,9], whose widest spreads are
4 - 2 = 2 and 9 - 6 = 3 — both within k.
```

### Example 2

```text
Input: nums = [1,6,8,3,7,9], k = 3
Output: []
Explanation: The smallest value 1 must share a group with two values
no greater than 1 + 3 = 4, but only one element (3) is that small. No
valid split exists.
```

### Example 3

```text
Input: nums = [15,2,7,20,5,9,1,30,22,11,4,18], k = 10
Output: [[1,2,4],[5,7,9],[11,15,18],[20,22,30]]
Explanation: Every row of the output spans at most 9, comfortably
inside k = 10.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `n` is a multiple of 3
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= 10⁵`

## Hints

### Hint 1

A greedy instinct pays off here.

### Hint 2

Put the values in increasing order and try grouping three neighbors at
a time.
