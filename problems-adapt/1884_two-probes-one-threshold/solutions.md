# Solutions — Two Probes, One Threshold

## Incremental coverage with triangular numbers

Work backwards from the move budget instead of forwards from the floors,
and let `cover(m)` be the tallest tower that `m` moves and two probes can
always resolve. The first release of an optimal schedule belongs at floor
`cover(m-1) + m`: on a shatter, one probe and `m - 1` moves remain, which
is exactly enough to sweep the `m - 1` floors below one by one; on
survival, both probes and all `m - 1` moves remain for the floors above,
good for `cover(m-1)` more. Adding the branches:
`cover(m) = cover(m-1) + m`, and unrolling turns this into the triangular
number `m(m+1)/2`.

The answer is the least `m` whose coverage reaches `n`, and the code finds
it by plain accumulation: it adds `1, 2, 3, …` into a running total,
counting one move per addition, and halts the first time the total reaches
`n`. No formula, square root, or bisection appears — the total passes `n`
after about `sqrt(2n)` additions, so the loop is tiny even at the maximum
`n` of 10,000 (141 moves). Example 1 is the tight case in miniature: for
`n = 21` the releases 6, 11, 15, 18, 20, 21 exactly tile the tower with
six moves, because `6·7/2 = 21`.

Why that first-release height and no other: releasing lower wastes budget
— the floors above would then need more than the remaining moves can
cover — while releasing higher strands more floors below than the lone
surviving probe can sweep with what is left. The triangular schedule
balances both branches so every outcome costs exactly `m` moves.

**Complexity:** `O(sqrt(n))` time, `O(1)` space.
