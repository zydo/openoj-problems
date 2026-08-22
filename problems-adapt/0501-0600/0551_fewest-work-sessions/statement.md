# Fewest Work Sessions

## Description

You must complete `n` jobs, where `tasks[i]` is the whole number of hours
job `i` takes. A work session lasts at most `sessionTime` hours, after which
you rest before starting the next one.

Schedule the jobs under these rules:

- a job started in a session must be finished within that same session;
- within a session you may move straight from one job to the next;
- the jobs may be tackled in any order.

Return the least number of work sessions that gets every job done. You may
assume `sessionTime` is at least as large as the longest single job.

### Example 1

```text
Input: tasks = [4,2,3], sessionTime = 5
Output: 2
Explanation: Pair the 2-hour and 3-hour jobs into one session of exactly 5
hours; the 4-hour job fills a second session.
```

### Example 2

```text
Input: tasks = [2,2,2,2], sessionTime = 6
Output: 2
Explanation: Three jobs fit in one session (6 hours), so two sessions
cover all four jobs.
```

### Example 3

```text
Input: tasks = [7,3,5,2,4], sessionTime = 9
Output: 3
Explanation: The hours add up to 21, and no session exceeds 9, so at least
3 sessions are needed; 7+2, 5+4, and 3 alone achieve it.
```

### Constraints

- `n == tasks.length`
- `1 <= n <= 14`
- `1 <= tasks[i] <= 10`
- `max(tasks[i]) <= sessionTime <= 15`

## Hints

### Hint 1

With at most 14 jobs, a set of already-scheduled jobs is small enough to
enumerate. What minimal summary of a partial schedule still determines how
well it can be extended?

### Hint 2

Closed sessions never reopen, so only the sessions opened and the room left
in the current one matter — store that pair per subset.

### Hint 3

Grow subsets one job at a time: the job either fits in the leftover room or
forces a fresh session. Compare candidate summaries lexicographically and
let memoization reuse every subset.
