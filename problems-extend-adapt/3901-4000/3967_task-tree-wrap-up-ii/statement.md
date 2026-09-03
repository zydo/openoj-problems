# Task Tree Wrap-Up II

## Description

A project consists of `n` tasks numbered `0` through `n - 1`, connected as an
undirected tree. The tree is described by a 2D array `edges` of length
`n - 1`, where `edges[i] = [ui, vi]` is an undirected link between tasks
`ui` and `vi`.

Each task carries a workload: `baseTime[i]` is the time task `i` itself
needs. Pick any task to act as the root; once the root is fixed, every
task's finish time follows the same rule as before, read with respect to
that rooting:

- A leaf task finishes at `baseTime[i]`.
- Any other task first waits for all of its children. Let `earliest` be the
  smallest finish time among its children and `latest` the largest. The
  task then stays busy for `ownDuration = (latest - earliest) + baseTime[i]`
  and finishes at `latest + ownDuration`.

The project's wrap-up moment for a chosen root is the finish time of that
root. Return the smallest wrap-up moment over all choices of root.

### Example 1

```text
Input: n = 2, edges = [[0,1]], baseTime = [10,3]
Output: 13
Explanation:
    Rooting at task 0: leaf task 1 finishes at 3, and task 0 adds its own
    10 — 3 + 10 = 13. Rooting at task 1 instead would stack the heavier
    side on top: 10 + 10 = 20. The best wrap-up moment is 13.
```

### Example 2

```text
Input: n = 4, edges = [[0,1],[0,2],[0,3]], baseTime = [2,5,9,1]
Output: 16
Explanation:
    Root at the cheapest leaf, task 3. Below its neighbour, task 0 gathers
    the leaves finishing at 5 and 9, absorbs the spread of 4 plus its own
    2, and reaches 15; task 3 then adds only its own 1 — 16. Every other
    rooting lets the heavy 9 land inside a spread, and none beats 16.
```

### Example 3

```text
Input: n = 4, edges = [[0,1],[1,2],[2,3]], baseTime = [5,1,4,2]
Output: 8
Explanation:
    Root at the middle task 1. The left arm ends at task 0's 5; the right
    arm has task 2 absorbing the 2 and its own 4, reaching 6. Task 1 sees
    5 and 6, waits out a spread of 1, works its own 1, and wraps up at
    6 + 2 = 8.
```

### Example 4

```text
Input: n = 5, edges = [[0,1],[0,2],[1,3],[3,4]], baseTime = [3,1,4,1,5]
Output: 9
Explanation:
    Root at task 1. The arm through task 0 stacks the 4-leaf beneath its
    own 3 and reaches 7; the arm through task 3 stacks the 5-leaf beneath
    its own 1 and reaches 6. Task 1 waits out the spread of 1, works its
    own 1, and finishes at 7 + 2 = 9.
```

### Constraints

- `1 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i] == [ui, vi]`
- `0 <= ui, vi <= n - 1`
- `ui != vi`
- The edges form a valid undirected tree.
- `baseTime.length == n`
- `1 <= baseTime[i] <= 10^5`

### Hint 1

Changing the root never rewires the tree — it only re-labels which neighbour
of a task counts as its child.

### Hint 2

What actually matters is directional: for every oriented edge `u -> v`, know
the finish time of the branch that lives on `v`'s side when `u` plays the
parent.

### Hint 3

Rerooting DP delivers exactly that. One sweep away from a fixed root
settles every downward branch; a second sweep carries each parent-side
value back down to the children.

### Hint 4

Playing task `v` as the root needs only the smallest and largest finish
times among all directions feeding `v` — then the familiar rule finishes
the job.
