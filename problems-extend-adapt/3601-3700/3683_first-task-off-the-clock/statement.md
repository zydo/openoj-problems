# First Task Off The Clock

## Description

A 2D integer array `tasks` is given, where `tasks[i] = [si, ti]` describes
one job: it begins at time `si` and needs `ti` units of time to run. The
jobs are fully independent — none waits on another and none shares a
machine — so the job `[si, ti]` is complete at the moment `si + ti`.

Work out the earliest moment at which some job is complete.

### Example 1

```text
Input: tasks = [[4,5],[6,2],[9,1]]
Output: 8
Explanation: The job [6,2] completes at 6 + 2 = 8, sooner than [4,5] at 9
and [9,1] at 10, so the answer is 8.
```

### Example 2

```text
Input: tasks = [[7,7],[2,9]]
Output: 11
Explanation: The job [2,9] completes at 2 + 9 = 11, beating [7,7]'s 14.
```

### Example 3

```text
Input: tasks = [[50,50],[50,50]]
Output: 100
Explanation: Both jobs complete at 50 + 50 = 100, so the earliest
completion is 100.
```

### Constraints

- `1 <= tasks.length <= 100`
- `tasks[i] = [si, ti]`
- `1 <= si, ti <= 100`

## Hints

### Hint 1

Each job's completion moment is `si + ti`; the answer is the smallest of
those sums across all jobs.
