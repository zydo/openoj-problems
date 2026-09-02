# Combine Two Id-Value Tables

## Description

You are given two 2D integer arrays, `nums1` and `nums2`. Every row is a
pair `[id, value]` saying that the item identified by `id` carries that
value. Within each array the ids are unique and the rows are sorted in
ascending order by id.

Blend the two tables into one, still sorted in ascending order by id,
following two rules:

- an id that occurs in either table appears exactly once in the result;
- a shared id's value is the sum of its two values, treating a table
  that lacks the id as contributing `0`.

Return the blended table.

### Example 1

```text
Input: nums1 = [[3,5],[7,2]], nums2 = [[2,1],[3,4],[9,6]]
Output: [[2,1],[3,9],[7,2],[9,6]]
Explanation: Id 2, 7, and 9 occur in only one table each and keep their
values. Id 3 is shared, so its value becomes 5 + 4 = 9.
```

### Example 2

```text
Input: nums1 = [[1,1],[5,5]], nums2 = [[1,2],[5,3]]
Output: [[1,3],[5,8]]
Explanation: Both ids are shared: 1 + 2 = 3 and 5 + 3 = 8.
```

### Example 3

```text
Input: nums1 = [[4,10]], nums2 = [[2,3],[4,7],[6,1]]
Output: [[2,3],[4,17],[6,1]]
Explanation: Id 4 is shared and totals 10 + 7 = 17; ids 2 and 6 pass
through unchanged from nums2.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 200`
- `nums1[i].length == nums2[j].length == 2`
- `1 <= idi, vali <= 1000`
- Each array contains unique ids.
- Each array is sorted in strictly ascending order by id.

## Hints

### Hint 1

A dictionary keyed by id collects the totals in a single sweep — or,
because both inputs are already sorted by id, two pointers can emit the
answer directly in order.
