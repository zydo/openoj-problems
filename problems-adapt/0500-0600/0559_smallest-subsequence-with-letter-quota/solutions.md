# Solutions — Smallest Subsequence With a Letter Quota

## Monotonic stack with suffix letter counts

The lexicographically smallest fixed-length subsequence comes from the
familiar monotonic-stack greedy: sweep `s` left to right, and before
pushing the incoming character, evict stacked characters that are strictly
larger while enough material remains — `len(stack) - 1 + (n - i) >= k` —
to still assemble `k` characters. Two additional guards keep the quota
intact.

A precomputed array `suffix[i]`, counting occurrences of `letter` in
`s[i:]`, turns the quota check into constant time. Before evicting a
stacked character, verify that the letters that would remain in the stack
(adjusted for the incoming character, which joins immediately after) plus
the supply still ahead still reach `quota`; if not, the eviction is
forbidden and the sweep moves on. This is what keeps the greedy from
trading away a letter it will later be forced to re-import at a worse
position.

The stack that survives the sweep is the smallest subsequence of length at
most `k` holding as many letters as greedily possible, so the final step
trims the surplus from the right: walking the stack backwards, drop
non-letter characters first, and drop a letter only when the letters that
remain still satisfy `quota`. Discarding from the right removes the
largest, least useful characters first — any lexicographic gain would have
been captured during the stack phase, so the trim cannot be improved.

For `s = "ebacdece"` with `k = 4`, `letter = "e"`, `quota = 2`: the sweep
sheds the opening `e` and then the `b` in favour of the smaller `a` — safe
because the two `e` characters still ahead keep the quota reachable — and
stacks `a, c, d`, after which `e, c, e` pile on top. The stack
`acdece` holds six characters, and the trim pass drops the surplus `c` and
then the `d` from the right while sparing both `e` characters, leaving
`acee`. Equal characters are never evicted (the eviction test is strict),
so a run of identical letters like `"aaa"` survives intact when it is the
answer.

Each index is pushed and evicted at most once, and the trim is one reverse
walk.

**Complexity:** `O(n)` time, `O(n)` space.
