# Fewest Supply Stops to Destination

## Description

A vehicle begins at coordinate zero and must reach `destination`. Its initial
energy permits travel through coordinate `initialRange`, and each unit of
energy advances it by one coordinate.

`supplies[i] = [position, amount]` describes a one-time supply available at a
strictly increasing position along the route. If the vehicle stops there, it
takes the entire amount. Its capacity is unlimited, and stopping is optional.

Return the fewest supply stops needed to reach the destination, or `-1` when
the trip is impossible. Reaching a supply point or the destination with
exactly zero remaining energy is allowed.

### Example 1

```text
Input: destination = 35, initialRange = 40, supplies = []
Output: 0
```

### Example 2

```text
Input: destination = 60, initialRange = 10, supplies = [[15,50]]
Output: -1
Explanation: The first supply point cannot be reached.
```

### Example 3

```text
Input: destination = 80, initialRange = 20, supplies = [[20,50],[45,20],[65,15]]
Output: 2
Explanation: Take 50 units at position 20 and 20 units at position 45.
```

### Constraints

- `1 <= destination, initialRange <= 10^9`
- `0 <= supplies.length <= 500`
- `1 <= supplies[i][0] < supplies[i + 1][0] < destination`
- `1 <= supplies[i][1] < 10^9`

## Hints

### Hint 1

Delay choosing among passed supply points until the current range is
insufficient.

### Hint 2

Keep all reachable supply amounts in a max-heap. On each shortfall, take the
largest amount previously passed.

### Hint 3

If the heap is empty before the destination becomes reachable, no solution
exists.
