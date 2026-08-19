# Solutions — Longest Shared Segment

## Binary Search on the Answer with a Double Rolling Hash

Any prefix of a segment shared by every sequence is itself shared, so the
predicate "all sequences contain a common segment of length `L`" is true for
every `L` up to the answer and false beyond it. The code binary-searches `L`
over `[0, shortest sequence]` with the upper-mid form (`(lo+hi+1)//2`),
because short lengths satisfy the predicate and the search must settle on the
largest one that still does; `0` falls out naturally when nothing matches.

The feasibility test slides a window of length `L` along every sequence and
records a polynomial rolling hash of each window. Hashes use two independent
moduli (10^9+7 and 10^9+9) with base 1000003, combined into a single key, so a
chance collision needs two coincidences at once; every value is also lifted by
1 before hashing, which stops a run of zeroes from collapsing to the all-zero
hash no matter where it sits. The first sequence donates the initial set of
window hashes, and every later sequence's set is intersected into it, with an
early exit the instant the intersection empties. Advancing the window is
constant work: scale by the base, remove the departing entry weighted by
`BASE^L`, append the arriving entry — under both moduli.

On the first example the length-3 windows of `[2,5,1,4,0]`, `[0,3,5,1,4]` and
`[5,1,4,2]` intersect exactly at the hash of `[5,1,4]`, while at length 4 the
first sequence's windows `[2,5,1,4]` and `[5,1,4,0]` match nothing the others
offer, which pins the answer at 3.

`exists(0)` is vacuously true, and a sequence shorter than `L` makes the test
return false at once, so the search bounds stay consistent. The running set
never outgrows the first sequence's window count and per-sequence sets are
built and dropped, keeping memory linear in the input.

**Complexity:** `O(S log L)` time (`S` = combined length of all sequences,
`L` = length of the shortest one), `O(S)` space.
