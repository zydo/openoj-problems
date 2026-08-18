# Solutions — Fewest Debt Settlements

## Subset DP Over Zero-Summing Groups

Start by collapsing the ledger. Each entry moves money out of one account and
into another, so a single sweep produces one net figure per person: negative
for someone who is down, positive for someone who is ahead. Two different
ledgers with identical net figures are the same settlement problem, and anyone
sitting at zero can be discarded outright.

What remains is a multiset of `n` nonzero figures whose total is zero, and the
question becomes how few payments clear it. Think of the payments as edges over
the people they touch. Inside one connected piece covering `s` people, at least
`s - 1` payments are needed, and `s - 1` always suffice as long as the piece's
figures cancel: line the people up, let each hand their running total to the
next, and the last one comes out square. So a split of the `n` people into `g`
pieces that each cancel costs `n - g` payments, and the job is to make `g` as
large as possible.

Since person identifiers stay under twelve, `n` is small enough to address every
group by a bitmask. One pass computes the total of each subset by peeling off
its lowest set bit and reusing the answer for the rest, and records which
subsets total zero — those are the groups that may be used. A second pass over
masks in increasing order asks, for each mask, how many cancelling groups it
splits into at best: enumerate the submasks of the mask, and whenever a submask
cancels and the leftover part is itself splittable, one more group is available.
A large negative sentinel marks masks that cannot be split exactly, which keeps
partial covers from being counted as solutions. Reading the entry for the full
mask gives the best `g`, and the answer is `n` minus it.

The two edge cases fall out rather than needing code. If the ledger already
leaves everyone square, no person survives the filter and zero payments are
reported. A lone nonzero figure is impossible, because the figures always sum
to zero overall.

Walking the submasks of every mask touches `3^n` pairs in total, which at these
bounds is a few hundred thousand at worst.

**Complexity:** `O(3^n)` time, `O(2^n)` space, with `n` the count of people who
are not already square.
