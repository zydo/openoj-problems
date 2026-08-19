# Solutions — Square-Free Product Subsets

## Bitmask DP over Prime Factor Sets

A product is square-free exactly when no prime divides it twice, so a subset
qualifies precisely when the prime-factor sets of its elements are pairwise
disjoint. Values are capped at 30, so only the ten primes up to 29 can ever
appear, and every usable value compresses into a 10-bit mask of its primes.
A value divisible by a prime square (4, 8, 9, 12, ...) has no mask at all
and is dropped before the DP begins — it cannot sit in any qualifying
subset.

The DP runs over _distinct values_ rather than positions: `dp[mask]` counts
the subsets of values above 1 (at most one copy of each distinct value)
whose combined prime mask is exactly `mask`, seeded with `dp[0] = 1`. For a
distinct square-free value with mask `m` and multiplicity `cnt`, every prior
state `s` with `s & m == 0` can absorb one copy of that value in `cnt` ways —
any of the identical positions — moving to `s | m`. Each value updates a
copied layer so it cannot be used twice in one step, and the per-value
transition is what enforces "at most one copy" among equal values.

After the loop, `sum(dp)` counts every subset of the values above 1,
including the empty one. The copies of 1 enter through a multiplication by
`2^ones`: each copy is independently includable, contributes no prime, and
so threatens nothing. The empty subset is subtracted last, leaving exactly
the non-empty qualifying subsets modulo `10⁹ + 7`. With at most 29 distinct
values above 1 and `1024` masks, the DP costs a small constant next to
reading the input.

Worked on Example 3, `nums = [1,2,2]`: the value 2 has mask `{2}` and
multiplicity 2, so the DP reaches `dp[{}] = 1`, `dp[{2}] = 2` and `sum(dp) = 3`;
the single 1 doubles it to 6, and dropping the empty subset leaves 5.

**Complexity:** `O(n + 29 · 2¹⁰)` time, `O(2¹⁰)` space.
