# Solutions — Best Suffix Matches

## Trie of reversed words with best-index annotations

Spell every string backwards and longest common suffix becomes longest
common prefix — the operation tries answer natively. Insert each entry
into a trie reading it right to left, and on every node the path touches,
root included, keep the best entry index under the tie-break order:
shorter word first, then smaller index. The `better` predicate applies
that order while each entry's letters descend, so a node's stored index
is the winner among exactly those entries sharing the reversed prefix
ending at that node.

Answering a query spells it backwards into the trie as deep as the
structure permits, and the deepest node reached corresponds to the
longest suffix it shares with any entry. Every entry with that suffix
passed through the same node, so the node's stored winner is the reply.
A query whose first backwards character misses never leaves the root, and
the root — which every entry touched — carries the globally shortest,
then earliest, entry, which is exactly the right answer for the empty
suffix.

On Example 1, "tone" spelled backwards reaches depth 4, where only
"stone" and "tone" ever arrived; "tone" is shorter, so index 1 sits
stored there. "phone" can only get as deep as the node for "eno", where
all four entries met and "one" (length 3) won; "zzz" gets depth 0 and the
root's winner, also index 3.

Construction costs one insertion per entry and each query costs at most
its own length. Writing `C` and `Q` for the total character counts of
`entries` and `queries` (each capped at `5 * 10^5`), both phases are
linear in the input size, and dictionary-backed nodes pay only for
letters actually present.

**Complexity:** `O(C + Q)` time, `O(C)` space.
