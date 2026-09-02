# Counting Workers Past The Quota

## Description

A crew of `n` workers is numbered `0` through `n - 1`, and worker `i`
has logged `hours[i]` hours. Management sets a quota: every worker is
expected to log at least `target` hours.

You are given the 0-indexed array `hours` of non-negative integers and
the non-negative integer `target`. Count how many workers logged at
least `target` hours.

### Example 1

```text
Input: hours = [8,3,7,1], target = 7
Output: 2
Explanation: The quota sits at 7 hours. Worker 0 logged 8 and worker 2
logged exactly 7 — and exactly reaching the quota counts. Workers 1 and
3 fell short, so two workers clear it.
```

### Example 2

```text
Input: hours = [0,0,0], target = 0
Output: 3
Explanation: A quota of zero asks nothing: even a worker with zero
hours meets it, so all three workers qualify.
```

### Example 3

```text
Input: hours = [4,9,2], target = 10
Output: 0
Explanation: No worker reached 10 hours, so nobody qualifies.
```

### Constraints

- `1 <= n == hours.length <= 50`
- `0 <= hours[i], target <= 10⁵`

## Hints

### Hint 1

Walk the array once and count every entry that is at least `target` —
note that equal counts, so the comparison is `>=`, not `>`.
