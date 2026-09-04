# Solutions — Longest Window of At Most K Symbols

Both solutions chase the same predicate — a stretch of the string in which
at most `k` distinct symbols appear — and both lean on the one structural
fact that makes windows tractable: dropping symbols from a legal stretch
can never make it illegal. One solution uses it sideways: since every
substring of a feasible window is feasible, "some window of length `L`
works" is a predicate that flips from true to false exactly once as `L`
grows — the shape a binary search feeds on — and each probe of a candidate
length costs one sweep of the string. The other uses the fact directly,
growing and shrinking a single window as its right edge walks the string,
so the answer is complete after one pass.

![Window snapshots for s = "opoqr" with k = 2: the window grows through o, op, and opo (best 3), then shrinks twice as q and r each bring in a third symbol.](figures/solution-sliding-window.svg)

## Binary Search on the Window Length

Turn the question inside out: instead of asking, for every right edge, how
far left the window can reach, ask — for a candidate length `L` — whether
_any_ stretch of `L` consecutive symbols stays within the budget. The
predicate is honest work but easy: sweep the string once with a map of
multiplicities, letting the left edge of a fixed-size window trail `L`
steps behind the right edge, and declare the length feasible the moment
some window's distinct count dips to `k` or below. That sweep is exactly
the sliding window below with the shrink pinned to one shape — the window
never varies its size, only its position.

Why binary search applies: any substring of a legal window is legal (it
uses a subset of the symbols), so if length `L` is feasible then so is
every shorter length — the predicate is true on a prefix of the length
range and false beyond it, with the answer sitting on the boundary. The
search keeps `lo` feasible and shrinks `hi`, taking the upper midpoint so
the loop drives toward the last true; a string of length `n` needs about
`log n` probes. On `s = "opoqr"` with `k = 2`: length 3 is feasible
(`"opo"` carries `{o, p}`), length 4 is not (`"opoq"` adds the third
symbol, and so does every other placement), so the boundary lands on 3.

Both edges fall out of the search itself: `lo` starts at 0, which is
feasible by definition, so `k = 0` returns 0 after every positive probe
fails; and a string whose every symbol fits inside the budget leaves
`lo` walking all the way to `n`. The added price is a logarithmic factor
over the one-pass window, with the same per-probe map never holding more
than the distinct symbols of a single `L`-window.

**Complexity:** `O(n log n)` time, `O(min(n, Σ))` space.

## Sliding Window with Symbol Counts

Hold a window `[left, right]` plus a hash map of multiplicities: for each
symbol inside, how many copies the window contains. The right end advances
one character at a time; as soon as the map carries more than `k` keys, the
left end walks forward — decrement the count of `s[left]`, deleting the key
when its count hits zero — until the window is back within budget. At the
close of each iteration the window is the longest valid one that ends at
`right`, so the answer is the largest `right - left + 1` observed over the
whole sweep.

Validity is monotone, which is why the two-ended sweep loses nothing: a
window over budget makes every window containing it over budget too, so no
candidate is skipped by shrinking, and a one-character extension raises the
distinct count by at most one, so the shrink is always short. Both ends
travel only forward, so each character enters the window once and leaves at
most once.

The loop shape absorbs the edges by itself: at `k = 0` every extension is
immediately followed by a shrink that empties the window, and the function
returns 0; a string that fits inside the first valid window never triggers
a shrink at all. The map never holds more than `k + 1` keys, because the
shrink fires the instant the `(k + 1)`-th symbol appears.

**Complexity:** `O(n)` time, `O(k)` space.
