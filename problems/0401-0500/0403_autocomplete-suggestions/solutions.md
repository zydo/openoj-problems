# Solutions — Autocomplete Suggestions

Both variants do their dictionary-order thinking once, up front, so that no
keystroke ever rescans the catalog. The sort lays that order out as a flat
list and pays a logarithmic search per prefix to find where its block
begins; the trie bakes the order into the shape of a tree and caches the
best three words at every node, so a keystroke is a single pointer move.

## Sort and Binary Search

Sorting the catalog in dictionary order is what makes each keystroke cheap:
all words beginning with a given prefix end up adjacent, so the suggestions
for that prefix are just the first three entries of one contiguous block. The
whole task reduces to locating the block's left end.

So: sort once, then walk the query one character at a time while holding the
prefix typed so far. For each prefix, find the leftmost position where it
could be inserted without breaking the order (`bisect_left` in Python, a
hand-rolled lower-bound loop in Java, `sort.SearchStrings` in Go). From that
position, take up to three consecutive words and stop as soon as one fails to
start with the prefix. Stopping there is what keeps a keystroke cheap: a
prefix matched by a single word costs one comparison, and so does a prefix
matched by the entire catalog.

Because each prefix is the previous one plus a character, growing a single
string across the loop reuses all earlier work, and every keystroke yields
exactly one suggestion list — shorter, never longer, than the last.

Let `n` be the number of words, `m` the length of the query, and `L` the
longest word length. Sorting costs `O(n · L · log n)`, since a comparison may
read up to `L` characters. Each of the `m` prefixes then pays `O(L · log n)`
for the search plus `O(L)` for the few prefix checks.

**Complexity:** `O((n + m) · L · log n)` time, `O(n · L + m)` space, with `n`
words, query length `m`, and maximum word length `L`.

## Trie with Per-Node Top-Three

The sort keeps dictionary order as a flat list and re-finds the prefix's
block at every keystroke. The trie makes the same order physical instead:
one node per character position, words sharing nodes until they diverge,
children held in letter slots so a path down the tree reads words in
dictionary order by construction. After one bottom-up pass every node also
carries the three best words passing through it.

Building is plain trie insertion: spell each catalog word down from the
root, creating nodes lazily, and record on the landing node that this word
ends there. The best-three lists are then filled in deepest-first. A
node's own word comes first — it is a prefix of every other word through
the node, so it beats them all — and the rest is the children's lists read
in slot order, which is dictionary order of the next character. Every
existing child has at least one word through it, so no consulted list is
ever empty and gathering stops by the third child; the fixed 26-slot child
array is the constant factor behind both that scan and the space bill.

The query loop never searches. A cursor starts at the root and follows the
typed characters edge by edge; each step emits the node's cached list, and
once an edge is missing the cursor stays dead — a longer prefix cannot
start matching again. Every keystroke costs one array read no matter how
many words share the prefix, which is the whole trade: the comparison work
is spent once, over the tree, instead of logarithmically per keystroke.

**Complexity:** `O(S + m)` time, `O(26 · S + m)` space, with `S` the total
length of the catalog's words and `m` the query length.
