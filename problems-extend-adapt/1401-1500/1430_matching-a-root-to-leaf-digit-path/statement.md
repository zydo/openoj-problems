# Matching a Root-to-Leaf Digit Path

## Description

Every node of a binary tree holds a single digit. Reading the values
along a walk that starts at the root and stops at a leaf spells out a
sequence of digits, one per level. Given an array of digits, decide
whether it is exactly one of those readouts.

Three conditions have to hold at once for the array to match. Some
root-to-leaf walk must agree with the array position by position, the
walk must visit precisely `arr.length` nodes, and the node where it
stops must be a leaf — one with no children. A walk that still has
array left when it hits a leaf, or that exhausts the array while
standing on a node that has further down to go, does not count.

### Example 1

![diagram](figures/1430-1.svg)

```text
Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
Output: true
Explanation:
The walk 0 -> 1 -> 0 -> 1 reads out exactly `arr` and ends on a leaf
(shown in green in the figure).
Two other walks of this tree qualify as well:
0 -> 1 -> 1 -> 0
0 -> 0 -> 0
```

### Example 2

![diagram](figures/1430-2.svg)

```text
Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
Output: false
Explanation: The walk 0 -> 0 -> 1 never gets off the ground — the node
where it would need the final 1 has no such child, so no path spells
this array at all (marked in the figure).
```

### Example 3

![diagram](figures/1430-3.svg)

```text
Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
Output: false
Explanation: The walk 0 -> 1 -> 1 does exist, but it stops on a node
that still has children (marked in the figure), so it reads a prefix of
a path rather than a whole one.
```

### Constraints

- `1 <= arr.length <= 5000`
- `0 <= arr[i] <= 9`
- Every node in the tree holds a digit from 0 through 9.

## Hints

### Hint 1

Walk the tree depth-first, carrying two pieces of state: the node you
currently stand on and how far through the array you have gotten.

### Hint 2

A match completes only when the array has just been exhausted and the
node you stand on has no children.
