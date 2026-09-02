# The Quad-Core Finish Line

## Description

A compute fleet consists of `n` machines, and every machine carries
exactly four cores. A job queue holds `tasks`, whose length is always
four times the machine count. Each task is placed on its own core, no
core takes two tasks, and a task cannot start before the machine
hosting it has come online.

You are given the integer array `processorTime`, where
`processorTime[i]` is the moment machine `i` comes online, and the
integer array `tasks`, where `tasks[j]` is how long the `j`-th task
runs. Distribute the tasks so that each machine receives exactly four
of them, and return the earliest moment at which everything has
finished — in other words, the smallest achievable value of the largest
`processorTime[i] + running time` pair over the whole schedule.

### Example 1

```text
Input: processorTime = [4,9], tasks = [5,1,3,2,8,6,7,4]
Output: 13
Explanation: Give the four longest tasks — 8, 7, 6, and 5 — to the
machine that opens at time 4, which then finishes at 4 + 8 = 12. The
machine opening at time 9 takes 4, 3, 2, and 1, finishing at 9 + 4 =
13. Nothing finishes later than 13.
```

### Example 2

```text
Input: processorTime = [7], tasks = [10,2,6,3]
Output: 17
Explanation: A single machine must absorb all four tasks, so only its
heaviest assignment matters: 7 + 10 = 17.
```

### Example 3

```text
Input: processorTime = [100,3,42], tasks = [1,2,3,4,5,6,7,8,9,10,11,12]
Output: 104
Explanation: The machine opening at 3 gets tasks 12, 11, 10, and 9,
finishing at 15; the machine at 42 gets 8, 7, 6, and 5, finishing at
50; the machine at 100 gets the four shortest, finishing at 100 + 4 =
104. The late machine's availability dictates the answer.
```

### Constraints

- `1 <= n == processorTime.length <= 25000`
- `1 <= tasks.length <= 10⁵`
- `0 <= processorTime[i] <= 10⁹`
- `1 <= tasks[i] <= 10⁹`
- `tasks.length == 4 * n`

## Hints

### Hint 1

A machine's completion time depends on just one of its four tasks — the
longest one. Everything else it was given is invisible in the final
answer.

### Hint 2

Sort the tasks from longest to shortest and deal them out in blocks of
four to the machines in order of availability, earliest machine first.
The largest availability-plus-longest-task sum produced this way cannot
be beaten by any other pairing.
