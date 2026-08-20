# Solutions — Count Proper Grid Colorings

## Column-State Dynamic Programming

Rows top out at five while columns run to a thousand, so the profitable axis
to enumerate is the column, not the individual cell. Each legal coloring of
one column — every pair of vertically adjacent rows different — becomes a
state; `itertools.product` over three colors with an adjacent-equality
filter yields them all, never more than 3·2^(m-1) = 48. Two columns may
abut precisely when they disagree in every row, which turns the whole count
into a path-counting walk of length `n` over this miniature state graph.

The compatibility lists are built once: `compat[i]` holds every state that
differs from `i` row by row. The DP then carries one vector `cur`, indexed
by state — all ones to begin with, because the opening column accepts any
legal coloring — and each further column fans every state's count out to its
compatible successors under modulo 10^9+7. Summing the vector at the end is
right because the final column may finish in any state; states whose count
has hit zero are passed over in the inner loop, a minor constant saving.

Seeding with ones rather than pushing a first transition is also what makes
`n = 1` come out for free — the loop body never runs and the answer is just
the tally of single-column colorings, 3 for a one-row grid (the lone-cell
example) and, matching the second example, 3 · 2 = 6 for a pair of
side-by-side cells. With `S` states, the table costs `O(S^2·m)` to build and
each column at most `O(S^2)` to advance — trivial at `S <= 48`, `n <= 1000`.

**Complexity:** `O((n + m)·S^2)` time where `S = 3·2^(m-1) <= 48`,
`O(S^2)` space.
