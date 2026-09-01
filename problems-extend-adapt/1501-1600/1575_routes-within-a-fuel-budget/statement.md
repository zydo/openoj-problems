# Routes Within a Fuel Budget

## Description

City `i` sits at position `locations[i]` on a line, where `locations`
is an array of distinct positive integers. You begin in city `start`
holding `fuel` units of fuel, and you want to end in city `finish`.

While standing in city `i` you may jump to any other city `j`
(`j != i`); the jump burns `|locations[i] - locations[j]|` units of
fuel, and your fuel may never go below zero. Cities may be revisited
freely — `start` and `finish` included.

A route is one exact sequence of cities traveled. Arriving at `finish`
does not end the trip: as long as fuel remains you may keep moving,
even leaving `finish` and returning later, and every distinct sequence
that finally stops at `finish` counts as its own route (including ones
that touch `finish` somewhere in the middle).

Count the distinct routes from `start` whose total fuel usage stays
within the budget. The count can be huge, so report it modulo
`10^9 + 7`.

### Example 1

```text
Input: locations = [4,2,9], start = 0, finish = 2, fuel = 10
Output: 3
Explanation: The three routes, each spending at most 10 fuel:
0 -> 2
0 -> 1 -> 2
0 -> 1 -> 0 -> 2
The last one loops back through the start city before heading on.
```

### Example 2

```text
Input: locations = [7,5,2], start = 1, finish = 0, fuel = 8
Output: 4
Explanation: The four routes:
1 -> 0, spending 2 fuel
1 -> 2 -> 0, spending 8 fuel
1 -> 0 -> 1 -> 0, spending 6 fuel
1 -> 2 -> 1 -> 0, spending 8 fuel
Route three reaches the destination after the first hop, wanders back
to city 1, and finishes there again — that whole sequence is one
route, counted separately from the direct hop.
```

### Example 3

```text
Input: locations = [1,8], start = 0, finish = 1, fuel = 5
Output: 0
Explanation: The only possible move costs |1 - 8| = 7 fuel, more than
the 5 available, so the destination is unreachable.
```

### Constraints

- `2 <= locations.length <= 100`
- `1 <= locations[i] <= 10^9`
- All values in `locations` are distinct.
- `0 <= start, finish < locations.length`
- `1 <= fuel <= 200`

## Hints

### Hint 1

Track the pair (current city, fuel still in the tank) as the state of
a search, and cache the answer for each pair.

### Hint 2

Because the positions are all distinct, every jump burns at least one
unit of fuel, so a state with the same fuel left can never recur on a
single walk — the memoized search has to terminate.
