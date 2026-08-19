# Solutions — Total Subarray Minima

## Counting Each Entry's Dominance Span with a Monotonic Stack

Enumerating blocks is hopeless at `n = 3 * 10^4` — there are hundreds of
millions of them — so the sum has to be reorganised around the entries rather
than the blocks. Each block contributes its smallest member, which means each
entry contributes its own value once per block that it dominates. Summing
`nums[i] * (number of blocks whose minimum is nums[i])` gives the same total
in linear time.

Counting those blocks is a matter of finding how far `nums[i]`'s dominance
reaches. Walking left from `i`, the run of entries `nums[i]` is smaller than
ends at the first entry below it; walking right, likewise. A block has
`nums[i]` as its minimum precisely when its left end lies inside the left run
(or is `i` itself) and its right end lies inside the right run — the two
choices are independent, so the number of such blocks is the product of the
two run lengths.

![Each entry's dominance span in [4, 2, 5, 3], with the contribution of each.](figures/solution-min-spans.svg)

Ties need care or the accounting double-counts. If two equal entries are both
minima of a block, the block must be attributed to one of them only. The
reference implementations do this by making the two searches asymmetric: the
leftward search stops at an entry strictly smaller, while the rightward search
also stops at an equal one. The effect is that every block is credited to the
leftmost of its tied minima, so nothing is counted twice and nothing is
missed.

Finding, for each index, the nearest smaller entry on each side is the textbook
use of a stack holding indices whose values increase from bottom to top. Sweep
left to right, popping while the top's value fails the comparison; whatever
remains on top is the boundary, and then `i` is pushed. A symmetric sweep from
the right fills the other array. Every index enters and leaves each stack once,
so both passes together are linear. When the stack empties, the dominance run
reaches the array border, which the sentinels `-1` and `n` encode.

The final loop multiplies value by the two run lengths and accumulates. Python
adds exact integers and reduces once at the end; the fixed-width languages
compute each term in 64 bits and reduce as they go, since a single term can
reach roughly `3 * 10^4 * (3 * 10^4)^2 / 4`.

**Complexity:** `O(n)` time, `O(n)` space.
