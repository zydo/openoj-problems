# Solutions — Longest Increasing Run

## Single pass with a run counter

Contiguity is what makes this easy: a valid run is just a stretch of the
array where every element strictly beats its predecessor, and such runs
partition the array — every position belongs to exactly one maximal run,
the one ending at it. So the answer is the length of the longest run, and
one left-to-right pass with two counters sees every candidate: `run`
measures the strictly increasing stretch under the cursor, `best` remembers
the longest one seen so far.

Both counters start at 1, because a lone element is already an increasing
run of length 1 — which is why a one-element array answers 1 without the
loop ever running. For each `i` from 1 on, a strict rise `nums[i - 1] <
nums[i]` grows `run` by one and raises `best` to at least `run`; anything
else — a drop or an equal value — ends the run and restarts it at 1.
Strictness does all the discriminating: in Example 2 the equal 8s never
rise, so every run stays at length 1. A run reaches its full length only at
its final element, right where the next comparison fails or the array ends,
and updating `best` while the run grows records it exactly there — the
classic slip of updating only on a break would miss a run that closes at
the last element.

Example 1 splits `[2,4,6,1,3,5,7,9]` where 1 fails to clear 6, giving runs
`[2,4,6]` and `[1,3,5,7,9]` of lengths 3 and 5, so the answer is 5 — no
subarray can bridge the drop from 6 down to 1, since bridging it would
break the contiguity the problem demands. The elements are only ever
compared, never combined, so the constraint's ±10⁹ extremes need no wider
arithmetic.

**Complexity:** `O(n)` time, `O(1)` space.
