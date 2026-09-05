# Nearest Shared Ancestor of a Binary Tree III

## Description

You are given the `root` of a binary tree and two values `p` and `q`,
each naming a distinct node in it. Return the value of their nearest
shared ancestor — the lowest node having both targets as descendants,
where every node counts as a descendant of itself. All node values are
unique, so a value pins down exactly one node.

This entry is a variant of the classic problem: the original hands the
solver the two target nodes themselves, each carrying a `parent`
pointer, and withholds the root entirely — the intended technique
climbs `.parent` links upward. Level-order arrays cannot carry "a node
without its root", so here the tree arrives top-down as `root` plus the
two target values `p` and `q`. The technique survives the switch almost
intact: recover every node's parent with one sweep from `root`, then
perform the same upward climbs the original performs through
`.parent`.

### Example 1

![diagram](figures/1650-1.svg)

```text
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The nodes valued 5 and 1 meet at the node valued 3.
```

### Example 2

![diagram](figures/1650-2.svg)

```text
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The node valued 5 sits above the node valued 4, and a
node is its own descendant, so 5 is the answer.
```

### Example 3

```text
Input: root = [5,3,8,1,4,7,9], p = 1, q = 4
Output: 3
```

### Constraints

- The tree holds between `2` and `10⁵` nodes.
- `-10⁹ <= Node.val <= 10⁹`
- Every node value in the tree is unique.
- `p != q`
- Both `p` and `q` name nodes that exist in the tree.

## Hints

### Hint 1

Memorize the chain of values from the node valued `p` up to the root.

### Hint 2

Then climb from the node valued `q`; the first value that shows up in
the memorized chain is the shared ancestor.
