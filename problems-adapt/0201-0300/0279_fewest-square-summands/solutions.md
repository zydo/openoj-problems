# Solutions — Fewest Square Summands

Three ways to arrive at the same count: a tabulated recurrence, a
level-order search that halts on the first zero, and two classical
theorems that read the count straight off the shape of `n`.

## dp

Write `dp[i]` for the smallest number of squares adding up to `i`. Every
decomposition has a final summand — call it `s`, necessarily `s <= i` —
and the summands before it form a decomposition of `i - s`, optimally the
shortest one. That yields `dp[i] = 1 + min(dp[i - s])` across every square
`s` that fits, anchored by `dp[0] = 0`: an empty sum. Since `1` is itself
a square, every state is reachable and no infeasible cases exist.

The candidate squares are listed once — `k²` for `k` up to `⌊√n⌋`, no
more than a hundred of them when `n = 10⁴` — and the table is written in
increasing order of `i`, so whatever `dp[i - s]` the inner loop consults
is already settled. That loop also exits early once `s` grows past `i`,
and the `+∞` sentinels placed in the initial table lose every comparison
until a genuine count replaces them. `dp[n]` is the result; for
`n = 6` the table ends with `dp[6] = 3` (`4 + 1 + 1`) because both `dp[2]`
and `dp[5]` cost 2. Conceptually this is the shortest-path recurrence
made exhaustive: the BFS below explores the same graph but re-derives
overlapping subproblems instead of storing them.

**Complexity:** `O(n·√n)` time, `O(n)` space.

## bfs

Model the values `0..n` as vertices and give each remainder `r` an edge to
`r - s` for every square `s` no larger than `r`. The count asked for is
then a path length — from `n` down to `0` — and breadth-first search finds
the shortest one: frontier `k` collects everything reachable from `n` by
removing exactly `k` squares, and the first frontier containing `0` fixes
the answer. For `n = 20`, frontier two already holds `0` (`20 - 16 - 4`),
so the search reports 2.

A `seen` set pins each remainder to the frontier where it first appeared —
its shallowest — so nothing is ever expanded twice; total edge inspections
are therefore `O(n·√n)`, with the per-vertex fan-out stopping as soon as
`s` exceeds the remainder. What separates this from the dp is that the
search halts at the first success instead of exhausting every state:
Lagrange's four-square theorem caps the answer at 4, so at most four
frontiers are ever materialized, and the wide middle ones contain only the
remainders actually reached.

**Complexity:** `O(n·√n)` time, `O(n)` space.

## math_lagrange

Two theorems reduce the computation to a few arithmetic tests. Lagrange
confines the answer to `{1, 2, 3, 4}`, and Legendre's three-square theorem
identifies exactly the numbers needing all four: those of the form
`4^a(8b + 7)`. Stripping factors of 4 from `n` is sound because it merely
halves every summand in a decomposition, leaving the count alone; if the
leftover is congruent to 7 modulo 8 — as happens for `n = 15` — the answer
is 4 on the spot.

Otherwise three squares suffice, and the smaller answers are decided
directly. `n` itself a square gives 1. Otherwise scan `a` while
`2a² <= n` looking for a square partner `n - a²`; finding one gives 2 (the
cap `a² + a² <= n` covers each unordered pair once). Whatever remains must
be 3, since 4 was already ruled out. Each square test is a rounded square
root, exact for every `n` in range, so the whole decision inspects
`O(√n)` candidates and stores a few scalars. The price of this speed is
explanatory power: it counts the summands without ever exhibiting them.

**Complexity:** `O(√n)` time, `O(1)` space.
