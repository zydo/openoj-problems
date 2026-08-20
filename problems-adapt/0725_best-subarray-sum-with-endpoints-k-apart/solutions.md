# Solutions — Best Subarray Sum With Endpoints k Apart

## Prefix sums keyed by the cheapest matching start

Write `P` for the running prefix sum, so a subarray `[i..j]` is worth
`P[j+1] - P[i]`. The k-apart condition pins the start's value to one of
`nums[j] - k` or `nums[j] + k`, so as the sweep advances one endpoint at a
time, each endpoint's ideal partner is simply the matching start with the
smallest `P[i]` — the smallest prefix makes the difference, and hence the
subarray sum, as large as possible.

The map goes from value to that smallest prefix. Seed it with
`nums[0] -> 0`, and once index `j` has been handled as an endpoint, offer the
prefix `P[j+1]` as a candidate start value for `nums[j+1]`, lowering the
stored entry when the new prefix is smaller. Deferring the registration this
way keeps the single-element "subarray" at `j` out of contention, which
matters because `k >= 1` means it never qualifies anyway.

Each endpoint checks both target values; a hit contributes
`P[j+1] - best[value]` to the running maximum. The maximum starts as "none"
rather than zero — in the second worked example (`[-5,-2,-6,-4]`, `k = 2`)
every qualifying subarray is negative and the right answer is -10 — and 0 is
returned only when the sweep found nothing at all.

**Complexity:** `O(n)` time, `O(n)` space.
