# Solutions — Rolling Window Maxima

Neighbouring blocks share all but two of their entries, so the interesting
question is how to carry information across the shift. Two answers: keep them
all in a priority queue and tolerate expired entries near the top until they
surface, or prune the candidates down to those that can still lead a block.

## Lazy Max-Heap

Push `(value, index)` for every entry as it arrives; the heap's top is then the
largest value seen so far, which is the answer as long as its index is still
inside the block. A binary heap has no cheap way to reach in and delete an
entry that has just expired, so nothing is deleted eagerly. Instead, just
before reading the top, pop while the top's index satisfies `index <= i - k`.

This lazy policy is safe precisely because the heap is ordered by value. An
expired record can only shadow the true answer if it is larger than it, and it
is popped in exactly that case; expired records that are smaller sit harmlessly
below and get discarded whenever a later pop brings them to the surface. Every
entry is pushed once and popped at most once, so the heap work totals
`O(n log n)`.

That logarithm is the whole difference between the two variants. The heap
carries records that can no longer win but have not yet been noticed; the deque
throws them away at the moment of arrival and so never pays to sort anything.

**Complexity:** `O(n log n)` time, `O(n)` space — before stale records are
popped the heap can hold one per entry.

## Monotonic Deque

Hold indices, not values, and keep them so that their values decrease from
front to back. Then the front index is the largest entry still inside the
current block, readable in constant time. What preserves that shape is a
domination rule: an index whose value is no greater than a later arrival is
finished for good, because every block from here on that would contain the
older index contains the newer one as well.

So each arriving index `i` first pops from the back while the values there are
`<= nums[i]` — using `<=` rather than `<` also means equal values collapse to
the most recent one, which is harmless since either could lead a block — and is
then appended. Expiry is handled at the other end: if the front index has
fallen out of the current block (`dq[0] <= i - k`) it is dropped. From
`i = k - 1` onward a block is complete at every step, and `nums[dq[0]]` is
appended to the result.

![Deque states over [2,9,4,0,12,6,15,20] with k = 3: the deque holds 9,4,0 until 12 arrives and evicts all three; later 15 and 20 each evict everything older and smaller, producing outputs 9, 9, 12, 12, 15, 20.](figures/solution-monotonic-deque.svg)

The inner `while` looks like it could be quadratic, but each index is appended
once and removed once, from whichever end, so the whole run is linear. The
deque never exceeds `k` indices and the answer has `n - k + 1` entries. That is
strictly better than rescanning each block (`O(n·k)`) and better than the heap
above by a logarithmic factor.

**Complexity:** `O(n)` time, `O(k)` space.
