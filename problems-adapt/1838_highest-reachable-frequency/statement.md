# Highest Reachable Frequency

## Description

The **frequency** of a value is how many positions of an array hold it.

You are given an integer array `nums` and a budget `k` of increments. One
increment adds `1` to the element at a position of your choice. Increments
may all be spent on the same position or spread around, but no more than `k`
in total.

Return the largest frequency that any value can attain using at most `k`
increments.

### Example 1

```text
Input: nums = [3,1,4], k = 4
Output: 3
Explanation: Raising 1 to 4 costs 3 and raising 3 to 4 costs 1, four
increments in all, so nums becomes [4,4,4]. The value 4 now has frequency 3.
```

### Example 2

```text
Input: nums = [5,2,5,7], k = 4
Output: 3
Explanation: The two 5s are already tied, and lifting both to 7 costs
2 + 2 = 4. The array becomes [7,2,7,7], where 7 appears three times.
```

### Example 3

```text
Input: nums = [4,9,6], k = 1
Output: 1
Explanation: Every gap between two sorted neighbours is at least 2, so a
single increment cannot tie any pair of positions.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= 10⁵`

### Follow-up

Trying each candidate value against each candidate group is quadratic in the
worst case. After sorting, what structure does an optimal group of equal
values have?

## Hints

### Hint 1

Only increments exist, never decrements, so a group of positions that end up
equal was formed by raising smaller values toward a bigger one — never the
other way.

### Hint 2

Sort the array. The positions that end up equal become a contiguous block,
and the cheapest target for a block is its largest member, because that
member needs no raising at all.

### Hint 3

The cost of a block is its width times its largest member minus the sum of
its members. Sweep a window across the sorted array, shrinking from the left
whenever that cost exceeds `k`.
