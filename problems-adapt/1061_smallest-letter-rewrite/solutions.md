# Solutions — Smallest Letter Rewrite

## Union-Find Over the 26 Letters

Length is a distraction here. However long the inputs get, the relation they
describe lives on an alphabet of 26 symbols, so the whole structure fits in a
26-slot array. Each aligned pair is an edge; the groups the statement talks
about are the connected pieces.

A disjoint-set forest maintains those pieces under repeated merging. The trick
that removes a second pass is in the merge rule: instead of the usual balance by
rank or size, always hang the group whose representative is later in the
alphabet beneath the one whose representative is earlier. That invariant —
"a piece is represented by its earliest letter" — holds trivially for a
singleton and is preserved by every merge, so once the edges are consumed the
representative of any letter is already the letter it should be rewritten to.
Path halving keeps the trees shallow while lookups walk them.

With `s1 = "dcba"` and `s2 = "cbaz"` the four edges arrive as d–c, c–b, b–a and
a–z. The first drags d under c, the second drags c (and d with it) under b, the
third puts all three under a, and the last attaches z to a as well. Rewriting
"zebra" then rewrites z, b and a to a and leaves e and r alone, giving "aeara".

The final pass indexes the forest once per character of `text` and emits the
representative.

**Complexity:** `O((n + m) α(26))` time — effectively linear in the input
length — and `O(1)` space beyond the answer, since the forest is a fixed 26
slots.
