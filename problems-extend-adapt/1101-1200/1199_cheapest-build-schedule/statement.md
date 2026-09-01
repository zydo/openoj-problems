# Cheapest Build Schedule

## Description

A crew of construction workers must finish a list of blocks. Block `i`
takes `blocks[i]` units of work time, and a single block must be handled
by exactly one worker from start to finish.

At any moment a worker has exactly two options:

- Split into two workers. Each split event costs `split` units of time.
  When several workers split at the same moment, the splits overlap, so
  the whole simultaneous round still costs just `split`.
- Build one block, then go home.

Work starts with a single worker. Return the smallest total time in which
all the blocks can be completed.

### Example 1

```text
Input: blocks = [4], split = 7
Output: 4
Explanation: A lone block needs no crew at all — the initial worker
builds it in 4 time units.
```

### Example 2

```text
Input: blocks = [3, 3, 3, 3], split = 2
Output: 7
Explanation: Split once (2 units) into two workers, have each of them
split again in parallel (2 more units) into four workers, then all four
blocks are built at once: 2 + 2 + max(3, 3, 3, 3) = 7.
```

### Example 3

```text
Input: blocks = [1, 5, 9], split = 3
Output: 12
Explanation: After the first split, one worker takes the 9-unit block
(finishing at 3 + 9 = 12) while the other splits again and covers the two
shorter blocks, finishing no later than 6 + 5 = 11.
```

### Constraints

- `1 <= blocks.length <= 1000`
- `1 <= blocks[i] <= 10⁵`
- `1 <= split <= 100`

## Hints

### Hint 1

Chasing locally cheap assignments can mislead — the examples are enough
to show a plain greedy failing.

### Hint 2

Think of the whole schedule as one binary tree: leaves are blocks and
each internal node is a split.

### Hint 3

Build that tree bottom-up instead of top-down: which two partially built
subtrees are safest to merge under one new split?

### Hint 4

A min-heap of subtree completion times makes each merge cheap; the last
remaining value is the answer.
