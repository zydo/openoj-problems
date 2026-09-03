# Task Tree Wrap-Up I

## Description

A project consists of `n` tasks numbered `0` through `n - 1`, arranged in a
tree whose root is task `0`. The tree is described by a 2D array `edges` of
length `n - 1`, where `edges[i] = [ui, vi]` means task `ui` is the parent of
task `vi`.

Each task also carries a workload: `baseTime[i]` is the time task `i`
itself needs. The moment a task finishes — its finish time — follows from
its subtree:

- A leaf task finishes at `baseTime[i]`.
- Any other task first waits for all of its children. Let `earliest` be the
  smallest finish time among its children and `latest` the largest. The
  task then stays busy for `ownDuration = (latest - earliest) + baseTime[i]`
  — it absorbs the waiting spread plus its own workload — and finishes at
  `latest + ownDuration`.

Return the finish time of the root, task `0`.

### Example 1

```text
Input: n = 2, edges = [[0,1]], baseTime = [3,4]
Output: 7
Explanation:
    Task 1 is a leaf and finishes at 4.
    Task 0 waits for that single child: earliest = latest = 4, so
    ownDuration = (4 - 4) + 3 = 3, and task 0 finishes at 4 + 3 = 7.
```

### Example 2

```text
Input: n = 5, edges = [[0,1],[0,2],[1,3],[1,4]], baseTime = [2,1,5,6,3]
Output: 17
Explanation:
    The leaves finish at 6 (task 3), 3 (task 4) and 5 (task 2).
    Task 1 sees children finishing at 6 and 3: the spread is 3, its own
    work is 1, so it stays busy for 4 and finishes at 6 + 4 = 10.
    Task 0 sees 10 and 5: the spread is 5 plus its own 2, so it finishes
    at 10 + 7 = 17.
```

### Example 3

```text
Input: n = 1, edges = [], baseTime = [7]
Output: 7
Explanation:
    A lone task is its own leaf and finishes the moment its work is done.
```

### Example 4

```text
Input: n = 6, edges = [[0,1],[1,2],[2,3],[0,4],[4,5]], baseTime = [1,1,1,9,2,2]
Output: 19
Explanation:
    The chain 1 → 2 → 3 stacks each one-unit workload onto the leaf's 9,
    reaching 11 at task 1; the short branch ends at task 4 with finish
    time 4.
    Task 0 waits for 11 and 4, absorbs the spread of 7 plus its own 1,
    and wraps the project up at 11 + 8 = 19.
```

### Constraints

- `1 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i] == [ui, vi]`
- `0 <= ui, vi <= n - 1`
- `ui != vi`
- The edges are given parent-before-child and form a valid tree rooted at
  task `0`.
- `baseTime.length == n`
- `1 <= baseTime[i] <= 10^5`
- Every task's finish time is guaranteed to stay below `2^53`.

### Hint 1

Turn `edges` into children lists — every entry already points from a parent
to its child, so the tree builds itself in one pass.

### Hint 2

A postorder pass is all you need: settle every child before its parent.

### Hint 3

An internal task never needs its children's full list again — only the
smallest and largest of their finish times.
