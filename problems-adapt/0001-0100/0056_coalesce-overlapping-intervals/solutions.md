# Solutions — Coalesce Overlapping Intervals

## Sort and Sweep

Ordering does the hard thinking. Once the ranges are sorted by left end (with
the right end breaking ties), any range that joins an earlier one necessarily
joins the span built most recently: everything before that span is closed off
by a gap, or it would not have closed, and everything after starts no earlier
than the current range. So the whole reduction is a walk that carries one
span.

That walk reads each `(start, end)` in order. If the span under construction is
open and `start <= span.right`, the incoming range meets it — its left end is
already inside, so the only question is how far right the union reaches, and
the answer is the larger of the two right ends. A range swallowed whole
leaves the span exactly as it was. If instead the range begins past the span's
right end, a genuine gap separates them, and the range opens the next span.

The comparison is deliberately `<=`: `[2,6]` against `[6,9]` share the point 6,
and sharing a point means covering the same ground, so they join into `[2,9]`.
Because the walk sees starts in non-decreasing order, a span's left end is
fixed at the moment it opens and no later range can reach behind it — the
output comes out ordered with touching runs collapsed to maximal spans, and
nothing needs revisiting.

On `[[0,10],[3,4],[8,9]]`: `[0,10]` opens the span, `[3,4]` starts inside it
and is swallowed (4 does not push past 10), `[8,9]` likewise, and the single
span `[0,10]` is the whole answer.

Sorting costs `O(n log n)` comparisons and the walk is linear; the sort key
sorts a copy, so the caller's array is never reordered. Storage is that copy
plus the output list, which holds at most one span per input range before any
joining.

**Complexity:** `O(n log n)` time, `O(n)` space.
