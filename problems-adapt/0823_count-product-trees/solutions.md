# Solutions — Count Product Trees

## Sorted counting by root label

Group the trees by the label at their root. Both children of a node labelled `v`
are strictly smaller than `v`, because every entry exceeds `1`, so ordering the
entries ascending puts each node's possible children behind it. One left-to-right
sweep therefore suffices: when the sweep reaches `v`, every count it needs is
already final.

Write `dp[i]` for the number of trees rooted at the `i`-th entry after sorting.
The bare leaf always exists, which is where the `1` comes from. Beyond that, a
root splits into an ordered pair of entries whose product is `v`, and the two
subtrees are chosen independently, so such a split adds `dp[left] * dp[right]`.
The code finds those splits by trying each earlier entry as the left child: if it
divides `v`, the right child is forced to be `v` divided by it, and a
label-to-position map says in constant time whether that number is an entry at
all.

Order matters, which is why the loop never halves its work for symmetric pairs.
With `[2,3,6]` the entry 6 is reached from 2 as the left child and again from 3
as the left child, giving two trees rather than one — the mirror images are
genuinely different trees, and both are counted. Summing `dp` over all entries
then answers the question, since every tree has exactly one root.

Two entries can multiply past 32 bits and the intermediate products past that
again, so the languages with fixed-width integers accumulate in 64-bit and take
the remainder as each `dp[i]` is finished; JavaScript and TypeScript, whose
numbers lose precision above `2^53`, multiply through a helper that keeps the
partial products small. Each entry examines the entries before it, so the sweep
performs a quadratic number of divisibility tests and one map lookup apiece.

**Complexity:** `O(n^2)` time, `O(n)` space.
