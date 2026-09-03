# Record-Breaking Arrivals

## Description

Students file into a room one at a time; `ranks[i]` is the rank number of
the `i`-th student to arrive, and a smaller number means a stronger rank.

The first student through the door is kept as the standing pick. From then
on, whenever the next arrival's rank is strictly better — strictly smaller —
than the standing pick's, that arrival takes over as the new pick.

Return how many times the standing pick gets replaced.

### Example 1

```text
Input: ranks = [9,3,7,1,8,1]
Output: 2
Explanation: The first arrival, with rank 9, is the opening pick. Rank 3 is
better, so the pick changes once. Ranks 7 and 8 are worse. Rank 1 is better,
so the pick changes a second time. The last arrival also holds rank 1, which
only ties the pick, so the total stays 2.
```

### Example 2

```text
Input: ranks = [10,10,9,2,2,8]
Output: 2
Explanation: The opening pick holds rank 10. The next arrival ties it, and
a tie never replaces the pick. Rank 9 then takes over, and rank 2 takes over
later — two replacements. The remaining rank-2 and rank-8 arrivals change
nothing.
```

### Example 3

```text
Input: ranks = [6]
Output: 0
Explanation: The only student is the initial pick, and nobody arrives after
them to contest it.
```

### Constraints

- `1 <= ranks.length <= 10^5`
- `1 <= ranks[i] <= 10^5`

## Hints

### Hint 1

Sweep the arrivals in order while remembering the best rank seen so far.

### Hint 2

Each time an arrival's rank lands strictly below that remembered best, the
best improves — count that arrival.
