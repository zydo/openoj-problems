# Fewest Groups of Bounded Spread

## Description

You are given an integer array `nums` and an integer `k`. Split the
elements into one or more groups so that every element lands in exactly
one group, and no group spans a range wider than `k` — that is, within a
group the largest value minus the smallest value is at most `k`.

Return the smallest number of groups any such split can use.

### Example 1

```text
Input: nums = [8,15,3,10,21,6], k = 5
Output: 3
Explanation:
Sort the values: `[3,6,8,10,15,21]`. One optimal split puts `3,6,8` in the
first group (spread `8 - 3 = 5`), `10,15` in the second (spread
`15 - 10 = 5`), and `21` alone in the third. Three groups are unavoidable.
```

### Example 2

```text
Input: nums = [1,5,9,13,17], k = 4
Output: 3
Explanation:
The groups `{1,5}`, `{9,13}`, and `{17}` each stay within spread 4. No
grouping can manage with only two, since `17 - 1` is far beyond `k`.
```

### Example 3

```text
Input: nums = [4,8,2,16], k = 0
Output: 4
Explanation:
With `k = 0` a group may only hold equal values, and all four values are
distinct, so every value needs its own group.
```

### Example 4

```text
Input: nums = [100000], k = 0
Output: 1
Explanation:
A single element forms one group on its own.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`
- `0 <= k <= 10⁵`

## Hints

### Hint 1

Inside a group only its smallest and largest values matter; everything in
between is free to join. The order of elements in `nums` carries no
weight.

### Hint 2

Think of the values laid out on a number line: once a group's minimum is
fixed, it can absorb every value up to that minimum plus `k`, and the
first value beyond must start a fresh group.

### Hint 3

Sorting `nums` turns that observation into a single left-to-right sweep.
