# Quickest River Crossing

## Description

A group of n people waits at a base camp on one bank of a river, and a
single boat sits with them. Everyone must reach the far bank, but the boat
holds at most k passengers per trip. How fast any trip goes depends on
conditions that cycle through m stages.

Stage j carries a speed multiplier mul[j]:

- A multiplier above 1 slows the boat down.
- A multiplier below 1 speeds it up.

Person i rows with strength time[i]: alone, in neutral conditions, they
would cross in that many minutes.

The rules of a trip:

- A group g leaving during stage j needs max of time[i] over its members,
  times mul[j], minutes to reach the far bank.
- Once a crossing takes d minutes, the stage moves forward by
  `floor(d) % m` steps.
- While people remain on the starting bank, somebody must row the boat
  back. If person r is the one returning, that leg costs
  `time[r] × mul[current_stage]`, and the stage again advances by
  `floor(return_time) % m`.

Return the least total time in which everyone can be brought across. If
getting everyone over is impossible, return -1.

### Example 1

```text
Input: n = 1, k = 1, m = 3, time = [6], mul = [1.0,0.5,2.0]
Output: 6.00000
Explanation: The lone person departs during stage 0, so the crossing
takes 6 × 1.00 = 6.00 minutes, and nobody is left behind.
```

### Example 2

```text
Input: n = 2, k = 2, m = 2, time = [3,9], mul = [1.0,1.5]
Output: 9.00000
Explanation: Both people fit in one trip. Leaving at stage 0, the
crossing takes max(3, 9) × 1.00 = 9.00 minutes, and everyone is across.
```

### Example 3

```text
Input: n = 3, k = 2, m = 2, time = [2,2,4], mul = [1.0,0.5]
Output: 8.00000
Explanation: People 0 and 2 leave at stage 0: max(2, 4) × 1.00 = 4.00
minutes, and the stage advances by floor(4.00) % 2 = 0, staying at 0.
Person 0 rows back: 2 × 1.00 = 2.00 minutes, and the stage again advances
by 0. People 0 and 1 then leave: max(2, 2) × 1.00 = 2.00 minutes. The
total is 4.00 + 2.00 + 2.00 = 8.00 minutes.
```

### Example 4

```text
Input: n = 2, k = 1, m = 2, time = [4,4], mul = [1.0,1.0]
Output: -1.00000
Explanation: One seat means every crossing leaves someone behind, and
every return leg brings that someone back — no schedule ever empties the
starting bank, so the answer is -1.00.
```

### Constraints

- `1 <= n == time.length <= 12`
- `1 <= k <= 5`
- `1 <= m <= 5`
- `1 <= time[i] <= 100`
- `m == mul.length`
- `0.5 <= mul[i] <= 2.0`

## Hints

### Hint 1

Treat this as a shortest-path problem: a state is the set of people still
on the starting bank, the current stage, and which bank holds the boat.

### Hint 2

From the starting bank, enumerate every subgroup of at most k people — a
bitmask — as one outgoing leg; only the group's largest time matters.

### Hint 3

Each leg strictly adds positive time, so Dijkstra settles every state the
first time it is reached.

### Hint 4

The state space is finite and small (2^n × m × 2), and the answer is the
first finishing leg that empties the bank — or -1 if none is ever
reached.
