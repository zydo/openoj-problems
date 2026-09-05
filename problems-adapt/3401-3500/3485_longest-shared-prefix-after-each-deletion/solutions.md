# Solutions — Longest Shared Prefix After Each Deletion

## Trie With the Best Two Nodes Per Depth

Build a trie over all strings and store at each node `cnt`, the number of
strings whose path goes through it; a node sitting at depth `d` then stands for
a length-`d` prefix shared by exactly `cnt` strings. Without deletions the
answer would simply be the deepest node with `cnt >= k`. Deleting string `i`
subtracts 1 from `cnt` along `i`'s root-to-leaf path and from nothing else, so
after the deletion a node still backs `k` strings exactly when it lies on that
path with `cnt >= k + 1`, or off the path with `cnt >= k`.

The off-path side must be reusable across all queries, so precompute for each
depth the two best nodes: `top1[d]` and `top2[d]`, the first two distinct nodes
at depth `d` with `cnt >= k`. A deletion whose path misses `top1[d]` leaves that
node's count untouched; a deletion whose path covers `top1[d]` cannot also cover
`top2[d]`, since a string's path visits one node per depth. So the deepest
usable off-path depth is the first `d` (scanning downward) where `top2[d]`
exists or `top1[d]` is off the deleted path.

Each query then walks its own string once, stamping visited nodes with a fresh
timestamp so earlier queries' marks cannot interfere, and records `big` — the
deepest depth on its own path where `cnt >= k + 1`. A downward scan over the
depths where `top1` exists yields the best off-path depth `fb`, and the answer
for that index is the larger of the two. The special case `n - 1 < k` — every
deletion strands fewer than `k` strings — is settled up front with an
all-zero result.

Trace `words = ["tree","trek","trend","trim"]` with `k = 3`: the trie node for
`"tr"` carries `cnt = 4`, `"tre"` carries 3, and `"trim"`'s own path is the lone
one through `"tri"`. Deleting `"trim"` keeps `"tre"` at 3 off the path, giving
3; deleting any of the other three drops `"tre"` to 2 — on-path nodes need
`k + 1` — while `"tr"` survives either way (4 dropping to 3), giving 2.

Edge cases: repeated strings stack their counts along a shared path, so a
duplicate can survive its own deletion through the `k + 1` rule; `k = 1` makes
the deepest surviving prefix essentially the longest other string; and a trie
where no depth has a second qualifying node collapses every answer to the
on-path candidate alone.

**Complexity:** `O(S)` time and `O(26 * S)` space, `S` being the combined
length of all strings.
