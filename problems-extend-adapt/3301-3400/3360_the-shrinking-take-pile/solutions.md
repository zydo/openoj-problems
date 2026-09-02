# Solutions — The Shrinking-Take Pile

## Direct simulation

The rules leave no choices: on every turn exactly one take is possible in
principle — the opening 10, then one fewer each turn — and the only open
question is whether the pile is still large enough to pay for it. So the
whole game is a single walk: subtract the current take size while it
fits, shrink the size by one, and hand the turn over. The walk stops at
the first turn whose take exceeds the remaining pile; that player cannot
move and loses, so the first taker wins exactly when the stuck player is
the second one.

The take sizes shrink toward zero, and with `n <= 50` the walk ends
after at most ten turns in practice (10 + 9 + … + 1 already sums to 55),
so nothing else is needed — no search over alternatives exists to branch
on. The turn flag does all the bookkeeping: when the loop exits, it says
who is on move, and the answer is its negation.

**Complexity:** `O(√n)` time (the walk lasts until 10 + 9 + … exceeds
`n`), `O(1)` space.
