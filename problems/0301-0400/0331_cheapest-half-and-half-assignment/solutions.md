# Solutions — Cheapest Half-and-Half Assignment

## Sort by cost difference

Begin from the plan that routes everyone to the second site, paying
`sum(costs[i][1])`. Exactly `n` people have to move to the first site, and
moving person `i` shifts the total by `costs[i][0] - costs[i][1]` — a quantity
untouched by anyone else's destination. The cheapest schedule therefore applies
the `n` smallest differences, which is precisely what the code does: order by
`cost[0] - cost[1]` ascending, bill `cost[0]` to the first half and `cost[1]`
to the second.

An exchange argument seals optimality. Suppose someone with a larger difference
sat at the first site while someone with a smaller difference sat at the
second; trading their destinations alters the total by the difference of the
two differences — a negative amount — so the trade never costs more. An optimal
schedule thus exists in sorted order, and ties are harmless because equal
differences leave the total where it was.

The half-and-half quota is met by construction — the cut assigns exactly `n`
people to each site — so no search over assignments is ever needed.

For `[[50,80],[90,20],[60,65],[10,95],[85,30],[40,45]]` the differences run
`-30, 70, -5, -85, 55, -5`; the three smallest are `-85, -30, -5`, so positions
3, 0, and 2 take the first site and the rest take the second, totaling 215.

**Complexity:** `O(n log n)` time, `O(n)` space for the sorted copy.
