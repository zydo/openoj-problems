# Solutions — K-th Smallest Gap

## Binary Search on the Answer

Enumerating the gaps is hopeless at `n = 10⁴`, but the question "how many gaps
land at `x` or below?" can be answered without listing them, and that tally
never decreases as `x` grows. A predicate with that shape is exactly what a
binary search over values needs: the candidates run from `0` up to the spread
between the largest and smallest entries, and the search maintains that the
target sits inside `[lo, hi]`. A `mid` whose tally already reaches `k` means
the answer is no larger, so `hi` drops to `mid`; a tally short of `k` rules out
everything up to and including `mid`, so `lo` climbs past it.

The value the search converges on is a real gap and not merely a threshold.
One below it the tally is short of `k`, at it the tally reaches `k`, and a
tally can only rise at a value some pair actually realises — so the crossing
point is itself realised. Repeated entries realise `0`, which is why the search
starts at `0` rather than `1`.

Counting is where sorting pays off. Once `nums` is in order, the entries that
sit within `dist` of position `i` occupy a contiguous stretch that begins at
`i`; the code tracks its far end in `j`, advancing while the difference stays
inside `dist`, and adds `j - i - 1` for the partners strictly after `i`.
Crucially `j` is never rewound between rounds — a larger `i` has a value at
least as large, so its window can only reach further right — which makes the
whole tally a single linear sweep rather than a nested loop. `j` also never
falls behind `i + 1`, since an entry is always within any non-negative distance
of itself.

Writing `D` for the spread, one `O(n log n)` sort is followed by `O(log D)`
rounds of linear counting.

**Complexity:** `O(n log n + n log D)` time, `O(n)` space.
