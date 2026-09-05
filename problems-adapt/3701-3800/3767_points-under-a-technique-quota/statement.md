# Points Under A Technique Quota

## Description

Two equally long arrays `technique1` and `technique2` describe `n`
tasks. Task `i` is worth `technique1[i]` points if finished with
technique 1, and `technique2[i]` points if finished with technique 2.

Each task is finished exactly once, under exactly one of the techniques.
On top of that, an integer `k` sets a quota: at least `k` of the tasks
must go to technique 1 — any `k` tasks qualify, not necessarily the
first ones. Whatever is left of the quota is unconstrained.

What is the largest total the choices can reach? Return that total.

### Example 1

```text
Input: technique1 = [7,4,9], technique2 = [8,1,12], k = 1
Output: 24
Explanation: The quota needs one technique-1 pick, and task 1 is the
cheapest task to leave there, holding it at 4 points. Tasks 0 and 2
switch to technique 2 for 8 and 12, so the total is 8 + 4 + 12 = 24.
```

### Example 2

```text
Input: technique1 = [6,6], technique2 = [2,3], k = 2
Output: 12
Explanation: Technique 1 pays more on both tasks and the quota demands
both of them anyway, so the total is 6 + 6 = 12.
```

### Example 3

```text
Input: technique1 = [3,5,8], technique2 = [9,2,6], k = 0
Output: 22
Explanation: With k = 0 nothing has to go to technique 1, so each task
simply takes its larger value: 9 + 5 + 8 = 22.
```

### Constraints

- `1 <= n == technique1.length == technique2.length <= 10^5`
- `1 <= technique1[i], technique2[i] <= 10^5`
- `0 <= k <= n`

## Hints

### Hint 1

Assigning technique 1 to every task is always legal, whatever `k` is —
its total, the sum of `technique1`, is a safe starting point to improve
from.

### Hint 2

Moving task `i` over to technique 2 adds `technique2[i] - technique1[i]`
to the total. At most `n - k` tasks can move, so collect the positive
deltas, largest first, without exceeding that budget.

### Hint 3

Equivalently, start from each task's larger value and only pay back the
`k - free` cheapest reversals, where `free` counts the tasks technique 1
already wins or ties.
