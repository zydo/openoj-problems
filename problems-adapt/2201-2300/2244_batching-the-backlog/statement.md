# Batching the Backlog

## Description

A backlog is a list of work items, `tasks`, where `tasks[i]` is the kind of
the `i`-th item. Time moves in passes: during one pass you may clear either
two or three items, and they must all be of the same kind — mixing kinds in
a pass is not allowed.

Clear every item in as few passes as you can. Return that minimum pass
count, or `-1` when some kind simply cannot be fully cleared.

### Example 1

```text
Input: tasks = [5,5,5,5,5,5,5,3,3,3,8,8]
Output: 5
Explanation: The seven 5s clear in three passes (3 + 2 + 2), the three 3s
take one pass, and the two 8s take one more — five passes in total.
```

### Example 2

```text
Input: tasks = [1,2,3]
Output: -1
Explanation: Every kind appears once, and a lone item can never fill a pass
of two or three, so the backlog cannot be cleared.
```

### Example 3

```text
Input: tasks = [10,10,10,20,20,20,20]
Output: 3
Explanation: One pass clears the three 10s, and the four 20s take two more
(2 + 2), so three passes cover the whole backlog.
```

### Constraints

- `1 <= tasks.length <= 10⁵`
- `1 <= tasks[i] <= 10⁹`

### Hint 1

Tally how many items there are of each kind; the kinds never interact.

### Hint 2

For one kind with `c` items, think about how the largest allowed batch
shapes the count.

### Hint 3

Watch for the one pile size that no combination of batches can finish.
