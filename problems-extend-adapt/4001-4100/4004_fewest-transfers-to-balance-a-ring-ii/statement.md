# Fewest Transfers to Balance a Ring II

## Description

`n` people sit in a circle. Person `i` starts with a balance `balance[i]`,
which may be negative.

In one move, a person hands exactly one unit of balance to whichever
neighbor they choose — the one to their left or the one to their right.

Find the fewest moves that leave every person's balance non-negative, or
report that no sequence of moves can achieve that.

### Example 1

```text
Input: balance = [2,-1,-1]
Output: 2
Explanation: Person 0 sends one unit to person 1, reaching [1,0,-1], then
one unit to person 2, reaching [0,0,0]. Two moves suffice, and no single
move can fix two negative balances at once, so two is optimal.
```

### Example 2

```text
Input: balance = [3,-2,-1]
Output: 3
Explanation: Person 0 sends two units to person 1, reaching [1,0,-1], then
one more unit to person 2, reaching [0,0,0]. Three moves suffice.
```

### Example 3

```text
Input: balance = [-4,-4,7]
Output: -1
Explanation: The total balance is -1, and moves only redistribute balance
between neighbors without changing the sum, so some person's balance stays
negative no matter what is done.
```

### Constraints

- `1 <= n == balance.length <= 1000`
- `-10⁵ <= balance[i] <= 10⁵`

## Hints

### Hint 1

If the total of every balance is negative, no sequence of moves can make
every person non-negative, since transfers never change that total.

### Hint 2

Treat a positive balance as supply and a negative balance as demand.
Sending one unit across one edge of the ring costs one move — this is a
transportation problem on a cycle.

### Hint 3

Model it as a minimum-cost flow: a source feeds every surplus position, a
sink drains every deficit position, and each pair of neighbors is joined by
edges of cost 1 in both directions.

### Hint 4

The minimum cost of routing enough flow to cover every deficit is exactly
the answer.
