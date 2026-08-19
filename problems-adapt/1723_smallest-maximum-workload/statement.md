# Smallest Maximum Workload

## Description

You are given an integer array `jobs`, where `jobs[i]` is how long job `i`
takes, and you have `k` workers.

Every job must be handed to exactly one worker. A worker's workload is the
total length of the jobs handed to them. Distribute the jobs so that the
busiest worker is as lightly loaded as possible, and return that busiest
worker's workload.

### Example 1

```text
Input: jobs = [5,4,3,3,2], k = 2
Output: 9
Explanation: Give the lengths 5 and 4 to one worker (workload 9) and 3, 3, 2
to the other (workload 8). No split does better than 9.
```

### Example 2

```text
Input: jobs = [6,6,2], k = 3
Output: 6
Explanation: One job per worker; the busiest of the three carries 6.
```

### Example 3

```text
Input: jobs = [9,1,1,1], k = 2
Output: 9
Explanation: The length-9 job cannot be shared, so it alone sets the answer;
the three short jobs land on the other worker for a workload of 3.
```

### Constraints

- `1 <= k <= jobs.length <= 12`
- `1 <= jobs[i] <= 10⁷`

## Hints

### Hint 1

Hand some set of jobs to one worker, then you are left with the same question
for the remaining jobs and one fewer worker.

### Hint 2

Another angle: guess the answer — a ceiling no worker may cross. If some
assignment respects a ceiling, it also respects any higher one, so feasibility
is monotone in the ceiling.

### Hint 3

To test a ceiling, walk the jobs with backtracking that drops a branch the
moment a worker's load would cross it.
