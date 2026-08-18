# Solutions — Packed Word Store

## Discard the covered words

Reading out of the store may start at any position, not only just after a
`'#'`. That single freedom decides the whole problem: if one stored word
finishes with another word, the shorter one is already readable — begin at the
right offset and the same `'#'` closes it. So a word only needs a slot of its
own when nothing else finishes with it, and each such word costs its own
characters plus the one `'#'` behind it.

The implementation builds a set out of `words` and then, for every word `w`,
removes each of `w[1:]`, `w[2:]`, … from that set. The cut starts at offset 1
on purpose: it deletes the tails that lie strictly inside `w` and never `w`
itself, which is what lets duplicates behave correctly. Two copies of `"fox"`
collapse into one set element instead of erasing one another, and that element
survives, so the pair shares one slot.

Working through a set also makes the result independent of the input order —
`["planet","net"]` and `["net","planet"]` both end with `{"planet"}` — because
each deletion names its victim outright rather than comparing neighbours. Once
the pass is over, the survivors are exactly the words that no other word
finishes with, and adding `len + 1` across them is the answer: 7 + 4 = 11 for
`["planet","net","ban","an"]`.

A word of length `L` yields `L - 1` tails, each costing `O(L)` to slice and
hash, and `L` is capped at 7 here, so the inner work is a small constant per
word in practice. A trie over the reversed words reaches the same answer by
counting the depths of its leaves, and is the shape to reach for when the
length cap is lifted.

**Complexity:** `O(N · L^2)` time, `O(N · L)` space, over `N` words of length
at most `L`.
