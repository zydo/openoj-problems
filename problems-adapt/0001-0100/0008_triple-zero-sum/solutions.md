# Solutions — Triple Zero Sum

Both sweeps rest on the same pin: hold one value of a would-be triple fixed,
and what is left to find is a pair summing to its negation. The hash variant
pins whichever value is in hand and asks a set of already-passed values
whether the partner it needs has shown up; the sorted variant pins the
smallest value and hunts the pair with converging pointers that need ordered
ground to walk. One buys its linear pair-hunt with a table, the other with a
sort — and either way the overall bill is quadratic, because there are `n`
pins to try.

## Hash Pair Scan

Sorting is not the only way to find a pair. A hash set answers "is the value
I need already behind me?" in constant time, and that is all the pair-hunt
actually requires — which is why this variant never orders the array at all.
Pin the value at `i`, scan right, and carry a set `seen` of the values passed
so far. The element in hand, `nums[j]`, closes a triple exactly when
`-(nums[i] + nums[j])` sits in `seen`; since `seen` only ever holds positions
strictly between `i` and `j`, the three values always occupy three different
positions. And unlike the converging pointers, which must meet the partners
in sorted order, this sweep does not care what order the values arrived in.

Duplicates are handled at both ends. Pinning the same value twice would only
re-scan a suffix the first occurrence already saw in full — its suffix is a
superset of every later one — so each distinct value is pinned once, at its
first occurrence. On the closing side, one value triple can close at several
different `j`: pinning `0` in `[0, 5, -5, 5, -5]` closes the same triple
twice. So triples are collected into a set keyed by their three sorted
values, and repeats collapse on arrival.

What the sorted walk gave the other variant for free, this one buys at the
till: the collected set is sorted once at the end, putting each triple's
values ascending and the triples themselves in lexicographic order. Each of
the at most `n` distinct pins runs one linear scan of constant-time set
operations, so the sweep is quadratic overall — the same bill as the
two-pointer walk, paid in hashing instead of sorting.

**Complexity:** `O(n²)` time, `O(n)` space beyond the triples it collects.

## Sort Two Pointer

Sort a private copy of the array first, then pin the smallest value of a
candidate triple at index `i` and hunt the other two with converging pointers
over the suffix: `left` at `i + 1`, `right` at the far end. A total under
zero needs to rise, so `left` steps right; over zero, `right` steps left; at
exactly zero the triple is recorded. The sorted order is doing double duty
here: each emitted `[nums[i], nums[left], nums[right]]` already lists its
values ascending, and marching `i` leftward to right emits the triples
themselves in lexicographic order, which is what the statement fixes.

Duplication is likewise handled by the ordering rather than by a set. Pinning
the same value twice would only rediscover the same pairs, so `i` hops over
any run equal to its predecessor. After a hit, both pointers step inward and
then skip their own runs of equal values, so one pinned `i` never emits one
pair twice. An early exit rounds it off: as soon as `nums[i] * 3 > 0`, even
the smallest remaining value is positive and nothing ahead can total zero, so
the loop stops.

`sorted(nums)` produces a fresh list and leaves the caller's data alone.
Sorting costs `O(n log n)`; each of the `n` pinned positions then runs one
linear sweep, and those sweeps dominate.

**Complexity:** `O(n²)` time, `O(n)` space.
