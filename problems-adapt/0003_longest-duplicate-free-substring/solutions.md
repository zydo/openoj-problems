# Solutions — Longest Duplicate-Free Substring

Two ways to sweep the string while holding the same invariant — the stretch
`s[start..i]` never repeats a character. They part ways at the moment a
repeat arrives: one shortens the stretch a position at a time, the other
jumps its left edge straight past the offending copy.

## sliding

The stretch `s[start..i]` carries a set of exactly the characters inside it.
Each arriving character `c` is checked against that set; when it is already
present, the older copy of `c` has to leave before the new one may enter.
So the left edge advances one position at a time, dropping `s[start]` from
the set, until no copy of `c` remains; then `c` is added and `i - start + 1`
is compared against the best length so far.

Correctness rests on the eviction loop removing precisely those characters
that can no longer belong to any duplicate-free stretch ending at `i`, and
on stopping the instant `c` is gone, which keeps the stretch as wide as the
invariant permits. The left edge never retreats and can never overtake `i`,
so every character joins the set once and leaves at most once. The loop
looks nested, but total evictions across the whole scan are capped at `n`,
making the algorithm linear in amortized terms.

The boundary inputs need no special code: an empty string skips the loop and
returns 0, and a run of one repeated character — every new arrival evicts
its immediate predecessor — keeps the stretch pinned at width 1. The set
never exceeds one entry per distinct character, and the alphabet is small,
so the working memory is trivial beside the input.

**Complexity:** `O(n)` time (amortized: each character is inserted and evicted
at most once), `O(k)` space for the set, `k` being the distinct-character count.

## last_index_jump

The same invariant, with lighter bookkeeping: `last_seen` records the most
recent position of every character so far. When the arriving `c` already has
an occurrence inside the current stretch, that occurrence cannot stay, and
`start` jumps directly to `last_seen[c] + 1` — no stepwise shrinking at all.
On `"kayakrace"`, the second 'a' (position 3) pulls `start` to 2; two steps
later the second 'k' finds its earlier copy at position 0, _left_ of the
edge, and leaves it alone — which is the whole point of the next paragraph.

The `last_seen[c] >= start` guard is what makes the jump safe. A stored
position behind the current edge describes a character that already left the
stretch; acting on it would drag the edge backwards and wrongly expel
characters that are still inside. With the guard in place the edge moves
only forward, the stretch is duplicate-free again after each step, and
`i - start + 1` updates the best length.

Boundaries behave exactly as in the set-based variant — empty input returns
0, a single repeated character pins the width at 1 — and the map stays at
one entry per distinct character. The gain is doing constant work per repeat
instead of re-walking evicted positions; the price is maintaining the guard
against stale entries.

**Complexity:** `O(n)` time, `O(k)` space (`k` = number of distinct characters).
