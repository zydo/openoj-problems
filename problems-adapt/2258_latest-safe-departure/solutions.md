# Solutions — Latest Safe Departure

## Fire BFS plus binary search on waiting time

One multi-source BFS pins down everything about the flames: seed a queue with
every burning cell and fan out through non-rock neighbours to obtain
`fire[i][j]`, the earliest minute at which cell `(i, j)` catches (never, when
rock walls contain the blaze entirely — stored as infinity). It is computed
once, up front, because the blaze's progress never depends on your route.

Whether a particular wait `t` can be survived is a second BFS that carries the
clock along with the position. The turn order — you step, then flames leap —
produces two different admission tests. A ordinary cell may be entered at time
`t + 1` only when fire gets there strictly later (`t + 1 < fire`), since
flames washing over you right after your step are fatal; the exit cell is
kinder and accepts `t + 1 <= fire`, because arriving in the same minute as the
fire still counts as getting out. The start cell demands outright that
`wait < fire[0][0]`. Survivability only shrinks as the wait grows — a longer
wait merely trims your head start — and that monotonicity is what licenses a
search.

The two sentinels are settled before any searching: if even `can_reach(0)`
fails, the answer is `-1`; if `can_reach(10^9)` succeeds, no wait threatens
you and `10^9` itself is the answer. In between, an upper-mid binary search
over `[0, 10^9]` — `mid = (lo + hi + 1) // 2`, lifting the lower bound on
success so the interval cannot stall — finds the largest survivable wait. In
Example 1 the blaze needs 3 minutes to reach `(0, 0)` and never touches the
right-hand corridor, so the boundary lands at 2.

Each `can_reach` sweep is a single BFS, so a solve costs about thirty grid
traversals beyond the fire BFS.

**Complexity:** `O(mn log(10^9))` time, `O(mn)` space.
