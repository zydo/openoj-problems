# Race Time With Pit Stops

## Description

A pit crew is testing `tires`, a 0-indexed 2D integer array where
`tires[i] = [base, wear]` describes the ith tire type: its xth
consecutive lap takes `base * wear^(x-1)` seconds, because a tire slows
down the longer it stays on the car.

For instance, with `base = 3` and `wear = 2` the tire runs its first lap
in 3 seconds, its second lap in `3 * 2 = 6` seconds, and its third lap
in `3 * 2^2 = 12` seconds.

The race lasts `numLaps` laps. You begin on any tire type you like, own
an unlimited supply of every type, and between laps you may put on any
type — even a brand-new copy of the one already on the car — provided
you first spend `changeTime` seconds in the pit lane.

Return the smallest total time in which the race can be completed.

### Example 1

```text
Input: tires = [[3,2],[1,4]], changeTime = 4, numLaps = 3
Output: 10
Explanation:
Lap 1: Start on tire 1 and complete the lap in 1 second.
Lap 2: Keep tire 1 on and complete the lap in 1 * 4 = 4 seconds.
Lap 3: Spend 4 seconds fitting a fresh tire 1, then finish the lap in
another 1 second.
Total time = 1 + 4 + 4 + 1 = 10 seconds.
```

### Example 2

```text
Input: tires = [[5,3],[2,6]], changeTime = 7, numLaps = 6
Output: 47
Explanation:
Wear makes every second lap slower than a pit stop plus a fresh lap, so
swap before each of the six laps. Each lap takes 2 seconds on a fresh
tire 1, and the five swaps add 7 seconds apiece.
Total time = 6 * 2 + 5 * 7 = 47 seconds.
```

### Example 3

```text
Input: tires = [[9,2]], changeTime = 10, numLaps = 1
Output: 9
Explanation:
A single lap needs no stop: run it on the only tire in 9 seconds.
```

### Constraints

- `1 <= tires.length <= 10^5`
- `tires[i].length == 2`
- `1 <= base, changeTime <= 10^5`
- `2 <= wear <= 10^5`
- `1 <= numLaps <= 1000`

## Hints

### Hint 1

Because the wear factor is at least 2, consecutive lap times on one tire
at least double. Compare each next lap against the cost of a stop plus
the quickest fresh lap — past how many laps does staying out stop
paying off?

### Hint 2

For every run length up to that cap, compute the cheapest way to cover
that many laps back-to-back on one tire, taking the minimum over all
tire types.

### Hint 3

Combine runs with dynamic programming: the best time for the first `i`
laps extends the best time for some shorter prefix by one run, plus one
pit stop unless the run already reaches the finish.
