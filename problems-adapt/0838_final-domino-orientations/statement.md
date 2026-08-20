# Final Domino Orientations

## Description

A row of upright pieces receives simultaneous initial pushes. The string
`initialState` describes the row:

- `'L'` marks a domino pushed left,
- `'R'` marks a domino pushed right, and
- `'.'` marks an upright domino with no initial push.

During each second, a falling domino pushes the adjacent upright domino in its
direction. If equal forces arrive at an upright domino from both directions at
the same time, it remains upright. A domino already falling or fallen does not
transmit any additional effect from a later collision.

Return the stable orientation string after all propagation ends.

### Example 1

```text
Input: initialState = "R...L..R."
Output: "RR.LL..RR"
Explanation: Opposing pushes balance at the middle of the first gap; the final right push reaches the last domino.
```

### Example 2

```text
Input: initialState = ".L..R...."
Output: "LL..RRRRR"
```

### Example 3

```text
Input: initialState = "L...R"
Output: "L...R"
Explanation: Both pushes point away from the upright pieces between them.
```

### Constraints

- `1 <= initialState.length <= 10^5`
- Every character of `initialState` is `'L'`, `'R'`, or `'.'`.

## Hints

### Hint 1

On a left-to-right pass, track a rightward influence that starts strongly at
`'R'`, decreases with distance, and is canceled by `'L'`.

### Hint 2

Perform the mirrored calculation from right to left for leftward influence.

### Hint 3

Compare the two influences at each position. Their sign determines the final
direction, while a tie leaves the domino upright.
