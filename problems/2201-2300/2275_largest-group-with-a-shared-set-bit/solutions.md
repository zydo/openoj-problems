# Solutions — Largest Group With a Shared Set Bit

## Count candidates per bit position

A group ANDs to something positive exactly when one bit position is set in
every member. Fixing a bit makes this decidable cheaply in both directions:
the candidates carrying that bit form a group whose AND still has it, while
any positive-AND group must owe its positivity to some bit all of its
members carry — so its size can never beat that bit's crowd. The answer is
therefore just the widest crowd.

The code never builds a group. It walks `candidates` once, adding 1 to a
counter for every set bit (values stop below 2²⁴, so 24 counters suffice),
then reports the largest counter.

**Complexity:** `O(n * B)` time and `O(B)` space, where `B` is the number of
bit positions scanned (`B = 24`).
