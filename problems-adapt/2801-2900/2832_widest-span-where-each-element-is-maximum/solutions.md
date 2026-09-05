# Solutions — Widest Span Where Each Element Is Maximum

## Monotonic Stack Boundaries

The longest run that `nums[i]` rules reaches from `i` until a strictly larger
element blocks it on either side: smaller neighbours may join the run freely,
but crossing a larger one hands the crown over. So `ans[i] = R[i] - L[i] + 1`,
where `L[i]` is the nearest position left of `i` holding a larger value (or
`0` at the edge) and `R[i]` the nearest larger on the right (or `n - 1`).

Both boundary arrays come from a monotonic stack of indices whose values are
kept decreasing. Sweeping left to right, before index `i` is pushed every
smaller index on the stack is popped — those indices have just found their
larger right neighbour, namely `i` — and whatever survives on the stack is
`i`'s larger left neighbour. A mirror right-to-left pass fills the other
array. Every index is pushed and popped at most once per pass.

Distinctness does real work here: with no equal values anywhere, there are no
ties to arbitrate and the strict/non-strict distinction never arises, so each
boundary is unambiguous. A strictly increasing array such as `[4, 7, 10, 13]`
leaves the left pass with an empty stack throughout, so every run starts at
the left edge and `ans[i] = i + 1`; a strictly decreasing one behaves
symmetrically.

**Complexity:** `O(n)` time, `O(n)` space.
