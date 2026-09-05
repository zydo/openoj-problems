# Fewest Ship Voyages for Ordered Deliveries

## Description

A single ferry moves a queue of boxes from a warehouse to their destination
ports. The ferry can only hold so many boxes at once, and only so much
combined weight.

You are given `boxes`, where `boxes[i] = [ports_i, weight_i]`, together with
three integers `portsCount`, `maxBoxes`, and `maxWeight`:

- `ports_i` is the port awaiting the `i`-th box, and `weight_i` is that
  box's weight.
- `portsCount` is how many distinct ports exist.
- `maxBoxes` and `maxWeight` cap how many boxes, and how much total weight,
  the ferry can carry at one time.

Boxes leave the queue strictly in the order given. Each round, the ferry:

- loads some number of boxes off the front of the queue without breaking
  either cap;
- sails to each loaded box's port, in loading order, and unloads it there —
  if it is already anchored at that port, no sailing happens;
- sails back to the warehouse to pick up the next batch.

The ferry must be back at the warehouse once the queue is empty. Return the
smallest possible number of sailings.

### Example 1

```text
Input: boxes = [[1,1],[1,1],[2,1],[2,1]], portsCount = 2, maxBoxes = 4, maxWeight = 4
Output: 3
Explanation: All four boxes fit at once (4 boxes, total weight 4). The
ferry sails to port 1 and drops the first two, sails to port 2 and drops
the other two, then sails back to the warehouse — two boxes bound for the
same port share a single sailing.
```

### Example 2

```text
Input: boxes = [[1,3],[1,3]], portsCount = 3, maxBoxes = 2, maxWeight = 4
Output: 4
Explanation: Together the boxes weigh 6, past the weight cap, so each must
sail on its own round: to port 1 and back, twice — 4 sailings overall.
```

### Example 3

```text
Input: boxes = [[1,2],[2,2],[1,2]], portsCount = 5, maxBoxes = 3, maxWeight = 6
Output: 4
Explanation: All three fit in one round. The ferry calls at port 1, then
port 2, then port 1 again, then returns to the warehouse: 4 sailings.
```

### Constraints

- `1 <= boxes.length <= 10⁵`
- `1 <= portsCount, maxBoxes, maxWeight <= 10⁵`
- `1 <= ports_i <= portsCount`
- `1 <= weight_i <= maxWeight`

## Hints

### Hint 1

Because boxes leave in order, every round carries one contiguous block of
the queue — think of how to cost a split of the sequence into blocks.

### Hint 2

A block costs two sailings plus one for every port change inside it, so
with a prefix count of port changes the DP over splits can be linearized
with a sliding-window minimum.
