# Solutions — Factorials With K Trailing Zeros

## Binary search on a monotone tally

Ten factors as two times five, and a factorial holds far more twos than fives,
so the zeros at the tail of `n!` are governed entirely by how many fives divide
it. Legendre's tiered count gives that directly:

```text
z(n) = floor(n/5) + floor(n/25) + floor(n/125) + ...
```

Each multiple of five inside `1..n` supplies a factor, each multiple of
twenty-five supplies a second one on top, and so on. The series has only
`log_5 n` nonzero terms, so evaluating `z` is a short loop over the powers of
five.

Because `z` is nondecreasing, the values of `n` mapping to any single tally form
one unbroken run, and bisection applies. Search the range `0 .. 5*(k+1)+10` for
the smallest `n` with `z(n) >= k`; the right end is safe because `z(5*(k+1))`
already exceeds `k`. Once that `n` is in hand, one comparison decides the
outcome: if `z(n)` came out equal to `k` the tally is reachable, and if it
overshot then `k` was passed over.

The size of a reachable run is always five. Moving from `5m + 4` to `5m + 5`
raises the tally, but the four steps in between change nothing, so `n` takes
exactly five values per achieved tally. That is why the only possible answers
are five and zero. A tally gets skipped precisely where the count leaps by more
than one, which happens at multiples of twenty-five: crossing `25` takes the
count from `4` to `6`, so `k = 5` has no preimage at all, and crossing `50`
takes it from `10` to `12`, killing `k = 11`. At the low end the five values
`0, 1, 2, 3, 4` all give a factorial with no trailing zero, so `k = 0` behaves
like any other reachable tally.

**Complexity:** `O(log^2 k)` time — about `log k` bisection steps, each running
a `log k`-term evaluation of `z` — and `O(1)` space.
