# Solutions — Prefix Tree

## Fixed-Slot Prefix Tree

The layout is the whole idea: spell each word down the tree, one node per
character, and let words with a common beginning travel the same nodes until
they diverge. A node carries two things — an array of 26 child slots indexed
by `c - 'a'`, and a flag recording that a complete word terminates there.
Nothing else is stored anywhere; a word's presence is a path, not an entry.

All three methods are the same walk with different endings. `insert` walks
character by character, putting a fresh node into a slot the first time it
finds one empty, and raises the flag on the node it lands on. `search` walks
without creating anything and answers *node reached and flagged*;
`hasPrefix` answers *node reached*. That flag is the entire distinction —
after `insert("oakum")` the node at `o-a-k-u` exists but is unflagged, so
`search("oaku")` is false while `hasPrefix("oaku")` is true. And when
`"oak"` and `"oakum"` are both stored, the shorter word's node is flagged
*and* has a child, which is why whole words and beginnings coexist without
interfering.

The per-node fixed array is chosen over a hash map deliberately: one step is
a subtraction plus an array read, no hashing involved, and the alphabet
cannot grow beyond 26. The price is `26` pointers per node in memory. A
query that mismatches dies at the first empty slot, so it pays only for the
characters it shares with something stored.

**Complexity:** `O(L)` time per operation on a word or prefix of length `L`;
worst-case space `O(total inserted characters * 26)`.
