# Staggered Task Queue II

## Description

A queue of jobs is given as a 0-indexed array of positive integers
`tasks`, processed strictly in order; `tasks[i]` is the type of the ith
job.

A positive integer `space` sets the cooling rule: once a job of some type
finishes, at least `space` days must pass before another job of that same
type may run.

Work proceeds one day at a time until the queue is empty. On each day you
do exactly one of the following:

- Run the next job from `tasks`, or
- Let the day slip by unused.

Return the fewest days needed to finish every job.

### Example 1

```text
Input: tasks = [4,1,4,2], space = 2
Output: 5
Explanation: Day 1 runs the type-4 job and day 2 runs the type-1 job.
The second type-4 job must wait two days after day 1, so day 3 slips by
and the job runs on day 4. Day 5 runs the type-2 job. Five days total,
and no schedule does better.
```

### Example 2

```text
Input: tasks = [7,7,7], space = 1
Output: 5
Explanation: Runs of the same type need a full day in between, so the
schedule alternates work and idle days: day 1 runs, day 2 idles, day 3
runs, day 4 idles, day 5 runs.
```

### Example 3

```text
Input: tasks = [2,3,4], space = 5
Output: 3
Explanation: Every job has a distinct type, so the cooling rule never
bites no matter how large `space` is: one job per day finishes in three
days.
```

### Constraints

- `1 <= tasks.length <= 10⁵`
- `1 <= tasks[i] <= 10⁹`
- `1 <= space <= tasks.length`

## Hints

### Hint 1

Idle days should be inserted as late as possible — postponing the
current job never lets a later one finish sooner.

### Hint 2

Record the day each type last ran. When the next job's type is still
cooling, jump the clock straight to the first day it may legally run.
