# The Heaviest Level of a Tree

## Description

Picture a binary tree laid out level by level: the root sits alone on level
`1`, its children on level `2`, their children on level `3`, and so on. A
level's **weight** is the sum of the values of all nodes on it.

Given the `root` of such a tree, return the smallest level number whose
weight is the largest over the whole tree. If several levels tie for the
largest weight, the smallest of their numbers wins.

### Example 1

![tree diagram](figures/1161-1.svg)

```text
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: The level weights are 1, 7 + 0 = 7, and 7 + -8 = -1, so level
2 carries the largest weight.
```

### Example 2

```text
Input: root = [-5,-8,-3,4,null,6,7]
Output: 3
Explanation: Level 1 weighs -5 and level 2 weighs -8 + -3 = -11, while the
three leaves on level 3 add up to 4 + 6 + 7 = 17 — the clear winner.
```

### Example 3

```text
Input: root = [2,-1,3]
Output: 1
Explanation: Both levels weigh 2. The tie goes to the smaller level number,
so the answer is 1.
```

### Constraints

- The tree holds between `1` and `10⁴` nodes.
- Every node value lies in the range `[-10⁵, 10⁵]`.

## Hints

### Hint 1

The answer comes from comparing one aggregate per level — the total value
of that level's nodes.

### Hint 2

Either traversal works if you know which level each node belongs to.

### Hint 3

A breadth-first walk naturally processes one level per round, so the level
number and the running sum can advance together.

### Hint 4

Be careful with ties and with all-negative trees: the first level to reach
the maximum must win, and level 1 is a legitimate champion.
