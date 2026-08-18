# Solutions — Force A Win

## Bitmask memoized game search

With perfect play on both sides this is a combinatorial game whose whole
state is the set of integers already taken: their sum determines how far the
total has climbed, so the shortfall still to cross is a function of that
set. `maxNumber` never exceeds 20, so the taken-set is a 20-bit mask and the
position space is at most `2^20` — small enough to explore exhaustively once
every verdict is remembered.

Two checks resolve the degenerate inputs before any recursion runs. A
`target` of `0` or less is crossed the moment the game begins, so the
opening player wins with nobody moving; and when `1 + 2 + ... + maxNumber`
falls short of `target`, the pool can never get there, and since crossing
the line is the only way to win, the opening player cannot. Skipping the
second check leaves the search to discover the same verdict the slow way,
after draining every branch.

`can_win(state, remaining)` asks whether whoever must move here can force
the win. It tries each untaken `choice`: if `choice >= remaining` the mover
crosses the line then and there; otherwise the move succeeds exactly when
the opponent, handed `state | bit` and `remaining - choice`, stands in a
losing position — `not can_win(...)`. Any successful `choice` marks the
state a win; exhausting them all marks it a loss. This is the ordinary
minimax identity for a game with a single winner, and it is complete here:
beyond the pre-checked unreachable case, the pool always empties before a
draw could matter, because whoever takes the last useful number crosses the
line.

The memo is keyed by `state` alone — `remaining` rides along only for
convenience — so each of the `2^m` states is solved once, and each solution
tries at most `m` choices with a constant-time lookup per child.

**Complexity:** `O(m · 2^m)` time and `O(2^m)` space, where
`m = maxNumber`.
