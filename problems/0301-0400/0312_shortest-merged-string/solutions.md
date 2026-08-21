# Solutions — Shortest Merged String

## Bitmask DP over Word Orders

Because no word hides inside another, every candidate answer is just the `k`
words written in some order with neighbouring pairs pushed together as far as
they will go. The push distance for an ordered pair is fixed: it is the largest
`t` such that the last `t` characters of the earlier word equal the first `t`
characters of the later one. Testing every `t` from 1 up to the shorter length
and remembering the largest match fills a `k × k` table in `O(k² L²)` steps for
words of length at most `L`.

Once that table exists the problem is purely combinatorial — choose the order
that maximises the sum of the push distances used. With `k ≤ 12` the orders are
too many to list but the states are not: `dp[mask][j]` describes the best way to
place exactly the words of `mask`, finishing on word `j`. Each state stores the
text assembled so far alongside its length and the sequence of word indices that
produced it; extending it by an unplaced word `nxt` appends only the part of
`words[nxt]` that the push distance does not already cover.

Ties need a rule or the answer would depend on iteration order, so a candidate
replaces the incumbent when it is shorter, or the same length with a smaller
index sequence. The same rule picks the winner among the full-mask states at the
end. Carrying the whole text inside each state costs memory but makes the final
reconstruction free: the winning state already holds the string to return.

**Complexity:** `O(2^k · k³ · L)` time, `O(2^k · k² · L)` space.
