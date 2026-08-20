# Solutions — Largest Truthful Group

## Bitmask Enumeration of Truthful Assignments

`n` stops at 15, so all 2ⁿ markings of truthful versus unreliable can simply
be listed. Encode a candidate marking as a bitmask, bit `i` set meaning
person `i` is truthful. The rule that prunes is one-sided: truthful people
never misspeak, so each of their claims must square with the marking, while
unreliable people's claims carry no information — they can lie or not, and
nothing they say can invalidate a marking.

For every mask, gather the truthful people and audit their rows: a `1`
(person `i` vouches that `j` is truthful) demands bit `j` set, a `0` (an
accusation of unreliability) demands it clear, and a `2` — silence — is
skipped. A mask whose every truthful speaker checks out is consistent, and
its popcount, the number of truthful people, challenges the answer. The
diagonal is guaranteed silent, so self-remarks never enter the audit.

The all-unreliable mask is always consistent — with no truthful speakers
there is nobody to contradict — so the sweep never comes back empty-handed
and covers every consistent hypothesis about the group. The audit loops over
truthful people and columns, at worst `n²` work per mask, and nothing beyond
the per-mask list is allocated.

**Complexity:** `O(2ⁿ · n²)` time, `O(n)` space.
