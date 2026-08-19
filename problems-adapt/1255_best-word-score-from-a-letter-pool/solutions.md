# Solutions — Best Word Score From a Letter Pool

## Backtracking over word sets

The pool is shared, but the decision space is tiny: with at most fourteen
words there are fewer than seventeen thousand sets to examine, and a set's
value is fixed once chosen — it is valid exactly when the pooled letter
requirements of its words fit inside the pool. Exhaustive search over sets
is therefore the whole algorithm; the craft is making each step cheap.

All string handling is hoisted out of the recursion. The pool becomes a
26-entry count; every word becomes its own count vector alongside its point
total, precomputed once. Inside the search, admitting a word is a
componentwise `≥` test against the remaining pool, and taking it subtracts
the vector and adds the value — twenty-six numbers of state, no characters.

The walk visits words by index with two branches: skipping is always
explored, and taking is explored only when the pool still covers the word,
so an impossible word prunes its own subtree. Because any node of the walk
is already a complete valid selection — everything after it may be skipped —
the running total competes with the best at every node rather than waiting
for the leaves. Example 2 shows why both branches matter: refusing "ark"
frees the k for "kit", and the two small words outscore the big one;
Example 3 shows the pool binding — "egg" consumes both g's, so "gg" cannot
follow, and the search finds 16 on the "egg"-only branch.

Zero-point words enter the enumeration harmlessly (they can only spend
letters), and if nothing fits, the opening selection — the empty set —
leaves the answer at 0.

**Complexity:** `O(26 · 2^n)` time, `O(26 · n)` space, for `n` words.
