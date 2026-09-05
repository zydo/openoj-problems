# Skill-Matched Task Payday

## Description

A crew is described by an integer array `workers`, where `workers[i]` is
the skill level of the `i`th crew member. The day's workload is a 2D
integer array `tasks`, each row a task given as a pair:

- the first entry is the exact skill level the task demands;
- the second entry is the profit earned once the task is completed.

Every crew member finishes at most one task, and they may only take a
task whose demanded skill equals their own skill — no overqualifying and
no training. On top of the crew, one additional worker shows up who can
handle any task at all, whatever skill it demands.

Assign tasks to maximize the total profit and return that maximum.

### Example 1

```text
Input: workers = [2,2,5], tasks = [[2,50],[2,80],[5,10],[2,20]]
Output: 160
Explanation: The two skill-2 members take the tasks worth 80 and 50, the
skill-5 member takes the 10 task, and the unrestricted extra worker
picks up the last skill-2 task worth 20 — 160 in all.
```

### Example 2

```text
Input: workers = [3], tasks = [[9,7],[9,9]]
Output: 9
Explanation: No crew member's skill equals 9, so the whole crew sits
out; the extra worker alone works and chooses the more profitable of the
two tasks.
```

### Example 3

```text
Input: workers = [4,4], tasks = [[4,6]]
Output: 6
Explanation: One of the two skill-4 members takes the only task. Every
task is already spoken for, so the extra worker cannot add anything.
```

### Example 4

```text
Input: workers = [1,1], tasks = [[1,5],[1,8]]
Output: 13
Explanation: The two skill-1 members cover both tasks themselves
(8 + 5 = 13), leaving the extra worker idle.
```

### Constraints

- `1 <= workers.length <= 10⁵`
- `1 <= workers[i] <= 10⁹`
- `1 <= tasks.length <= 10⁵`
- `tasks[i].length == 2`
- `1 <= tasks[i][0], tasks[i][1] <= 10⁹`

## Hints

### Hint 1

Sort the tasks into buckets by demanded skill; a crew member can only
ever draw from the bucket labeled with their own skill.

### Hint 2

Within one bucket every matching member is interchangeable, so let them
take that bucket's richest tasks first.

### Hint 3

Whatever the buckets leave unclaimed is the only menu the extra worker
chooses from — and they take just one task, so take the best.

### Hint 4

Large inputs push the total past 32-bit range; keep the running sums in
64-bit accumulators.
