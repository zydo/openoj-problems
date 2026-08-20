# Solutions — Longest Path Spelling a Palindrome

## Bitmask DP growing the spelling from the middle

Instead of enumerating walks and testing them, build the palindrome outward
from its center. The memoized state is (mask, left, right): the set of used
nodes and the walk's two current ends, with the invariant that the used nodes
spell a palindrome when read from `left` to `right`. A growth step attaches a
new node `u` next to `left` and a new node `v` next to `right`, requiring
`u != v`, both unused, and `label[u] == label[v]` — symmetric outer letters
keep the spelling palindromic. The state's value is the best length
reachable, floored by the size of the standing walk, which already spells a
valid palindrome.

Every palindrome has a center. Odd spellings seed the recursion from a lone
node (`mask = 1 << i`, both ends `i`); even spellings seed from an adjacent
pair whose letters match. Taking the maximum over all `2n` seeds covers both
parities with no double counting, since a growth step always adds a genuine
pair.

Worked example: `edges = [[0,2],[0,3],[3,1]]`, `label = "xyyx"` (nodes 2 and
1 hold `x`, nodes 0 and 3 hold `y`). Seeding from the adjacent pair (2, 0)
has unequal letters; instead seed the odd center at node 0 (`y`): growing
left needs an `x`-neighbour of 0 — node 2 — and growing right needs one
adjacent to 0 with a matching letter, which does not exist. Seeding instead
from node 3 (`y`) grows to 0 on the left and... again stuck. The winning
seeds are the even pair (0, 3) with letters `y, y`: growth then attaches node
2 (`x`) beside 0 and node 1 (`x`) beside 3, reaching the full spelling
"xyyx" of length 4.

With `n <= 14` there are at most `2^14 · 14²` states, each scanning only the
neighbour lists of its two ends. The graph is promised connected (at least
`n - 1` edges), but the search relies on nothing beyond adjacency.

**Complexity:** `O(2^n · n² · Δ²)` time (Δ = maximum degree),
`O(2^n · n²)` space.
