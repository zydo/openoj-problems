# Solutions — Count Task Selections

## 0-1 Knapsack with a Clamped Payoff Axis

Each task is offered once and either taken or left, which puts the problem in
knapsack territory; the twist is that the cells hold counts of selections
rather than the best achievable value. Two numbers summarise a partial
selection: how many workers it has committed, and how much payoff it has
accumulated. Workers are naturally bounded by `n`. Payoff is not — three tasks
worth 100 each reach 300 — but a selection that has already met the floor is
indistinguishable from one sitting exactly at the floor, since neither can ever
fail the payoff test later. Clamping the second axis at `minPayoff` is what
makes the table small.

So let `dp[w][c]` count the selections that commit at most `w` workers and are
guaranteed at least `c` payoff, with `c` clamped into `[0, minPayoff]`. Before
any task is offered, the only selection is the empty one; it commits nobody and
earns nothing, which satisfies "at least 0" and nothing more, so `dp[w][0] = 1`
for every `w` and the rest of the table is zero. That seeding is also why
`minPayoff = 0` answers with every fitting selection including the empty one,
with no special case anywhere.

Offering a task that needs `g` workers for `p` payoff means every selection
counted so far can be extended by it. Sweeping `w` from `n` down to `g` and `c`
from `minPayoff` down to 0, add `dp[w - g][max(0, c - p)]` into `dp[w][c]`. The
`max(0, ...)` is the clamp in action: to end up guaranteed `c` after collecting
`p`, the rest of the selection only had to guarantee `c - p`, and a negative
requirement is no requirement. The descending sweep is the standard guard that
each cell you read predates this task's own contributions, so no task is taken
twice. Reduce modulo `10^9 + 7` on the way, never at the end.

Take `n = 7`, `minPayoff = 5`, `crew = [3,4,2]`, `payoff = [4,3,1]`. Track the
row `dp[7]`, indexed by clamped payoff 0 through 5:

1. Seeded: `[1,0,0,0,0,0]` — the empty selection only.
2. After the task needing 3 workers for 4 payoff, the row is `[2,1,1,1,1,0]`:
   that task alone covers every floor up to 4, but `dp[7][5]` reads
   `dp[4][1] = 0` and stays empty — one task cannot reach 5.
3. After the task needing 4 for 3, `dp[7][5]` picks up `dp[3][2] = 1`, the one
   selection that fits in 3 workers and already guarantees 2. That is `{0}`
   growing into `{0,1}`.
4. After the task needing 2 for 1, `dp[7][5]` picks up `dp[5][4] = 1` — `{0}`
   again, now with room to spare — and lands on 2, the sets `{0,1}` and
   `{0,2}`.

With `T` tasks the table is filled `T` times, and both axes are capped at 100.

**Complexity:** `O(T * n * minPayoff)` time, `O(n * minPayoff)` space.
