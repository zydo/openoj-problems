# Solutions — Longest Parallel Uptime

## Binary Search on the Answer

"Can all `n` computers run together for `t` minutes?" is a question whose
answer only ever shrinks as `t` grows — any schedule for `t` minutes is a
schedule for every shorter one. That monotonicity invites binary search over
the integers in `[0, sum(batteries) // n]`, the total charge per computer
being a hard ceiling; the upper-mid form `(lo + hi + 1) // 2` makes the loop
settle on the largest workable `t` instead of stalling beside it.

The feasibility test is where the swapping freedom gets priced in. Within a
`t`-minute window one battery powers at most one computer at any instant, so
it can deliver no more than `min(battery, t)` computer-minutes: an oversized
battery's surplus beyond `t` is stranded, and a smaller one is spent whole.
Because swaps are free, the capped contributions behave like a divisible
pool that can be poured across computers at whole-minute boundaries, so `n`
machines for `t` minutes — a demand of exactly `n·t` computer-minutes — is
possible precisely when `sum(min(b, t) for b in batteries) >= n * t`.

Each test sweeps the battery list once; with `B` batteries and total charge
`S`, the search runs `O(log(S/n))` tests, and only a few scalars accompany
the input.

**Complexity:** `O(B log(S / n))` time, `O(1)` space, where `B` is the
number of batteries and `S` the total charge.
