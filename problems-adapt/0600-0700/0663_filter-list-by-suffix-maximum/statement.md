# Filter List by Suffix Maximum

## Description

You are given `head`, the first node of a singly linked list.

Delete every node for which some node **strictly greater** appears later in
the list. A node may stay even when larger values sit ahead of it — only what
follows matters, and equal values never count as greater.

Return the head of the resulting list.

### Example 1

```text
Input: head = [3,7,12,4,9]
Output: [12,9]
Explanation: 3 and 7 both have 12 after them, and 4 has 9 after them, so all
three are deleted. Neither 12 nor 9 is followed by anything larger.
```

![List [3,7,12,4,9]; nodes 3, 7 and 4 are removed, leaving 12 -> 9.](figures/example-1.svg)

### Example 2

```text
Input: head = [9,6,4,2]
Output: [9,6,4,2]
Explanation: Values only shrink from left to right, so no node is ever
outdone by anything behind it and the list is returned unchanged.
```

### Example 3

```text
Input: head = [8,8,8]
Output: [8,8,8]
Explanation: A later node must be strictly greater to force a deletion.
Matches do not, so every node stays.
```

### Constraints

- The list has between `1` and `10⁵` nodes.
- `1 <= Node.val <= 10⁵`

## Hints

### Hint 1

Whether a node survives depends only on values that come after it — a fact
about the suffix it starts. Visit the nodes in reverse.

### Hint 2

Marching right to left, carry the largest value seen so far; a node survives
exactly when its own value is at least that running maximum.

### Hint 3

Attach each surviving node to the front of the answer as you go, and the
result comes out in the original left-to-right order with no extra reversal.
