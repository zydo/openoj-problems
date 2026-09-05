# No Element at Its Neighbors' Midpoint

## Description

You are given an array `nums` of distinct integers. Rearrange its elements
so that nothing sitting in the interior lands exactly halfway between the
two elements beside it: for every `i` with `1 <= i < nums.length - 1`, the
value at `i` must differ from `(nums[i-1] + nums[i+1]) / 2`.

Plenty of orders have that property. This judge pins a single expected
answer: sort `nums` ascending, then lay the upper half of the sorted values
into the even positions `0, 2, 4, ...` and the lower half into the odd
positions `1, 3, 5, ...`, preserving the order within each half. Return
that arrangement.

### Example 1

```text
Input: nums = [10,4,7,1,9]
Output: [7,1,9,4,10]
Explanation:
Sorted, the array is [1,4,7,9,10]; the lower half [1,4] takes the odd
positions and the upper half [7,9,10] the even ones. Checking the interior:
at i=1 the value 1 sits between 7 and 9, whose average is 8; at i=2 the
value 9 sits between 1 and 4, average 2.5; at i=3 the value 4 sits between
9 and 10, average 9.5. No interior element is at its neighbors' midpoint.
```

### Example 2

```text
Input: nums = [5,12,3,8]
Output: [8,3,12,5]
Explanation:
Sorted: [3,5,8,12]. The upper half [8,12] fills the even positions, the
lower half [3,5] the odd ones. At i=1 the value 3 sits between 8 and 12
(average 10), and at i=2 the value 12 sits between 3 and 5 (average 4).
```

### Example 3

```text
Input: nums = [42,7,19]
Output: [19,7,42]
Explanation:
Sorted: [7,19,42]. The lower half is just [7], which takes position 1, and
the upper half [19,42] takes positions 0 and 2. The lone interior element,
7, sits between 19 and 42, whose average is 30.5.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`
- The elements of `nums` are all distinct.

## Hints

### Hint 1

An interior element can equal its neighbors' average only when one neighbor
is smaller and the other larger — the midpoint case. Every interior element
that is instead above both or below both of its neighbors is automatically
safe.

### Hint 2

Sorting first makes that guarantee effortless: interleave the two halves of
the sorted array and no two values from the same half ever sit adjacent,
so each interior element towers over or ducks under both neighbors.
