# Floor and Ceiling in a Search Tree

## Description

You are given the `root` of a binary search tree and a list `queries` of `n`
positive integers.

For each `queries[i]`, build the pair `answer[i] = [floor, ceiling]`:

- the floor is the largest value stored in the tree that does not exceed
  `queries[i]`, or `-1` if every stored value is larger;
- the ceiling is the smallest stored value that is at least `queries[i]`, or
  `-1` if every stored value is smaller.

Return `answer`.

### Example 1

```text
Input: root = [18,7,40,3,10,22,52,null,null,null,null,null,null,45], queries = [7,30,60]
Output: [[7,7],[22,40],[52,-1]]
Explanation:
- Query 7 is stored in the tree, so it serves as its own floor and ceiling:
  [7,7].
- No value lies between 22 and 40, so query 30 takes 22 as its floor and 40
  as its ceiling.
- Every stored value is below 60, so the floor is 52 and the ceiling is -1.
```

![The search tree holding 3, 7, 10, 18, 22, 40, 45, 52; queries 7, 30, 60 receive the pairs [7,7], [22,40], [52,-1].](figures/example-1.svg)

### Example 2

```text
Input: root = [8,null,21], queries = [5]
Output: [[-1,8]]
Explanation: Both stored values exceed 5, so no floor exists; the smallest of
them, 8, is the ceiling.
```

### Constraints

- The tree has between `2` and `10⁵` nodes.
- `1 <= Node.val <= 10⁶`
- `n == queries.length`
- `1 <= n <= 10⁵`
- `1 <= queries[i] <= 10⁶`

## Hints

### Hint 1

What single walk over a binary search tree hands you every value already in
order?

### Hint 2

With the values laid out sorted, each query becomes two lookups: the last
entry not exceeding it, and the first entry not below it.

### Hint 3

Both lookups are binary searches; mind the two ends, where one side of the
pair falls off the array and turns into `-1`.
