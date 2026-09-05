# Fewest Days to Clear Every Job II

## Description

You are given two equal-length 0-indexed integer arrays, `jobs` and
`workers`. Job i needs `jobs[i]` hours of work, and worker j can put in
`workers[j]` hours per day.

Hand the jobs out so that each job goes to exactly one worker and no
worker takes more than one job. Everyone starts on day 1 at the same
time, and a worker who receives an h-hour job at p hours per day
completes it on day `ceil(h / p)`.

Because the assignments all run in parallel, the batch is finished on the
day its slowest worker finishes. Return the fewest days in which every
job can be completed, over all ways to assign them.

### Example 1

```text
Input: jobs = [8,3,6], workers = [4,9,2]
Output: 2
Explanation: Pair the jobs with the workers rank by rank: the 3-hour job
goes to the capacity-2 worker (2 days), the 6-hour job to the capacity-4
worker (2 days), and the 8-hour job to the capacity-9 worker (1 day).
The slowest pair needs 2 days, and no assignment finishes sooner.
```

### Example 2

```text
Input: jobs = [12,7,5,20], workers = [3,10,6,4]
Output: 2
Explanation: Sorting both sides and matching gives 5 hours at 3 per day
(2 days), 7 at 4 (2 days), 12 at 6 (2 days), and 20 at 10 (2 days).
Every pairing lands on exactly 2 days, so the batch clears in 2.
```

### Example 3

```text
Input: jobs = [10], workers = [3]
Output: 4
Explanation: One worker, one job: 10 hours at 3 hours per day takes
ceil(10 / 3) = 4 days.
```

### Constraints

- `jobs` and `workers` share the same length `n`
- `1 <= n <= 10⁵`
- `1 <= jobs[i], workers[i] <= 10⁵`

## Hints

### Hint 1

Take any two jobs and any two workers. If the bigger job currently sits
with the smaller capacity while the smaller job sits with the bigger one,
swapping the two assignments never makes either of them finish later.

### Hint 2

That swap argument keeps removing inversions, so some optimal assignment
pairs the two sorted orders rank by rank. Sort both arrays, match them
up, and the answer is the worst ceiling division among the pairs.
