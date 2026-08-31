# Worker of the Longest Shift

## Description

There are `n` employees, identified by the ids `0` through `n - 1`. You
are given a 2D integer array `logs`, where `logs[i] = [id_i,
leaveTime_i]` records that the `i`-th task was done by employee `id_i`
and finished at time `leaveTime_i`. All the leave times are distinct.

The `i`-th task begins the instant the previous task ends, and the 0th
task starts at time `0`. Return the id of the employee who worked the
task with the longest duration. If several tasks tie for the longest
duration, return the smallest employee id among them.

### Example 1

```text
Input: n = 4, logs = [[0,2],[1,5],[2,9],[3,10]]
Output: 2
Explanation: The four tasks last 2, 3, 4 and 1 time units. The longest is
task 2, done by employee 2.
```

### Example 2

```text
Input: n = 3, logs = [[1,1],[0,4],[2,6]]
Output: 0
Explanation: The tasks last 1, 3 and 2 time units. The longest is task 1,
done by employee 0.
```

### Example 3

```text
Input: n = 2, logs = [[1,5],[0,10]]
Output: 0
Explanation: Both tasks last 5 time units. Employees 1 and 0 tie, and the
smaller id is 0.
```

### Constraints

- `2 <= n <= 500`
- `1 <= logs.length <= 500`
- `logs[i].length == 2`
- `0 <= id_i <= n - 1`
- `1 <= leaveTime_i <= 500`
- `id_i != id_{i + 1}`
- `leaveTime_i` are strictly increasing.

## Hints

### Hint 1

The duration of task `i` is `leaveTime_i - leaveTime_{i-1}`, treating the
task before the first one as ending at time 0.

### Hint 2

Sweep the logs once, keeping the best result seen so far: the longest
duration, and the smallest employee id that achieves it.
