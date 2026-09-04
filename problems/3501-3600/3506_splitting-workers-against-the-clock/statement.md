# Splitting Workers Against The Clock

## Description

You are given an integer array `jobs` and an integer `splitTime`.

One worker must clear every job on the list. Job `i` takes `jobs[i]` units
of time, and a worker that takes a job is spent once the job is done — it
can never pick up another. At any moment, an unspent worker may instead
split into two fresh workers, which costs `splitTime` units of time; from
then on the two act in parallel. Several workers may work simultaneously,
but a job is never shared between them.

Return the least time in which all the jobs can be cleared. The jobs may be
taken in any order.

### Example 1

```text
Input: jobs = [8,3,6], splitTime = 2
Output: 10
Explanation: The worker splits at t = 2. One of the pair takes the 8-job
and finishes at t = 10. The other splits again, ready at t = 4, and its two
children clear the 3-job and the 6-job at t = 7 and t = 10. The 8-job pins
the answer at 8 + 2 = 10.
```

### Example 2

```text
Input: jobs = [7,7], splitTime = 3
Output: 10
Explanation: A single split readies two workers at t = 3; each takes one
7-job and both finish at t = 10.
```

### Example 3

```text
Input: jobs = [100,1,1], splitTime = 10
Output: 110
Explanation: One split readies a worker for the 100-job at t = 10, and it
finishes at t = 110. The other worker spends another 10 splitting so each
1-job gets its own worker, done by t = 21. The long job fixes the answer at
110, and no schedule beats it.
```

### Example 4

```text
Input: jobs = [4,4,4,4], splitTime = 1
Output: 6
Explanation: Two rounds of splits (finishing at t = 1 and t = 2) put four
workers on the clock, one per job, and every job ends at t = 6.
```

### Constraints

- `2 <= jobs.length <= 10⁵`
- `1 <= jobs[i] <= 10⁹`
- `1 <= splitTime <= 10⁹`

## Hints

### Hint 1

Every schedule is a full binary tree: a worker that splits has two
children, and a worker that takes a job is a leaf — a leaf at depth `d`
only starts working at `d * splitTime`.

### Hint 2

A deadline `T` is reachable for job `i` when it can sit on a leaf no deeper
than `(T - jobs[i]) / splitTime`.

### Hint 3

Legal leaf-depth multisets satisfy a Kraft-style budget, `sum 2^-d <= 1` —
charge every job its full depth bound, which minimizes the budget, and
binary search the smallest `T` whose charges still fit.
