# Every Ordering

## Description

An array `nums` of distinct integers is handed over, and the task is to spell
out every way its elements can be arranged — all `nums.length!` orderings.

The full list is expected back in ascending lexicographic order: compare two
orderings element by element, and the smaller one comes first. Orderings that
share a leading run therefore appear with that run grouped together.

### Example 1

```text
Input: nums = [4,0,1]
Output: [[0,1,4],[0,4,1],[1,0,4],[1,4,0],[4,0,1],[4,1,0]]
```

All six arrangements of the three values, starting from the ones that lead
with `0`.

### Example 2

```text
Input: nums = [-5,2]
Output: [[-5,2],[2,-5]]
```

Two elements swap places, and the arrangement beginning with the smaller
value is listed first.

### Example 3

```text
Input: nums = [7]
Output: [[7]]
```

A lone element has exactly one ordering — itself.

### Constraints

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- Every integer in `nums` is distinct.
