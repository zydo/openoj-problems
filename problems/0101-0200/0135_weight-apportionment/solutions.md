# Solutions — Weight Apportionment

Both answers grow out of the same reading: the strict comparisons chop the
line into monotone slopes that meet at peaks, and every unit of weight above
the floor is there because some slope demands it. The sweep acts on that
reading mechanically — it writes a weight at every position, satisfies the
left-hand rule going in and the right-hand rule coming back, then sums what
it wrote. The run arithmetic skips the writing altogether: each mountain is
two triangular series sharing a peak, so the total can be accumulated from
three counters that merely measure how far the current slope has run.

## Two-Pass Neighbor Sweep

One constraint mentions two neighbours at once, which is what makes a direct
greedy assignment awkward: fixing a position against its left neighbour can
break it against its right. Split the constraint in half and handle each half
in the direction it points.

Every position starts at `1`, the floor. The forward sweep looks only leftward:
when `scores[i]` beats `scores[i - 1]`, position `i` takes `weights[i - 1] + 1`.
That is the smallest weight that clears its left neighbour, and because the
prefix is already settled when `i` is reached, nothing earlier has to move. When
this sweep finishes, only rightward violations can be outstanding.

The backward sweep repairs those: when `scores[i]` beats `scores[i + 1]`,
position `i` needs at least `weights[i + 1] + 1`. Assigning that outright would
be a mistake, since it could lower a weight the forward sweep raised for a good
reason; taking `max(weights[i], weights[i + 1] + 1)` instead only ever pushes a
weight up. Raising a weight can never violate a "strictly greater" requirement
that was already met from the left, so the second sweep repairs the right side
without disturbing the left, and after it both halves hold.

The result is also minimal. A position at the top of a rise-then-fall ridge ends
at one more than the longer of the two monotone runs touching it, which is
precisely what the chain of strict inequalities forces; nowhere is a weight
larger than some chain demands. Summing the array is the answer.

Ties do nothing, since both comparisons are strict: in `[9,4,4,7,1]` the two
fours neither raise each other nor get raised, leaving `2, 1, 1, 2, 1`. And a
flat input like `[6,6,6,6]` never triggers either branch, so every position
keeps its initial `1`.

**Complexity:** `O(n)` time, `O(n)` space.

## Run-Length Slope Arithmetic

The sweep settles positions one by one, but the shape it converges to has a
closed form. Between two flats — or an end of the line — the scores form a
single mountain: a strictly rising leg of `a` positions ending at a peak,
then a strictly falling leg of `b` positions after it. On the rising leg the
weights have no choice: each step up must clear the one below, so they read
`1, 2, ..., a`, and the falling leg read up from its valley is
`1, 2, ..., b` for the same reason. A mountain therefore costs
`a(a+1)/2 + b(b+1)/2`, plus one more unit for every step by which `b + 1`
exceeds `a` — the peak belongs to both series and must top the taller, which
pins it at `max(a, b + 1)`.

No run is ever materialised. Three counters carry the whole computation:
`up` counts consecutive rises, `down` consecutive falls, and `peak` remembers
how long the ascent into the current peak was. A rise adds `up + 1`, the next
term of the rising series. A fall adds `down` — one for the new valley floor
and one for each earlier falling position, every one of which just grew by a
step — and a further `1` the moment `down` passes `peak`, which is the peak
itself being pushed up. Nothing is stored per position and no weight is ever
assigned; the total is simply accumulated as the slopes are walked.

Flats are the seams. Equal neighbours constrain nothing, so a flat is valley
ground where mountains touch: it contributes its plain `1`, zeroes every
counter, and both slopes restart after it. `[1, 2, 2, 1]` is two one-step
mountains sharing a summit plateau, costing `3 + 3 = 6` — exactly the
`1, 2, 2, 1` the sweep produces — and `[6, 6, 6, 6]` is four flats and
nothing else, costing `4`.

Each series is a lower bound as well as a tally: the `k`-th position up a
climb must weigh at least `k`, because the `k - 1` positions below it are
forced the same way all the way down to the valley, and the mirror argument
runs down every descent. The counters never add anything beyond these forced
values plus the correction the shared summit requires, so the arithmetic
lands on the same minimum the sweep reaches — without ever naming a weight.

**Complexity:** `O(n)` time, `O(1)` space.
