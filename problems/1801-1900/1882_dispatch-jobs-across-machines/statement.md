# Dispatch Jobs Across Machines

## Description

You are given two 0-indexed integer arrays, `machines` and `jobs`, of
lengths `n` and `m`. `machines[i]` is the weight of machine `i`, and
`jobs[j]` is how many seconds job `j` occupies whichever machine runs
it.

Assignment unfolds second by second. Every machine starts idle. At
second `j`, job `j` enters a waiting queue (job 0 arrives at second 0,
job 1 at second 1, and so on). Whenever at least one machine is idle and
the queue is non-empty, the job at the front of the queue starts running
on the idle machine with the smallest weight; ties break toward the
smaller index. When nothing is idle, the front job waits, and the moment
some machine finishes, it starts on that machine immediately — if
several machines free up at the same second, they take the waiting jobs
in arrival order, each choice applying the same weight-then-index
preference.

A machine that begins job `j` at second `t` is busy until second
`t + jobs[j]`, at which point it may pick up more work.

Return an array `ans` of length `m` where `ans[j]` is the index of the
machine that runs job `j`.

### Example 1

```text
Input: machines = [4,2,5], jobs = [3,1,2,1]
Output: [1,0,0,1]
Explanation: Machine 1, the lightest, takes job 0 until second 3. Job 1
starts at second 1 on machine 0 and ends at second 2, just as job 2
arrives, so machine 0 takes job 2 straight away and holds it until
second 4. Machine 1 is idle again at second 3 and runs job 3 until
second 4.
```

### Example 2

```text
Input: machines = [8,3], jobs = [2,2,2,6,1]
Output: [1,0,1,0,1]
Explanation: Machine 1 (weight 3) beats machine 0 whenever both are
idle, so it runs job 0 from second 0 to 2, job 2 from second 2 to 4, and
job 4 from second 4 to 5. Machine 0 picks up job 1 at second 1 (until
second 3) and job 3 at second 3 (until second 9).
```

### Example 3

```text
Input: machines = [6,1,4,7,2], jobs = [5,3,3,2,1,4,2,5,3]
Output: [1,4,2,0,4,1,4,2,4]
Explanation: The weight-1 machine (index 1) and the weight-2 machine
(index 4) claim the first two jobs, machines 2 and 0 then take jobs 2
and 3, and machine 4 returns at second 4 for job 4. From second 5 onward
the queue is served by whichever of machines 1, 2, and 4 frees up first.
```

### Constraints

- `machines.length == n`
- `jobs.length == m`
- `1 <= n, m <= 2 * 10⁵`
- `1 <= machines[i], jobs[j] <= 2 * 10⁵`

## Hints

### Hint 1

Two priority queues are enough: one of idle machines ordered by
(weight, index), one of running machines ordered by the second they
become idle again.

### Hint 2

Jobs start strictly in input order, so each step only asks which machine
becomes available next under those priorities — before seating the
current job, move over every machine whose release time has already
passed.
