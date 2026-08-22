# Solutions — In-Order Tree Iterator

## A Stack That Holds One Left Spine

Sorting all `n` values at construction would answer both methods instantly
and cost `O(n)` memory even if the caller asks for two values and stops. The
follow-up's `O(h)` bound rules that out and points at the structural fact
worth exploiting: in a binary search tree, *smallest unvisited value* is
always the first node of some left spine.

The iterator therefore keeps a stack holding exactly one root-to-node path —
initially the root followed by its left children, each pushed onto the last.
By the ordering property, everything on that path precedes what hangs below
it, so the top of the stack is the next value in ascending order and
`hasNext` is a plain emptiness check.

`next()` pops the top and returns its value; before it does, it walks the
left spine of the popped node's right child onto the stack (nothing to walk
when the right child is absent). Those are precisely the values that follow
the popped one: the right subtree's smallest element stands next in line.
In the chain of Example 2 — `40 ← 30 ← 20 ← 10` — construction pushes all
four nodes, each `next()` pops one and pushes nothing, and the values fall
out `10, 20, 30, 40`. In Example 1's tree, handing out `12` is followed by
pushing `15` and `20`, so the stack turns into the path of the right
subtree.

Each node enters and leaves the stack exactly once across the whole
iteration, so the total work of `n` calls is `O(n)` — amortized constant per
call, with `O(h)` worst case for a single call that walks a long spine. The
stack itself never holds more than one path, which is the required `O(h)`
memory. Both ports are iterative throughout, so degenerate chain-shaped
trees cannot overflow any recursion.

**Complexity:** construction walks the initial spine in `O(h)`; `next()` is
amortized `O(1)` (`O(h)` worst case for one call); memory is `O(h)`.
