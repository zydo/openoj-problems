# Single Well-Formed Tree

## Description

There are `n` nodes labeled `0` through `n - 1`. For every node `i`, two
arrays name its children: `leftChild[i]` and `rightChild[i]` give the
labels of the left and right child, or `-1` when that side is empty.
Decide whether the whole set of nodes, connected by exactly these child
pointers, makes up one valid binary tree — nothing more, nothing less.

The nodes carry no values; only their labels matter here.

### Example 1

![diagram](figures/1361-1.svg)

```text
Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
Output: true
```

### Example 2

![diagram](figures/1361-2.svg)

```text
Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
Output: false
```

### Example 3

![diagram](figures/1361-3.svg)

```text
Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
Output: false
```

### Constraints

- `n == leftChild.length == rightChild.length`
- `1 <= n <= 10⁴`
- `-1 <= leftChild[i], rightChild[i] <= n - 1`

## Hints

### Hint 1

Work out who each node's parent is, if it has one.

### Hint 2

In a proper tree no node is claimed twice, and precisely one node — the
root — is claimed by nobody.
