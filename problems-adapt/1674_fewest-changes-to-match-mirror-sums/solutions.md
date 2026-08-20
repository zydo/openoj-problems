# Solutions — Fewest Changes to Match Mirror Sums

## Difference Array over Candidate Totals

Only the `n/2` mirrors matter, and whatever common total `t` they agree
on can only sit between `2` and `2·limit`. Price one mirror `(a, b)`,
with `lo = min(a, b)` and `hi = max(a, b)`, against a fixed `t`: nothing
if `t` equals `a + b`; one rewrite if `t` falls inside `[lo + 1, hi +
limit]`, since replacing a single entry reaches exactly those sums; two
rewrites otherwise. Recomputing that price for every `t` and every pair
would be quadratic, so encode each pair as range updates on a difference
array indexed by `t` and sweep once.

Every pair deposits a baseline of two rewrites everywhere
(`diff[2] += 2`), then claims a one-rewrite discount across
`[lo + 1, hi + limit]` and a second discount at its own sum alone:
`diff[lo + 1] -= 1`, `diff[a + b] -= 1`, `diff[a + b + 1] += 1`,
`diff[hi + limit + 1] += 1`. A running prefix sum over the sweep from
`2` to `2·limit` then reports each candidate's total cost in constant
amortized time, and the smallest value seen is the answer. For
`nums = [4,2,6,3]` with `limit = 6`, the pair `(4, 3)` costs nothing at
`7` and the pair `(2, 6)` pays one rewrite everywhere in `[3, 12]`
except at `8` — the cheapest overlap is `7`, priced at a single change.

Why the interval is what it is: lifting the smaller entry reaches sums
up to `lo + limit`, trimming the larger reaches down to `hi + 1`, and
together they cover `[lo + 1, hi + limit]`, which always contains the
pair's present sum as its free point. The array is sized `2·limit + 2`
so the write just past the top of the range stays in bounds.

**Complexity:** `O(n + limit)` time, `O(limit)` space.
