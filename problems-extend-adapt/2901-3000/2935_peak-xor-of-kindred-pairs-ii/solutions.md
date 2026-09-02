# Solutions — Peak XOR Of Kindred Pairs II

## Sort, slide a window, and walk a binary trie

Brute force dies here: with up to `5 * 10⁴` values there can be ~`10⁹`
pairs. The first simplification is ordering. Sort `nums`; with `x <= y` the
kindred-pair condition `y - x <= x` becomes `y <= 2 * x`, so every partner
of `y` lives in the sorted prefix `[ceil(y / 2), y]`. Sweeping `y` from
left to right, that window only ever gains elements on its right edge and
loses them on its left edge — a classic two-pointer sliding window.

Inside the window the task is the classic maximum-XOR-partner query, which
a binary trie over the values' 20 bits answers greedily: for a query `y`,
walk from the most significant bit down, at each level stepping into the
subtree with the opposite bit whenever it is non-empty, so the accumulated
XOR keeps its highest possible bits. Because the window slides, each node
also carries a count of how many live window values pass through it —
inserting a value increments the counts along one root-to-leaf path, and
when the left pointer advances, the departed value's path is decremented,
so "subtree non-empty" means genuinely present in the current window.

Each of the `n` values is inserted once, deleted once, and queried once,
each at `20` levels of trie, so the whole sweep is linear in `n` up to the
constant bit count. All values are below `2²⁰`, so the XOR of any pair is
below `2²⁰` and 32-bit integers hold every intermediate in every language.

**Complexity:** `O(n log C)` time — `C` the value bound, so 20 trie levels —
and `O(n)` space for the trie nodes.
