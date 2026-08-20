# Solutions — Count Numbers by Digit Sum

## Digit DP Below a Bound

Count up to a bound and subtract: with `f(s)` the number of integers in
`[1, s]` whose digit sum lands in the window, the answer is
`f(num2) - f(num1 - 1)`. Lowering a decimal string by one borrows across
trailing zeros and drops leading zeros; since `num1 >= 1` the result is
never empty. Both evaluations run the same routine, and the difference is
reduced modulo `10⁹ + 7`.

`f(s)` runs backwards over the `m` digits of `s`. The state pairs a flag —
*hugging*, meaning the digits chosen so far match the bound's prefix
exactly, versus *free* — with the accumulated digit sum, which is capped at
`max_sum`: sums only grow, so a branch already past the cap can never climb
back into the window, and the digit loop breaks as soon as `sm + d` exceeds
it. After the final position a state scores 1 exactly when the accumulated
sum has reached `min_sum`. Each transition tries digits `0..limit` — the
bound's own digit while hugging, 9 once free — and stays hugging only when
the chosen digit equals the limit. The function's value is the hugging
state with an empty accumulation.

Rolling two rows per position keeps memory at `O(max_sum)` rather than
`O(m · max_sum)`. With `m <= 23` and `max_sum <= 400`, each call performs
roughly `2 · 401 · 10` transitions per position — a few hundred thousand
operations overall.

**Complexity:** `O(m · max_sum)` time, `O(max_sum)` space.
