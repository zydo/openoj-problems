# Cut a Ring in Half

## Description

You are handed the head of a circular linked list `list` whose nodes hold
non-negative integers. A circular linked list is an ordinary linked list
without an end: instead of ending in `null`, its last node's `next` points
back at the first node.

Cut this ring into two rings. The first must consist of the leading
`ceil(list.length / 2)` nodes of `list`, and the second must consist of
whatever nodes remain; both halves keep the relative order the nodes had
while traveling the original ring, and each half must be closed into a ring
of its own — its last node pointing at that half's first node.

Return an array `answer` of length 2, where the first element is the head of
the first ring and the second element is the head of the second ring.

### Example 1

```text
Input: list = [3,4,9,2,8]
Output: [[3,4,9],[2,8]]
Explanation: The ring holds 5 nodes and ceil(5 / 2) = 3, so the leading 3
nodes form the first ring while the last 2 nodes close into the second.
```

### Example 2

```text
Input: list = [10,20]
Output: [[10],[20]]
Explanation: The smallest allowed input: each of the two rings ends up
holding exactly one node.
```

### Example 3

```text
Input: list = [7,1,6,3,9,2,8,4]
Output: [[7,1,6,3],[9,2,8,4]]
Explanation: With an even count of 8 nodes the cut falls exactly in the
middle, giving two rings of 4 nodes each.
```

### Constraints

- The number of nodes in `list` is between 2 and 10⁵.
- `0 <= Node.val <= 10⁹`
- The last node's `next` points at the first node of the ring.

## Hints

### Hint 1

A ring has no `null` marker to stop at, so walk it once until the head comes
back around, counting nodes along the way — the node you stop on is the
tail.

### Hint 2

Once the size `n` is known, the first ring's last node sits exactly
`ceil(n / 2) - 1` steps from the head; a second, short walk lands on the cut
point.

### Hint 3

Two pointer writes finish the job: aim the cut node's `next` back at the
head, and re-aim the original tail — which still points at the head — at the
second ring's first node instead.

### Hint 4

Both halves must be genuine rings on their own; that second write is what
closes the second half.
