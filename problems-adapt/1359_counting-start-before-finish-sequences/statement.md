# Counting Start-Before-Finish Sequences

## Description

There are `n` tasks. Each task `i` has two events: its start `S_i` and its
finish `F_i`.

A timeline is an ordering of all `2n` events. It is valid when `F_i` comes
after `S_i` for every task.

Count the valid timelines. As the number can be huge, return it modulo
`10⁹ + 7`.

### Example 1

```text
Input: n = 1
Output: 1
Explanation: The only timeline is (S1, F1), the finish following the start.
```

### Example 2

```text
Input: n = 2
Output: 6
Explanation: The valid timelines:
(S1,S2,F1,F2), (S1,S2,F2,F1), (S1,F1,S2,F2),
(S2,S1,F1,F2), (S2,S1,F2,F1) and (S2,F2,S1,F1).
(S1,F2,S2,F1) is not valid: task 2 finishes before it starts.
```

### Example 3

```text
Input: n = 3
Output: 90
```

### Constraints

- `1 <= n <= 500`

## Hints

### Hint 1

Grow the timeline one task at a time: insert task `i`'s two events into an
already valid timeline of the first `i − 1` tasks, and multiply the counts
— every valid timeline of `i` tasks arises exactly once this way (remove
task `i`'s events to see it).

### Hint 2

With `2(i − 1)` events placed there are `2i − 1` slots for the next start;
each choice leaves one fewer slot to the right for that task's finish.
Summing those slot pairs gives the factor contributed by task `i`.
