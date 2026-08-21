# Solutions — Shuffle an Array

## Fisher-Yates from a pristine original

The class owes two guarantees: `reset` must reproduce the initial
arrangement at any moment, and `shuffle` must spread probability evenly
across all `n!` arrangements. The first is met by quarantine — the
constructor stows a copy of `nums` as `original`, `reset` hands out a copy
of that, and every `shuffle` works on yet another fresh copy it is free to
wreck.

The shuffle is Fisher-Yates: with `i` running from the last slot down to
`1`, swap slot `i` against a uniformly drawn slot `j` in `[0, i]`; after the
swap, slot `i` is final and never touched again. Uniformity is a counting
argument — step `i` offers exactly `i + 1` equally likely choices, distinct
choice-sequences yield distinct orderings, and the product of the choice
counts is `n!`, matching the `n!` orderings, so each carries exactly
`1 / n!`. The tempting shortcut that draws `j` from the entire `[0, n)` at
every step produces sequence-counts of unequal multiplicity per ordering —
the bias becomes visible after a few hundred thousand draws, precisely the
regime the judge replays (thousands of draws per judged call, every
ordering's empirical frequency held to `1 / n!` within a tolerance band).

The Python and Java ports run this verbatim, with `random.randrange(i + 1)`
and `ThreadLocalRandom.current().nextInt(i + 1)` as the uniform sources.

**Judged scale.** Bucketing by the whole returned array only works while the
table is enumerable, so the statistical cases stop at five elements (120
orderings, ~170000 replays; smaller arrays use proportionally fewer) —
beyond that, each bucket's expected count would drown in noise. `reset` is
exact-compared wherever it appears, and the uniformity argument itself does
not depend on size.

**Complexity:** `O(n)` per `reset` and per `shuffle` (a copy plus one swap
per slot), `O(n)` space.
