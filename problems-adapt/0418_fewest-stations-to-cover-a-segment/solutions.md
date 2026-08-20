# Solutions — Fewest Stations to Cover a Segment

## Greedy Farthest-Reach Coverage

Station `i` contributes the interval `[i − radii[i], i + radii[i]]`, trimmed
to `[0, n]` — reach spilled past an endpoint buys nothing. What remains is
the textbook minimum-interval cover of the segment `[0, n]`: pick as few
intervals as possible whose union contains it.

The greedy tracks `covered`, the rightmost point known to be protected, and
repeatedly asks: of every interval that begins at or before `covered` — that
is, that connects to the protected prefix — which one stretches furthest
right? That furthest end becomes the new `covered` and costs one station.
The jump-game exchange argument proves this optimal: every feasible selection
must contain an interval crossing the current boundary, and keeping the
longest one can never hurt what follows. Should no interval begin at or
before `covered`, the boundary ahead is a permanent gap and the answer is −1.

![Each station's reach as an arc over the segment; station 3 alone spans [0, 6].](figures/solution-station-arcs.svg)

Sorting the intervals by left endpoint turns the sweep into one pass: a
cursor advances over intervals as they become relevant and never moves back,
because an interval starting beyond the current `covered` starts beyond every
earlier one too. A zero-reach station degenerates to the single point it
stands on, and the loop stops the instant `covered` reaches `n`.

On the second example, `n = 8` with `radii = [2,0,2,0,3,0,2,0,2]`: the
sorted intervals are `[0,2], [0,4], [1,7], [4,8], [6,8]`. The prefix at `0`
is entered by the first two, and the furthest end is `4` — one station. Of
the intervals beginning by `4`, namely `[4,8]`, the end jumps to `8 = n` — a
second station, and the answer is `2`.

**Complexity:** `O(n log n)` time, `O(n)` space.
