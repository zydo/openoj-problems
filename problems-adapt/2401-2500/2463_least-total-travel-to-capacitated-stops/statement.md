# Least Total Travel to Capacitated Stops

## Description

Units sit at distinct positions on a number line. You are given an integer
array `units`, where `units[i]` is the position of the i-th unit, and a 2D
integer array `stations`, where `stations[j] = [position_j, limit_j]` names
the position of the j-th stop and how many units it can serve at most. Stop
positions are distinct too, and a unit may start exactly on a stop.

Every unit must travel to some stop that still has room, and each unit's
travel cost is the distance it covers, `|position - unit position|`. A stop
that has reached its limit takes no more units.

Assign every unit to a stop so that no stop exceeds its limit, and return the
smallest possible sum of travel costs. The inputs guarantee an assignment
always exists.

### Example 1

```text
Input: units = [2,6,9], stations = [[5,2],[9,1]]
Output: 4
Explanation:
- The unit at 2 travels to the stop at 5, costing 3.
- The unit at 6 travels to the stop at 5, costing 1. That stop's limit of 2
  is now used up.
- The unit at 9 is already on the second stop and does not move.
The total is 3 + 1 + 0 = 4, and no assignment does better.
```

### Example 2

```text
Input: units = [-1,2], stations = [[-5,1],[3,1]]
Output: 5
Explanation: Each stop takes a single unit, so the units part ways:
- The unit at -1 travels to the stop at -5, costing 4.
- The unit at 2 travels to the stop at 3, costing 1.
The total is 4 + 1 = 5. Sending both units to one stop is impossible, and
crossing them — the left unit right, the right unit left — only adds
distance.
```

### Example 3

```text
Input: units = [1,2,3], stations = [[0,0],[3,3]]
Output: 3
Explanation: The stop at 0 has limit 0 and is closed for good. All three
units go to the stop at 3, costing 2 + 1 + 0 = 3.
```

### Constraints

- `1 <= units.length, stations.length <= 100`
- `stations[j].length == 2`
- `-10⁹ <= units[i], position_j <= 10⁹`
- `0 <= limit_j <= units.length`
- Unit positions are pairwise distinct; stop positions are pairwise distinct.
- The inputs admit an assignment that serves every unit.

## Hints

### Hint 1

Sort the units and the stops by position. What can be said about an optimal
plan's shape once both lists are ordered?

### Hint 2

Two assignments that cross — a left unit sent right past a right unit sent
left — can always be uncrossed without raising the total. So each stop serves
a consecutive run of units in sorted order.

### Hint 3

Run a DP over the first `i` units and the stops in order, letting each stop
absorb a consecutive block of up to `limit` units. Prefix sums of distances
make each block's cost a subtraction.
