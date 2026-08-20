# Solutions — Count Pairs by Combined Set Bits

## Bit-Count Bucketing over Distinct Values

The whole task turns on one identity. Fix a bit position and ask where it is
counted: if both `a` and `b` have the bit set, it survives into `a AND b`; if
exactly one has it, it survives into `a OR b`; if neither, it is counted
nowhere. Each `1`-bit therefore contributes exactly one tally to
`bits(a OR b) + bits(a AND b)`, which makes the total equal
`bits(a) + bits(b)`. Overlap between the two values changes how the bits are
split between OR and AND, never how many are counted.

So richness is a statement about two individual numbers: a pair qualifies
when the set-bit counts of its members sum to `k` or more. Deduplicate the
array — the pair relation lives on values, and a repeated occurrence adds
nothing — and bucket the distinct values by set-bit count. Values below
`2³⁰` leave at most thirty non-empty buckets, so walking every ordered pair
of buckets and adding `c1 * c2` whenever `b1 + b2 >= k` touches at most
`30²` bucket pairs. Ordered bucket pairs do the bookkeeping for free: both
`(a, b)` and `(b, a)` fall out of `c1 * c2`, and `(a, a)` is counted exactly
once for a value that pairs with itself.

Since `k` can reach `60` while two values together hold at most `60` bits,
an oversized `k` simply empties every bucket pair — no special case. For
`nums = [2,3,5,3,2]` with `k = 3`: the buckets hold one value with one set
bit (2) and two values with two set bits (3 and 5), giving
`1*2 + 2*1 + 2*2 = 8` rich pairs.

**Complexity:** `O(n + B²)` time with `B <= 30` distinct bit counts —
effectively `O(n)` — and `O(B)` extra space beyond the dedup set.
