# Solutions — Longest Integer Streak

Both variants begin the same way: strip away what the chains do not care
about — positions and duplicates — and then measure the maximal runs that
remain. The sorted variant orders a copy and finds every chain already laid
out end to end as a contiguous run of `+1` steps; the hash variant pours the
values into a set and walks each chain from its one true bottom. The sort
spends `O(n log n)` to make the measuring itself trivial; the hash walk is
the one that meets the statement's linear-time aim.

## Sort Scan

Sorted order is another way to answer "does `v + 1` exist?" In a sorted array
the question becomes "is the very next entry one larger?", which needs no table
at all. Pour the values into a sorted copy and each maximal chain turns into a
physical object: one contiguous run of entries stepping up by exactly one, with
a gap or an equal repeat marking where runs break.

The walk carries a single counter. An entry one larger than its predecessor
extends the current run; a jump of two or more is a gap, so the chain broke and
the run restarts at one; an equal entry is a duplicate of a value already
counted, and the run simply keeps its length. The largest value the counter
ever reaches is the answer. An empty array never enters the loop, so `0` falls
out for free.

The trade is stated openly in the problem: sorting costs `O(n log n)` against
the hash walk's linear sweep, which is why the statement calls this the easier
but slower route. What the sort buys is that no chain-bottom guard, no
membership test, and no nested walk remain — just neighbours compared — and it
is the natural shape whenever the input must be ordered anyway.

**Complexity:** `O(n log n)` time, `O(n)` space for the sorted copy.

## Hash Set Streak

The chains we are measuring are a property of the _set_ of values, not of their
positions, and duplicates are irrelevant to them. So the first move is to pour
`nums` into a hash set: repeats collapse, and "is `x` here?" becomes a constant
time question.

With that in hand, the tempting plan — for each value, walk upward as far as
the set allows — looks quadratic, and it would be if every value started a
walk. The fix is a one-line guard. A value `v` can only be the bottom of a
maximal chain when `v - 1` is missing from the set, and every maximal chain has
exactly one such bottom. Restricting walks to those values means each chain is
traversed once in total rather than once per member, so across the whole run
each value is stepped over at most once inside a walk and inspected once by the
outer loop. Linear, despite the nesting.

Measuring is then just counting: from a chain bottom, keep incrementing while
the next value is present, and remember the largest count seen.

Nothing else needs special handling. An empty array yields an empty set and a
best of `0`. In `[-3,9,-2,-1,0,9,1]` the second `9` never survives into the set,
so it cannot inflate anything, and `9` itself is its own chain of length `1`
while `-3` opens the winning chain of `5`. Negative values are no different
from positive ones — the algorithm only ever adds or subtracts one.

**Complexity:** `O(n)` time, `O(n)` space.
