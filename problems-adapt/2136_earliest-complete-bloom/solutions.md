# Solutions — Earliest Complete Bloom

## Greedy Sorting by Grow Time

Exactly one seed is worked per day, so the planting work always sums to the
same total; an ordering can only move each seed's finish line. Interruptions
buy nothing either — pausing one seed's planting to start another never
blooms anything sooner — so an optimal calendar plants the seeds back to
back, and the whole question is the sequence. Under any fixed sequence, seed
`i`'s planting ends after the `plantTime` of it and all its predecessors
(call that `prefix`) and it opens at `prefix + growTime[i]`.

The sequence should hand the slowest growers to the soil first. Exchange two
adjacent seeds where the earlier grows faster: the later seed's finish is
untouched, while the earlier one's growth — which was going to trail past the
later seed's planting anyway — now overlaps that planting instead. Long
growth hidden under later planting work is free; long growth exposed after
it is what sets the answer.

The code sorts `(plantTime, growTime)` pairs by descending growth time and
sweeps once, accumulating `prefix` and keeping `max(prefix + grow)`. Example 1
under this order — growth times 3, 2, 1 — puts the four-day planter first so
its three growth days hide under later planting, and the answer is the final
seed's day 9. The maximum, not the final seed alone, is what to track: in
example 2 the seed blooming last is not the one planted last.

**Complexity:** `O(n log n)` time, `O(n)` space.
