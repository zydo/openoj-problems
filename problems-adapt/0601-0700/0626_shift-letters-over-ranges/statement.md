# Shift Letters Over Ranges

## Description

You are given a string `s` of lowercase English letters and a list of
instructions `shifts`, where `shifts[i] = [start_i, end_i, direction_i]`. Each
instruction moves every character of `s` at positions `start_i` through `end_i`
(inclusive) one step around the alphabet — forward (`'a'` toward `'z'`) when
`direction_i = 1`, backward when `direction_i = 0`. Moving forward past `'z'`
wraps to `'a'`; moving backward before `'a'` wraps to `'z'`.

Apply all instructions and return the resulting string.

### Example 1

```text
Input: s = "fjord", shifts = [[0,1,1],[2,4,0],[1,3,1]]
Output: "glorc"
Explanation: Position 0 moves forward once (f -> g). Position 1 is covered by a
forward instruction twice (j -> l). Positions 2 and 3 are covered once forward
and once backward, cancelling out (o, r stay). Position 4 moves backward once
(d -> c).
```

### Example 2

```text
Input: s = "zinc", shifts = [[0,0,1],[0,0,1],[0,0,1]]
Output: "cinc"
Explanation: Three forward instructions hit only position 0, and 'z' wraps
around the alphabet: z -> a -> b -> c.
```

### Example 3

```text
Input: s = "cafe", shifts = [[0,3,0],[1,2,1],[1,2,1]]
Output: "bbgd"
Explanation: The first instruction moves the whole string backward once. The
middle positions are then moved forward twice, for a net of one step forward
there: c -> b, a -> b, f -> g, e -> d.
```

### Constraints

- `1 <= s.length, shifts.length <= 5 * 10⁴`
- each instruction is a triple: `shifts[i].length == 3`
- `0 <= start_i <= end_i < s.length`
- `direction_i` is `0` or `1`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Rewriting one character per instruction touches the same positions over and
over. What if you only recorded, for each position, how many net steps it must
move?

### Hint 2

An instruction that starts at `start` and ends at `end` can be recorded by
writing its step at `start` and the opposite step just past `end`, leaving the
positions between untouched. A running total across the array then recovers the
net step for every position at once.

### Hint 3

One modular reduction per character handles both directions and both wrap
points in a single expression.
