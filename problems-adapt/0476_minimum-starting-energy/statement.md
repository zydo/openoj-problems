# Minimum Starting Energy

## Description

Each entry `tasks[i] = [cost_i, start_i]` describes one task:

- carrying out task `i` drains `cost_i` from your energy level;
- you may undertake it only while your level is at least `start_i`.

With a level of `10`, for instance, the task `[4, 7]` may be begun
(`10 >= 7`) and leaves you at `6` once it is done.

You hold one energy level throughout and pick the order of the tasks
yourself. Return the least starting level from which every task can be
finished.

### Example 1

```text
Input: tasks = [[2,3],[3,6],[1,5]]
Output: 7
Explanation:
Start at 7 and work through the tasks from the last to the first:
    - [1,5]: 7 >= 5, level drops to 6.
    - [3,6]: 6 >= 6, level drops to 3.
    - [2,3]: 3 >= 3, level drops to 1.
6 is not enough: whichever task goes first, the level left behind is too
low for one of the others.
```

### Example 2

```text
Input: tasks = [[8,10],[1,5]]
Output: 11
Explanation:
Run [1,5] first: 11 drops to 10, which is exactly the threshold of
[8,10], and that task leaves you at 0. Swapping the order pushes the
requirement up to 13 — after [8,10] you would sit at 3 with 5 still
needed.
```

### Example 3

```text
Input: tasks = [[3,4],[2,7],[6,13],[5,9],[1,10]]
Output: 18
Explanation:
Starting from 18, take the tasks in this order:
    - [1,10]: 18 >= 10, level drops to 17.
    - [6,13]: 17 >= 13, level drops to 11.
    - [2,7]: 11 >= 7, level drops to 9.
    - [5,9]: 9 >= 9, level drops to 4.
    - [3,4]: 4 >= 4, level drops to 1.
```

### Constraints

- `1 <= tasks.length <= 10⁵`
- `1 <= cost_i <= start_i <= 10⁴`

## Hints

### Hint 1

Whether a given level is sufficient behaves monotonically: raise the
starting level and a workable schedule stays workable. That property
alone invites binary search — though a closed form exists.

### Hint 2

For the closed form, study the order. Take two tasks done consecutively
and write down what each arrangement demands; the comparison reveals a
sorting key built from both fields of a task.
