# Worker Job Earnings

## Description

The arrays `difficulty` and `profit` describe jobs: job `i` requires ability
at least `difficulty[i]` and pays `profit[i]`. Each number in `worker` is one
worker's ability.

Assign at most one job to each worker. A job may be used by any number of
workers, so workers do not compete for it. A worker can take only jobs whose
difficulty does not exceed that worker's ability, and earns zero if none are
available. Return the greatest total earnings possible.

### Example 1

```text
Input: difficulty = [3,5,9], profit = [30,50,60], worker = [2,3,5,8,10]
Output: 190
```

### Example 2

```text
Input: difficulty = [4,4,8], profit = [15,40,35], worker = [4,5,8]
Output: 120
```

### Constraints

- `n == difficulty.length`
- `n == profit.length`
- `m == worker.length`
- `1 <= n, m <= 10⁴`
- `1 <= difficulty[i], profit[i], worker[i] <= 10⁵`
