# Solutions — Last Ant Off the Plank

## Ant Passing-Through Symmetry

The choreography of head-on meetings is scenery. Watch any collision: both
ants reverse, so the configuration one instant later is exactly the one
you would see had the two ants walked through one another and exchanged
names — same positions occupied, same directions in play. The asked-for
quantity, the moment the plank finally empties, is a fact about occupied
positions, never about which ant carries which label, so every collision
can be struck from the analysis.

Under pass-through rules each ant simply keeps walking toward the end it
already faces and drops off. A left-heading ant starting at `p` needs `p`
seconds to reach `0`; a right-heading one needs `n - p` to reach `n`. The
plank empties when the slowest of these walkers is done, so the answer is
the maximum of those times over both lists — two linear scans from a
running best. In the walkthrough example, the turnarounds of A/B at 1 and
B/C at 2 rearrange names freely, but someone must still cover the distance
from 2 to the right end (or from 4 to the left), and the longest
unavoidable walk is the 5 units between position 0 and position 5 — hence
the answer 5, delivered by ant C after both of its meetings.

What looks like it demands a meeting-by-meeting simulation collapses into
one maximization: the result depends on each starting position and
heading, never on the schedule of encounters. Either input list may be
empty on its own, but at least one ant exists, so the maximum is always
taken over something.

**Complexity:** `O(L + R)` time, `O(1)` space.
