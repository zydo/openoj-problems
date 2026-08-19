# Solutions — Count Strings From Run Appends

## Length Recurrence with Two Run Sizes

Distinct grown strings are what get counted, not distinct sequences of moves,
but enumeration over contents is hopeless — so count by length instead. A
growable string of length `L` received its ending through one final move:
either a tail of `zero` zeros or a tail of `one` ones. Stripping that tail
leaves a shorter growable string, giving `dp[L] = dp[L - zero] + dp[L - one]`
whenever the indices stay non-negative, seeded by `dp[0] = 1` — one way to
have grown nothing.

No string is double-counted: its last character reveals which move type
produced the ending, so the two branches cover disjoint cases, and unwinding
to the empty string recovers the full move sequence uniquely. In effect the
table is the staircase recurrence with two stride sizes `zero` and `one`, and
it counts distinct strings precisely because each move pins down the letters
it appends.

The loop fills lengths `1` through `high`, reducing modulo `10⁹ + 7` at each
write to keep entries bounded. Since length alone decides acceptance, the
reply is `dp[low] + ... + dp[high]`, reduced once more at the end. The bounds
promise `zero, one <= low`, so both transitions are live from early on; the
index guards would deal gracefully with tighter settings anyway — lengths
below the smaller run size simply stay `0`, which is accurate, since no
string that short can be grown.

For `zero = 1` the recurrence degenerates pleasantly: every binary string of
each reachable length is growable, and the totals become powers of two, as in
the first example.

**Complexity:** `O(high)` time, `O(high)` space.
