# Doubling Shuttle

## Description

A shuttle sits at coordinate `0` of an unbounded number line with speed `+1`.
Coordinates below zero are ordinary places it may visit. It executes a string
of commands drawn from two letters:

- `'A'` adds the current speed to the coordinate, and then doubles the speed.
- `'R'` leaves the coordinate alone and sets the speed to `-1` when it was
  positive, or to `+1` when it was negative.

Running `"ARA"`, for instance, sends the coordinate along `0 → 1 → 1 → 0` while
the speed goes `+1 → +2 → -1 → -2`.

Given `target`, return the smallest number of commands in a string that
finishes with the shuttle standing exactly at `target`.

### Example 1

```text
Input: target = 15
Output: 4
Explanation: "AAAA" needs no turn at all. The speeds 1, 2, 4 and 8 add up to
the target, so the coordinate runs 0, 1, 3, 7, 15.
```

### Example 2

```text
Input: target = 14
Output: 6
Explanation: "AAAARA" overshoots on purpose. Four adds reach 15 with the speed
at 16; one turn drops the speed to -1; one more add settles on 14.
```

### Example 3

```text
Input: target = 9
Output: 8
Explanation: "AAARARAA" turns twice. It reaches 7, turns and steps back to 6,
turns again and adds 1 then 2 to finish on 9. No sequence of seven or fewer
commands stops there.
```

### Constraints

- `target` is an integer with `1 <= target <= 10^4`

## Hints

### Hint 1

Nothing about the shuttle is random: a coordinate paired with a speed decides
what each of the two commands does. Treat that pair as a vertex and each
command as an edge of weight one.

### Hint 2

Layer-by-layer exploration outward from the starting pair visits every state
reachable in `k` commands before any state needing `k + 1`, so the first layer
containing the target answers the question.

### Hint 3

Two things keep the search finite. Speeds only ever equal `±2^k`, so a
coordinate carries a logarithmic number of states — key what you have already
seen on the whole pair. And no shortest answer ever wanders past twice the
target, so coordinates beyond that can be discarded on sight.
