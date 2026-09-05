# Fewest Transfers to Balance a Ring

## Description

`n` people sit around a ring, and person `i` holds a balance `balance[i]`
that may be negative. A transfer moves exactly one unit of balance from
one person to one of their two ring neighbors; units can travel several
hops by being passed along.

Everyone must end up holding a non-negative balance. Find the smallest
number of single-hop transfers that achieves this, or report `-1` when no
sequence of transfers can.

Note: at most one person starts with a negative balance.

### Example 1

```text
Input: balance = [4,0,-2]
Output: 2
Explanation: Person 2 is short 2 units, and person 0 sits one seat away.
Person 0 sends two units along the ring, each costing one hop, so the
ring balances after 2 transfers and fewer cannot do it.
```

### Example 2

```text
Input: balance = [1,-4,6]
Output: 4
Explanation: Person 1 needs 4 units. Both neighbors are one seat away:
person 0 passes over its single unit (1 transfer) and person 2 covers the
remaining 3 (3 transfers), for 4 in total.
```

### Example 3

```text
Input: balance = [2,-5]
Output: -1
Explanation: The ring's total balance is -3, and transfers only move
balance around without creating any, so someone must stay negative.
```

### Constraints

- `1 <= n == balance.length <= 10⁵`
- `-10⁹ <= balance[i] <= 10⁹`
- At most one value in `balance` is negative initially.

## Hints

### Hint 1

With no negative balance the answer is already 0, and a negative grand
total makes the task impossible.

### Hint 2

A person sitting at circular distance `d` from the negative one spends
exactly `d` transfers per unit they give away, whichever way around the
ring it travels.

### Hint 3

Sort the holders of positive balance by their distance to the deficit and
pull from the nearest ones first until the shortfall is gone.
