# Solutions — Shortest Way to Form String

## Greedy two-pointer scan

Repeatedly scan through `source` once from the start, greedily advancing a
pointer into `target` whenever the current `source` character matches the
next unmatched `target` character. Each full scan of `source` — or the
partial scan that finishes when `target` runs out mid-scan — counts as one
used subsequence, so the running scan count is incremented at the end of
every pass. If an entire pass through `source` completes without the
`target` pointer advancing even once, no further progress can ever be
made and `target` contains a character absent from `source`, so return
`-1`. Otherwise, repeat until every character of `target` has been
matched and return the number of passes used.

**Complexity:** `O(N * M)` time, `O(1)` space (excluding the output),
where `N` is the length of `source` and `M` is the length of `target` —
in the worst case each pass through `source` advances the `target`
pointer by only one character.
