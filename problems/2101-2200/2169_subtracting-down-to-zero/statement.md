# Subtracting Down to Zero

## Description

Start from two non-negative integers `num1` and `num2` and repeat one move:
whichever value is currently larger gives up a copy of the smaller. With
`num1 = 7` and `num2 = 3` the pair becomes `(4, 3)`; with `num1 = 3` and
`num2 = 7` it becomes `(3, 4)`. When the two are equal, either counts as the
larger and the move empties one side entirely.

The process stops the moment either value reaches `0`. Return how many moves
it took to get there.

### Example 1

```text
Input: num1 = 14, num2 = 4
Output: 5
Explanation: The pairs evolve (14,4) -> (10,4) -> (6,4) -> (2,4) ->
(2,2) -> (0,2). Five moves in, `num1` has reached 0 and the process ends.
```

### Example 2

```text
Input: num1 = 0, num2 = 7
Output: 0
Explanation: `num1` is already 0 before the first move, so no move happens
at all.
```

### Example 3

```text
Input: num1 = 6, num2 = 6
Output: 1
Explanation: The first move subtracts one 6 from the other and lands on
(0,6) — already finished.
```

### Constraints

- `0 <= num1, num2 <= 10⁵`

## Hints

### Hint 1

Nothing clever is required: carry out the subtraction moves one at a time
until a value hits zero.

### Hint 2

Increment a counter on every move and return it once the loop stops.
