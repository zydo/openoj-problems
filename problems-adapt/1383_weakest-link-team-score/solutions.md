# Solutions — Weakest-Link Team Score

## Efficiency sweep with a min-heap of speeds

The formula `sum(speeds) * min(efficiency)` is hostile to direct optimization:
shrink the team and the sum falls; add a member and the minimum can fall too.
Break the coupling by fixing the minimum. Sort the candidates so efficiencies
arrive in descending order, and treat each arriving candidate as the anchor —
the member whose efficiency the whole team will be priced at. Every candidate
already processed carries an efficiency at least that high, so whichever team
this anchor belongs to is drawn entirely from what the sweep has seen.

Alongside the sweep runs a min-heap of the anchored team's speeds and their
running total. Each arrival is pushed; if the heap then exceeds `k` members,
the slowest (the heap's root) is popped and subtracted. At that point the heap
holds the fastest `<= k` speeds among all candidates with efficiency at or
above the anchor's, so `speed_sum * eff` is exactly the best score of any team
this anchor leads, and a running maximum absorbs it.

Every candidate team is accounted for: take the optimal team and look at its
own lowest-efficiency member. That member anchors some step of the sweep, all
teammates have already arrived, and the heap at that step holds the fastest
legal selection from them — so the recorded value is no smaller than the
optimum. Undersized teams need no special case, since the roster only
overshoots `k` transiently before an eviction. In Example 2 the anchor with
efficiency 5 finds speeds {4, 6, 2, 7} heaped beside it for 19 * 5 = 95, and
the later efficiency-3 anchor, despite a fatter sum, cannot catch up.

Reduction happens once, at the return: the products must be compared at full
precision, because the true maximum — not its residue — decides the winner.
Speeds up to `10^5` against efficiencies up to `10^8` overflow 32-bit easily,
which is why wide arithmetic carries the sweep in the stricter languages.

**Complexity:** `O(n log n)` time, `O(n)` space.
