# Solutions — Infer Letter Order

## Smallest-First Topological Sort

Each adjacent pair of words contributes at most one fact. Walk the two
words in lockstep: the moment they disagree, the letter in the left word
must precede the letter in the right word, and the rest of the pair
carries no information — the comparison was settled at that position, so
the scan stops. Take `["won", "woo", "ox", "oxx", "xu"]`: `won` against
`woo` yields `n < o`, `woo` against `ox` yields `w < o`, `ox` against
`oxx` yields nothing (the shorter word is a prefix and correctly comes
first), and `oxx` against `xu` yields `o < x`.

Two bookkeeping rules complete the model. Letters that never participate
in a disagreement still belong to the answer, so every letter seen
anywhere is registered as a node. And a pair where the right word is a
proper prefix of the left — the left word placed before its own prefix —
is fatal under every possible ordering, so the method returns the empty
string immediately rather than waiting for a cycle detector that would
never see an edge from this pair.

The letters and their precedence edges form a directed graph, and any
topological order of it is an order that sorts the list. The
"lexicographically smallest" requirement rules out an ordinary queue:
among all valid orders we want the alphabetically smallest string, which
is exactly what you get by always emitting the smallest currently
available letter. So the ready set — letters whose in-degree has dropped
to zero — lives in a min-heap, and each step pops the smallest, appends
it, and decrements its successors. In the worked example the ready set
starts as `{n, u, w}`; the heap drains it as `n, u, w`, which frees `o`,
which frees `x`, giving `nuwox`. Duplicate edges between the same pair of
letters are absorbed by an adjacency set so that in-degree is incremented
once per distinct relation.

A cycle anywhere leaves letters that can never reach in-degree zero, so
the heap empties before the whole alphabet is emitted; the length check
catches this and returns `""`. Let C be the total number of characters
across the list: building the graph costs `O(C)`, and because at most 26
letters and 26² edges can exist, the heap phase is bounded by a constant.
The graph itself likewise occupies constant space.

**Complexity:** `O(C)` time, `O(1)` space.
