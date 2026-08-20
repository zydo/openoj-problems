# Solutions — Coprime Roll Sequences

## DP over the last two rolls

Two rules police the sequence, and they look backwards different
distances. Coprimality is a condition on one step: appending `c` after
`b` is legal only when `gcd(b, c) = 1`. The spacing rule is a condition
on two steps: with the last two rolls `(a, b)`, appending `c = a`
repeats a face at distance 2, which `abs(i - j) > 2` forbids — and
`c = b` repeats at distance 1. Nothing older has a say: a face three
positions back can never collide with the new roll, so the state
`(previous-previous, previous)` is exactly rich enough and the last
three rolls would add nothing.

Let `dp[a][b]` count valid sequences of the current length that end
`..., a, b`. Length 2 seeds it: `dp[a][b] = 1` for each ordered coprime
pair with `a != b`, while `n = 1` short-circuits to 6. One step extends
every live state by each face `c` satisfying `c != a`, `c != b`,
`gcd(c, b) = 1`, moving `dp[a][b]` into `ndp[b][c]`. After rolling the
table forward to length `n`, the sum of all entries is the answer,
taken modulo `10^9 + 7`. Skipping zero-count states matters more than
it looks: coprime pairs over the faces 1–6 are sparse, so most of the
36 cells are dead and the inner loop rarely runs.

One subtlety hides in the face 1: coprimality alone would accept
`(1, 1)` (gcd 1) and would not object to repeating a 1 at distance 2 —
which is why the explicit `c != b` and `c != a` checks exist alongside
the gcd test, rather than trusting coprimality to imply them.

**Complexity:** `O(n)` time — a constant 6 × 6 × 6 candidate triples
per step — and `O(1)` space (two 7 × 7 tables).
