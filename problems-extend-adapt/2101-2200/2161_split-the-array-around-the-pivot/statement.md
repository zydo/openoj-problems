# Split the Array Around the Pivot

## Description

An integer array `nums` and a value `pivot` are given, and `pivot` is
guaranteed to occur somewhere in `nums`. Reorder the array so it reads as
three consecutive blocks: every element smaller than `pivot` first, every
element equal to `pivot` in the middle, and every element greater than
`pivot` last. The reordering must also be stable across the outer blocks —
whenever two elements lie on the same side of `pivot`, the one that appeared
earlier in `nums` must still come first (elements equal to `pivot` are
interchangeable, so the middle block carries no order requirement).

Return `nums` after the reordering.

### Example 1

```text
Input: nums = [4,9,1,7,5,9], pivot = 9
Output: [4,1,7,5,9,9]
Explanation:
The elements 4, 1, 7, and 5 are all below the pivot, so they lead the array
in the order they appeared. The two copies of 9 fill the middle, and no
element exceeds the pivot.
```

### Example 2

```text
Input: nums = [2,-1,6,-3,0,2], pivot = 2
Output: [-1,-3,0,2,2,6]
Explanation:
The below-pivot elements -1, -3, and 0 come first with their original order
intact, the two 2s form the middle block, and 6 closes the array.
```

### Example 3

```text
Input: nums = [5], pivot = 5
Output: [5]
Explanation:
The only element equals the pivot, so the array is left unchanged.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁶ <= nums[i] <= 10⁶`
- `pivot` appears among the values of `nums`.

## Hints

### Hint 1

Sweep the array once and park each element in one of three buckets chosen by
how it compares to `pivot`, letting each bucket fill in encounter order.

### Hint 2

Concatenating the buckets in small-equal-large order already meets every
requirement — stability included, because each bucket was filled left to
right.
