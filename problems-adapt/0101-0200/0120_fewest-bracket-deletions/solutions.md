# Solutions — Fewest Bracket Deletions

## Level-by-Level BFS over Deletions

Read the input as the root of a search tree: the children of a string are all
the strings reached by deleting one bracket, letters being untouchable. A
level-order walk meets strings grouped by how many characters they have lost,
so the shallowest level holding anything balanced holds *exactly* the answers —
the depth does the minimality proof, and no deletion count has to be computed
in advance.

Each level lives in a set, which is what keeps the branching in check:
different deletions often produce the same shorter string (deleting either of
two neighbouring openings, say), and collapsing them means each level carries
only distinct strings. Membership is tested by a linear balance scan — count
up on `(`, down on `)`, reject the moment the count goes negative, and require
zero at the end. If a level holds any balanced member, the balanced ones are
sorted and returned; if not, every member is expanded by one more deletion and
the walk descends.

The walk must terminate, and does: deleting every bracket leaves a string of
letters, which is balanced by default, so some level always qualifies. Letters
never need removing because imbalance lives entirely among the brackets — on
`")a("` the one-deletion strings `a(` and `)a` both still fail, and the second
level reaches `a`. An already balanced input is answered at level zero,
untouched.

With the string at most 25 characters and at most 20 brackets, the distinct
sets stay small in practice — the theoretical worst case is exponential in the
bracket count, since every subset of deletions may need visiting before the
shallowest balanced level is confirmed.

**Complexity:** `O(n · 2ⁿ)` time, `O(n · 2ⁿ)` space.
