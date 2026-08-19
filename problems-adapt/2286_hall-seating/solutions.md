# Solutions — Hall Seating

## Max-and-Sum Segment Tree over Free Seats

A row only ever loses the left end of its free stretch — `spread` nibbles
at it and `block` bites a run off its front — so a single integer, the
count of free seats remaining, captures the row entirely, and a `block`
that lands in row `r` begins at seat `m - free[r]`. The hall is therefore
an integer array, and the two requests become prefix queries over
`0..lastRow`:

- `block(k, lastRow)` wants the earliest index whose value reaches `k` —
  the first row where a run of `k` free seats fits, with nothing earlier
  qualifying;
- `spread(k, lastRow)` begins by wanting the prefix total, to decide
  whether `k` free seats exist there at all.

A segment tree holding **both** the sum and the maximum of every range
answers each question in logarithmic time, with a point update whenever a
row's count moves. The earliest-index query is a root descent that tries
the left child whenever it intersects the prefix and its maximum reaches
`k`, backing off to the right child when the left dead-ends — no valid row
can slip past, because a dead end proves that every index of that subtree
inside the prefix (or the entire subtree) sits below `k`.

The fill phase of `spread` sweeps the front rows, emptying each before
stepping on. Requests that fail leave the array untouched — the total
check rejects before any write happens — so state moves only on success.
No seat ever comes back, so each row runs dry at most once over the whole
run, which makes the fill amortized logarithmic per call. Sums need 64
bits (`n * m` climbs to `5 * 10^13`).

Walked on Example 1's hall of `3 x 4`: after `block(3, 0)` takes seats
`[0, 2]` of row 0 the free counts read `[1, 4, 4]`. `block(2, 1)` finds no
index `<= 0` at or above 2, so row 1 — count 4 — answers `[1, 0]` and the
counts read `[1, 2, 4]`. `spread(6, 2)` totals the full prefix, `7 >= 6`,
drains row 0's last seat and row 1's two, then takes three of row 2's
four, leaving `[0, 0, 1]`.

The Python and Java canonical solutions build exactly this structure; the
time limit is generous because the Python tree recurses through
`5 * 10^4` mixed calls.

**Complexity:** `O(log n)` per `block`, amortized `O(log n)` per `spread`
(row emptying in the fill phase amortizes against `n`), `O(n)` space.
