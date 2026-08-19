# Solutions — Nearest Subarray OR to a Target

## Suffix OR set of bounded size

Hold the right end fixed and list the ORs of all stretches ending there: the
set is `{v}` together with `{prev | v}` over the previous end's set, since
growing a stretch by one entry to the left ORs that entry in. The load-bearing
fact is that OR never clears a bit, so as the left end retreats the values only
grow and nest — each distinct value must switch on some bit the shorter
stretches lacked, and 30 bits bound the values, which caps the set at roughly
31 entries regardless of array length.

The code carries that frontier in `current`, rebuilding it each step as the
singleton `{value}` plus each previous entry OR-ed with `value`, and tests
every entry against the target to update the running best `|x - k|`. The best
is seeded from the first element alone so single-entry stretches are counted,
and duplicate OR values simply collide in the set.

The initial seed `{0}` exists only to feed the first build (0 | v = v), which
guarantees every stretch's OR is inspected at least once, making the minimum
exact. Example 1 shows the payoff: by the third step the frontier is
{4, 12, 14}, and 12 touches `k` dead on. With values below 2³⁰ each step costs
at most 31 set operations, so enumerating every stretch collapses to one
linear sweep behind a tiny frontier.

**Complexity:** `O(n log U)` time (U = 2³⁰, the value bound), `O(log U)`
space.
