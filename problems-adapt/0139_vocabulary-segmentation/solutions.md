# Solutions — Vocabulary Segmentation

One question, two ways to ask it. Either walk the cut points in order and
record which of them are legal, or treat them as nodes and search outward from
the start. Both hang on the same fact: a cut point is legal when some earlier
legal cut point is separated from it by a single entry.

## dp

Write `reachable[i]` for "the prefix `s[0..i)` can be cut up", and seed
`reachable[0] = True`, since a prefix of length zero needs no pieces at all.
Every legal cutting of `s[0..i)` finishes with one final piece `s[j..i)`, whose
left end `j` must itself be legal. So `reachable[i]` is settled by scanning the
candidate values of `j` below `i` and asking two things of each: is `j` legal,
and is the slice between them an entry? The value at `i = n` is the answer.

Entries go into a hash set first, which reduces the second question to the cost
of materialising the slice. The inner scan stops the moment a split works —
only the existence of a cutting is asked for, never how many or which — and no
entry is ever used up, so `"dogdogcat"` can spend `"dog"` twice without any
bookkeeping.

The work is `O(n²)` pairs `(j, i)`, each slicing and hashing up to `n`
characters, so cubic in the worst case. With `n` capped at 300 that is a few
million character operations, and in practice the early exit and the 20
character ceiling on entries cut it far below the bound. Memory is the boolean
array plus the set: `O(n)` and `O(W)` for `W` entries.

**Complexity:** `O(n^3)` time, `O(n + W)` space.

## bfs

The same predicate, found by searching rather than sweeping. Regard each cut
point `0..n` as a node, reachable exactly when the prefix ending there can be
cut up, and let an entry matching `s[i..i+L)` be an edge from `i` to `i + L`.
Then the whole problem is: starting at node `0`, can node `n` be reached? A
queue answers that. Pop a node, try the entries that fit from there, and the
first edge that lands precisely on `n` ends the search with `true`.

Two things keep the frontier small. A `visited` flag is set when a node is
pushed, not when it is popped, so no node is ever expanded twice — the same cut
point is typically reachable through several different final pieces, and
without the flag those duplicates multiply through the queue. And the candidate
piece lengths run only up to the longest entry (`maxLen`, at most 20 here)
instead of all the way to the end of the string, which is where this variant
undercuts the sweep: `O(n · min(maxLen, n))` lookups rather than `O(n²)`.

When the string cannot be cut up, the queue simply empties — every reachable
node expanded, node `n` never touched — and the answer is `false`. Note what
the two variants each leave behind: the sweep knows the verdict for every
prefix once it finishes, while the search abandons the rest of the graph as
soon as it wins.

**Complexity:** `O(n · min(maxLen, n) · maxLen)` time for the substring hashes in the worst case (`O(n · W)` set lookups), `O(n + W)` space.
