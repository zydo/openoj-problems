# Two-Type Harvest Run

## Description

A row of trees is represented by `fruits`, where `fruits[i]` identifies the
type produced by the tree at position `i`. You may begin at any tree and move
only to the right, harvesting exactly one fruit from each tree you pass.

You carry two containers, and each container can hold one fruit type with no
capacity limit. Stop immediately before a tree whose type fits neither
container. Return the largest number of consecutive trees that can be
harvested in one trip.

### Example 1

```text
Input: fruits = [3,3,1,2,1,1,2]
Output: 5
Explanation: The run [1,2,1,1,2] uses exactly two fruit types.
```

### Example 2

```text
Input: fruits = [4,2,2,4,3,3,2]
Output: 4
```

### Constraints

- `1 <= fruits.length <= 10⁵`
- `0 <= fruits[i] < fruits.length`
