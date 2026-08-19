# Shortest Job First Schedule

## Description

One processor runs a list of `n` jobs, indexed from `0` to `n - 1`. The array
`jobs` gives each job's timing: `jobs[i] = [ready_i, length_i]` means job `i`
becomes available at moment `ready_i` and occupies the processor for `length_i`
uninterrupted moments once started.

The processor behaves as follows:

- When it is free and no job is available, it waits.
- When it is free and jobs are available, it starts the one with the smallest
  `length_i`; if several tie, it starts the one with the smallest index.
- A started job always runs to completion, and moving from one job to the next
  takes no time.

Return the sequence of indices in which the jobs run.

### Example 1

```text
Input: jobs = [[2,3],[3,1],[5,2],[6,1]]
Output: [0,1,3,2]
Explanation: Job 0 starts alone at time 2 and runs to time 5. By then jobs 1
and 2 are waiting, and job 1 is shorter, so it runs next (time 6). Job 3
arrives exactly then and, being shorter than job 2, goes third; job 2 runs
last.
```

### Example 2

```text
Input: jobs = [[4,7],[4,3],[4,5],[4,3]]
Output: [1,3,2,0]
Explanation: All four jobs become available at time 4. The two of length 3 run
first, index 1 ahead of index 3, then the length-5 job, then the length-7 job.
```

### Example 3

```text
Input: jobs = [[8,2],[1,4]]
Output: [1,0]
Explanation: The processor starts job 1 at time 1 and finishes at time 5.
Nothing is available then, so it waits until time 8 for job 0.
```

### Constraints

- `1 <= jobs.length <= 10⁵`
- `jobs[i].length == 2`
- `1 <= ready_i, length_i <= 10⁹`

## Hints

### Hint 1

When the processor finds nothing available, jumping the clock straight to the
earliest readiness time among the remaining jobs beats ticking forward.

### Hint 2

Among the available jobs, a min-heap keyed by `(length, index)` answers "which
one runs next" exactly as the rule demands.
