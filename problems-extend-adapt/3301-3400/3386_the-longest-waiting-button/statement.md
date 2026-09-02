# The Longest-Waiting Button

## Description

A keyboard logs every press as `events[i] = [index_i, time_i]`: the
button numbered `index_i` went down at time `time_i`. The rows arrive in
increasing order of `time_i`.

Credit each press with the wait that preceded it. The first press waited
exactly its own `time_0`; every later press `i` waited
`time_i - time_{i-1}`. The press that waited longest is the one you are
after, and if several waits tie, the smallest button index among them
wins.

Return that button's index.

### Example 1

```text
Input: events = [[2,3],[5,8],[2,14],[9,15]]
Output: 2
Explanation: The press at time 3 waited 3, and the one at time 8 waited
5. Button 2 is pressed again at time 14, having waited 14 - 8 = 6 — the
longest wait in the log. The final press at time 15 waited only 1.
```

### Example 2

```text
Input: events = [[4,2],[1,6],[3,10]]
Output: 1
Explanation: The waits are 2, then 4, then 4. Buttons 1 and 3 tie at 4,
and the smaller index 1 wins the tie.
```

### Example 3

```text
Input: events = [[7,4]]
Output: 7
Explanation: A lone press waits exactly its own time, 4, so button 7 is
the answer.
```

### Constraints

- `1 <= events.length <= 1000`
- `events[i] == [index_i, time_i]`
- `1 <= index_i, time_i <= 10⁵`
- The input is generated such that `events` is sorted in increasing
  order of `time_i`.
