# Cycle Entry In A List

## Description

A singly linked chain of nodes contains a cycle when following outgoing links
from the front eventually returns you to a node you have already stood on. Find
the first node of that cycle — the one the walk arrives at twice before any
other.

The judge cannot hand you node objects, so the chain arrives flattened into two
arguments: `values` lists the node values front to back, and `tailLink` is the
index of the node that the final node's outgoing link points at, or `-1` when
the final node points at nothing. Build the chain from `values`, attach that
closing link when `tailLink` is not `-1`, and then locate the cycle's first
node in the chain you built.

Because the judge compares numbers rather than node objects, report the
**position** of that node within `values`, counting from zero. Report `-1` when
the chain has no cycle. Leave the chain as you found it.

### Example 1

```text
Input: values = [4,11,6,2], tailLink = 1
Output: 1
Explanation: The last node links back to the node holding 11, so the walk
runs 4, then circles 11, 6, 2 forever. The first node it repeats is 11, at
position 1.
```

### Example 2

```text
Input: values = [9,-2,5], tailLink = 2
Output: 2
Explanation: The final node links to itself, so the cycle is that node alone.
```

### Example 3

```text
Input: values = [20,-6,14], tailLink = -1
Output: -1
Explanation: The final node points at nothing, so the walk ends and no node
is ever repeated.
```

### Constraints

- `values` holds between `0` and `10⁴` node values.
- Each value lies between `-10⁵` and `10⁵` inclusive.
- `tailLink` is `-1`, or an index that exists in `values`.

### Follow-up

The entry can be found without remembering the nodes you have visited. Can you
find a method whose extra memory does not grow with the chain?

## Hints

### Hint 1

Build the nodes first, wire them front to back, and only then attach the final
node's link to the index `tailLink` names. The answer is counted in positions,
so once you hold the entry node you still have to walk from the front to it.

### Hint 2

Two walkers from the front, one node per step against two, settle the
existence question: if the fast one reaches the end there is no cycle, and
otherwise the two land together somewhere inside the loop.

### Hint 3

Where they land is not the entry, but it is fixed by it. Name three distances:
front to entry, entry to the landing node, and the rest of the lap back to the
entry. Write down how far each walker has travelled and use the fact that one
has gone exactly twice as far as the other.

### Hint 4

The algebra collapses to "front-to-entry equals landing-point-to-entry". So
restart one walker at the front, leave the other where it landed, and step both
one node at a time — they meet on the entry.
