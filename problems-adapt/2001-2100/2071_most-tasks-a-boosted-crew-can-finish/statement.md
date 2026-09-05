# The Most Tasks a Boosted Crew Can Finish

## Description

A queue of `n` tasks meets a pool of `m` workers, described by two
0-indexed arrays. Finishing the `i`th task demands `tasks[i]` units of
strength, and the `j`th worker supplies `workers[j]` units. Each worker
takes on at most one task, and only a task whose demand does not exceed
that worker's strength: `workers[j] >= tasks[i]`.

On top of that, you hold `pills` boost pills. A worker who swallows one
gains `strength` extra units of strength. You choose who receives them,
with at most one pill per worker.

Given the arrays `tasks` and `workers` together with the integers `pills`
and `strength`, return the largest number of tasks the crew can complete.

### Example 1

```text
Input: tasks = [4,2,7], workers = [1,5,6], pills = 1, strength = 2
Output: 2
Explanation:
Boost the strength-1 worker to 3 so they can clear the task of strength 2,
and let the strength-5 worker handle the task of strength 4. The remaining
task demands 7, and the last worker's 6 falls short — so two tasks is the
ceiling.
```

### Example 2

```text
Input: tasks = [3,6], workers = [2,4], pills = 1, strength = 2
Output: 1
Explanation:
The single pill can either lift worker 2 to 4 (finishing the task of
strength 3) or lift worker 4 to 6 (finishing the task of strength 6) — but
whichever way it goes, the leftover worker falls short of the other task.
Exactly one task can be completed.
```

### Example 3

```text
Input: tasks = [8,12,20], workers = [5,9,13], pills = 2, strength = 4
Output: 2
Explanation:
Worker 13 clears the task of strength 8 outright, and a pill lifts worker
9 to 13 for the task of strength 12. Even boosted, the strongest worker
tops out at 13 + 4 = 17, short of the final task's 20 — so the answer
is 2.
```

### Constraints

- `n == tasks.length`
- `m == workers.length`
- `1 <= n, m <= 5 * 10⁴`
- `0 <= pills <= m`
- `0 <= tasks[i], workers[j], strength <= 10⁹`

## Hints

### Hint 1

If some choice of `k` tasks can all be finished, can the crew always
finish the `k` least demanding tasks instead? Sorting makes feasibility
monotone in `k`.

### Hint 2

With monotonicity in hand, binary-search the answer. For a fixed `k`,
sweep the `k` strongest workers upward and keep the pending easy tasks in
a deque so pill spending can be decided greedily.
