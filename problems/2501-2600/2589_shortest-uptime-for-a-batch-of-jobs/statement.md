# Shortest Uptime for a Batch of Jobs

## Description

A machine can run any number of jobs at the same time, and it draws
power only while work is executing — you may switch it on and off
between jobs however you like. You are given a 2D array `tasks` where
`tasks[i] = [starti, endi, durationi]` asks for job `i` to receive
`durationi` seconds of execution — split into pieces or taken all at
once — at second marks inside the inclusive window `[starti, endi]`.

Find the fewest seconds during which the machine has to be powered on
so that every job finishes.

### Example 1

```text
Input: tasks = [[1,3,2],[2,4,1]]
Output: 2
Explanation:
- The first job runs during seconds 2 and 3.
- The second job only needs one second inside [2, 4], and second 2 is
already running, so it reuses that second without extra power.
The machine is on for 2 seconds in total.
```

### Example 2

```text
Input: tasks = [[4,7,2],[1,3,3],[6,9,2]]
Output: 5
Explanation:
- The first job spans its whole window and runs during seconds 1, 2,
and 3.
- The second job runs during seconds 6 and 7.
- The third job needs two seconds inside [6, 9], and seconds 6 and 7
are already running, so nothing new is needed.
The machine is on for the 5 seconds 1, 2, 3, 6, and 7.
```

### Example 3

```text
Input: tasks = [[1,2,1],[2,3,1],[1,3,2]]
Output: 2
Explanation:
- The first job runs during second 2.
- The second job reuses the already-running second 2.
- The third job needs two seconds inside [1, 3]; second 2 is already
running and it takes second 3 as well.
The machine is on for the 2 seconds 2 and 3.
```

### Constraints

- `1 <= tasks.length <= 2000`
- `tasks[i].length == 3`
- `1 <= starti, endi <= 2000`
- every job's demand fits its own window: `1 <= durationi <= endi - starti + 1`

## Hints

### Hint 1

Handle the jobs in increasing order of where their windows end.

### Hint 2

At most 2000 distinct seconds exist, so an occupancy flag per second is
cheap enough to consult directly.

### Hint 3

Giving each job its required seconds as late as possible keeps those
seconds useful for the jobs still to come.
