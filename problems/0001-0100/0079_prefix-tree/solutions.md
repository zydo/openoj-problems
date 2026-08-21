# Solutions — Prefix Tree

Two ways to answer the three questions without ever scanning the stored
words. The tree spells each word down a path of characters and lets shared
beginnings share nodes; the hash variant gives up that sharing and instead
precomputes, at insert time, every beginning of every word as a flat set
member. Both make each query cost depend only on the word at hand — the
tree by walking one node per character, the hash set by hashing the
argument once — and both draw the whole-word/prefix distinction the same
way: one membership test against words, another against beginnings.

## Trie

The layout is the whole idea: spell each word down the tree, one node per
character, and let words with a common beginning travel the same nodes until
they diverge. A node carries two things — an array of 26 child slots indexed
by `c - 'a'`, and a flag recording that a complete word terminates there.
Nothing else is stored anywhere; a word's presence is a path, not an entry.

All three methods are the same walk with different endings. `insert` walks
character by character, putting a fresh node into a slot the first time it
finds one empty, and raises the flag on the node it lands on. `search` walks
without creating anything and answers _node reached and flagged_;
`hasPrefix` answers _node reached_. That flag is the entire distinction —
after `insert("oakum")` the node at `o-a-k-u` exists but is unflagged, so
`search("oaku")` is false while `hasPrefix("oaku")` is true. And when
`"oak"` and `"oakum"` are both stored, the shorter word's node is flagged
_and_ has a child, which is why whole words and beginnings coexist without
interfering.

The per-node fixed array is chosen over a hash map deliberately: one step is
a subtraction plus an array read, no hashing involved, and the alphabet
cannot grow beyond 26. The price is `26` pointers per node in memory. A
query that mismatches dies at the first empty slot, so it pays only for the
characters it shares with something stored.

**Complexity:** `O(L)` time per operation on a word or prefix of length `L`;
worst-case space `O(total inserted characters * 26)`.

## Hash Prefixes

The statement's follow-up asks which operation forces a plain word set to
scan everything stored: `hasPrefix`, because "does any word begin with
this?" is a question about all beginnings at once. This variant refuses to
scan by materializing the answer in advance — two hash sets, one holding
whole words, the other holding every beginning of every word.

`insert("train")` puts `train` in the word set and `t`, `tr`, `tra`,
`trai`, `train` in the prefix set — the word itself is included, since a
word begins with itself. After that, every query is a single membership
test: `search` hashes its argument against the words, `hasPrefix` against
the beginnings, and neither ever looks at the rest of the data. The
whole-word distinction the trie keeps as a node flag becomes, here, the
choice of which set to ask.

The bill moves to insert time and space. A word of length `L` contributes
`L` prefixes, so storing it costs `L` hash inserts and up to `L` new set
entries — no sharing, so words with a common beginning pay for it twice.
That is the trade the trie exists to refuse: the hash sets spend one entry
per inserted character to keep every lookup at a single hash of its own
argument, while the trie spends `26` pointers per node to buy the sharing
and the same query cost.

**Complexity:** `O(L)` expected time per query on a length-`L` argument;
`insert` costs `O(L²)` character work and adds up to `L` entries; space
`O(total inserted characters)` across the two sets.
