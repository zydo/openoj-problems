# Solutions — Longest Palindrome Slice

## Expand around center

Symmetry is the exploitable structure: a mirror reads the same from both of
its ends, so it is determined by its center. A string of length `n` has just
`2n - 1` candidate centers — every character hosts an odd-length mirror,
every gap between neighbours hosts an even-length one — and each center can
be probed outward one ring at a time. Extending a mirror is a single
comparison: the widened slice stays a mirror only when the two fresh
boundary characters agree, which is exactly what the `expand` helper tests
while walking outward, returning the bounds of the widest mirror it reached.

The driving loop hands every index `i` to both center kinds, `(i, i)` and
`(i, i + 1)`. At the string's final gap the even pair already has its right
index at `n`, so the loop condition fails at once and nothing bogus is
produced. The best bounds begin as `(0, 0)`, seeding the answer with one
character: that covers the smallest legal input, every string whose best
mirror has length 1, and guarantees the result is never empty.

Equal-length rivals are settled by the strict test
`r - l > best_end - best_start` — a later discovery of the same width never
displaces an earlier one, so the earliest-starting longest mirror is the one
returned, matching the statement (`"abcbadeded"` yields `"abcba"` rather than
the equally long `"deded"`).

**Complexity:** `O(n²)` time, `O(1)` space.
