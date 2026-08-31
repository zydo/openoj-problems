# Tasks Left Open After Every Shift

## Description

You are given two integer arrays `tasks` and `shifts`, where `tasks[i]` is
the time the `i`th task takes to finish and `shifts[j]` is the time
available during the `j`th shift.

Tasks are always attacked strictly in order. Two rules govern how a shift
interacts with the queue:

- **Carry-over:** a task left unfinished when a shift ends is picked back up
  from exactly where it stopped, in the very next shift.
- **Restart:** if every task gets finished during a shift, that shift stops
  immediately — any leftover time is wasted — and the next shift begins
  again from the first task.

A task counts as unfinished if it hasn't been completed yet, including one
currently in progress.

Return an array `ans` where `ans[j]` is how many tasks remain unfinished
right after the `j`th shift ends.

### Example 1

```text
Input: tasks = [2,3,3], shifts = [8,2,3]
Output: [0,2,1]
Explanation:
- Shift 0: 2 + 3 + 3 = 8 units of work exactly match the shift's 8 units, so every task finishes. 0 unfinished.
- Shift 1: work restarts at task 0. Its 2 units of time exactly finish task 0, leaving tasks 1 and 2 untouched. 2 unfinished.
- Shift 2: work continues from task 1. Its 3 units of time exactly finish task 1. 1 unfinished.
```

### Example 2

```text
Input: tasks = [3,5,6], shifts = [15,3,3]
Output: [0,2,2]
Explanation:
- Shift 0: 15 units cover the full 3 + 5 + 6 = 14 units of work with room to spare, which is discarded. 0 unfinished.
- Shift 1: work restarts at task 0. Its 3 units exactly finish task 0, with nothing left over for task 1. 2 unfinished.
- Shift 2: work continues from task 1, which needs 5 units but only 3 arrive — task 1 stays partially done and task 2 is never reached. 2 unfinished.
```

### Example 3

```text
Input: tasks = [5,2], shifts = [2,7,1]
Output: [2,0,2]
Explanation:
- Shift 0: 2 units chip into task 0's 5 units, leaving 3 units of it remaining. 2 unfinished.
- Shift 1: work continues from task 0, which needs 3 more units, then task 1 needs 2 — 5 units total, well inside the shift's 7. 0 unfinished.
- Shift 2: work restarts at task 0. Its 1 unit only partially chips into task 0's 5 units. 2 unfinished.
```

### Constraints

- `1 <= tasks.length <= 10⁵`
- `1 <= shifts.length <= 10⁵`
- `1 <= tasks[i] <= 10⁹`
- `1 <= shifts[i] <= 10⁹`

## Hints

### Hint 1

Build a prefix-sum array over `tasks`, where entry `i` is the total time
needed to finish tasks `0` through `i`.

### Hint 2

Track how much work has been completed in the current pass through the
task list. If the current shift's length would push that total to or past
the full task sum, every task finishes — record 0 and reset the completed
total to 0.

### Hint 3

Otherwise, binary search the prefix sums to find how many tasks that
completed total fully covers. With `c` tasks fully covered, exactly
`tasks.length - c` remain unfinished.
