# Solutions — Largest Subarray Sum After Purging a Value

## One-pass prefix DP with a deletion account per value

Purging a non-negative value shrinks or leaves unchanged every subarray sum,
so the candidate `x` only ever needs to be negative. A subarray of the purged
array occupies some original stretch `(j, r]` minus its `x`'s, so its sum is
`P(r) - P(j)` plus `|x|` per deleted occurrence — equivalently `P(r)` minus an
_adjusted prefix_ `P(j) - Σ|deleted occurrences after j|`. One Kadane-style
sweep can therefore serve every candidate at once: hold, per candidate, the
smallest adjusted prefix so far, and at each position try `P(r)` against the
least of them all, with the plain prefix minimum covering the choice to do
nothing.

The per-candidate bookkeeping is constant-time amortized. A hash map keyed by
`x` — key `0` reserved for the plain minimum of `P` — opens an account at the
first occurrence of `x` by anchoring on the best plain prefix and subtracting
`|x|`; at each later occurrence the account takes the lesser of itself and
the plain prefix minimum and subtracts `|x|` again, which lets the deletion
window restart at this occurrence with a fresher anchor. The candidate check
for position `r` runs _before_ the current element joins any account, so every
anchor strictly precedes `r` and the chosen subarray is never empty.

Why the sweep's maximum is the optimum, in both directions: each candidate sum
it produces is at most the sum of some genuinely realizable subarray of a
purged array (occurrences not yet subtracted only drag the candidate down),
and each realizable sum is produced at the moment its last element is
processed. Keeping the current element inside `P(r)` also stops the purged
array from being emptied, honouring the operation's guard.

For `[-2, 5, -4, 5, -4, 6]`: the plain account peaks at `8`
(`5 - 4 + 5 - 4 + 6`), while the `-4` account ends the sweep anchored at the
prefix minimum `-2` with one `|x|` credit per occurrence, i.e. `-2 - 4 - 4 =
-10`; the closing prefix is `6`, and `6 - (-10) = 16` — the surviving stretch
`5 + 5 + 6`.

Edge behaviour: a one-element array answers with its own value (purging it is
forbidden and pointless); arrays with no negatives collapse into ordinary
Kadane through the key-`0` account; and the result is seeded with `nums[0]`,
so all-negative inputs need no zero sentinel.

**Complexity:** `O(n)` time, `O(n)` space.
