# Least Time to Clear Every Job

## Description

You are given an integer array `factors` describing a crew of workers, and an
integer `jobs` — the number of jobs waiting. A worker whose factor is `r`
needs `r * n^2` minutes to complete `n` jobs, and every worker may take on
any number of jobs, working in parallel with the rest. Not every job must go
to a different worker, and workers may be left idle.

Return the smallest number of minutes by which all `jobs` jobs can be
finished.

### Example 1

```text
Input: factors = [3,1,2], jobs = 6
Output: 9
Explanation: Give the factor-1 worker 3 jobs (1*3*3 = 9 minutes), the
factor-2 worker 2 jobs (2*2*2 = 8), and the factor-3 worker 1 job (3*1*1 = 3).
Six jobs finish by minute 9, and no split finishes sooner.
```

### Example 2

```text
Input: factors = [7], jobs = 5
Output: 175
Explanation: One worker takes all five jobs: 7 * 5 * 5 = 175 minutes.
```

### Example 3

```text
Input: factors = [2,2,4], jobs = 10
Output: 32
Explanation: The two factor-2 workers take 4 jobs each (2*4*4 = 32 minutes)
and the factor-4 worker takes the remaining 2 (4*2*2 = 16). Both fast
workers finish exactly at minute 32.
```

### Constraints

- `1 <= factors.length <= 10⁵`
- `1 <= factors[i] <= 100`
- `1 <= jobs <= 10⁶`
- The answer fits in a signed 64-bit integer.

## Hints

### Hint 1

Flip the question: given a deadline `t`, how many jobs can the crew finish?
A worker with factor `r` completes at most `floor(sqrt(t / r))` of them.

### Hint 2

That capacity only grows as `t` grows, so "everything fits within `t`" is a
monotone property — exactly what binary search needs.

### Hint 3

Search between `1` and `min(factors) * jobs^2`, the time the best worker
needs when it does everything alone.

### Hint 4

The check sums the per-worker capacities and can stop as soon as the total
reaches `jobs`.
