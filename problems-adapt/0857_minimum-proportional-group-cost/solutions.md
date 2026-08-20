# Solutions — Minimum Proportional Group Cost

## Sort by ratio with a max-heap of qualities

If a group uses a common rate `r` per unit, candidate `i` receives
`r · units[i]`. Meeting every minimum requires
`r >= minimumPayments[i] / units[i]` for each member. Consequently, the
smallest valid rate for a fixed group is its largest individual required rate,
and its total cost is that rate multiplied by the group's unit sum.

Sort candidates by required rate and sweep upward. When candidate `i` is
reached, every earlier candidate is compatible with using `i`'s rate as the
group maximum. Among those candidates, the cheapest group of the required size
is the one with the smallest total units.

Maintain a max-heap of unit counts and their running sum. Push each arriving
count; whenever the heap grows beyond `groupCount`, remove its largest count.
Thus the heap always contains the smallest unit counts in the processed
prefix. When its size equals `groupCount`, multiply the sum by the current rate
and compare it with the best cost.

Every possible group has a member with maximum required rate. The sweep
evaluates an equal-or-cheaper compatible unit subset when that member is
processed, so the minimum candidate cost is globally optimal.

**Complexity:** `O(n log n)` time and `O(n)` space.
