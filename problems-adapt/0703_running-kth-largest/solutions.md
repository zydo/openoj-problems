# Solutions — Running Kth Largest

## Min-Heap Capped At K

The query never looks below the top `k` of the pool, and nothing that has
fallen out of the top `k` can climb back in — later arrivals only raise the
boundary. `RunningKthLargest` therefore stores a **min-heap of at most `k`
values**, namely the `k` biggest seen so far, and throws the rest away.

The root of that heap is the least of the `k` biggest, which is exactly the
value the query asks for. `add` offers the arrival to the heap; when the size
reaches `k + 1`, the root is whichever value has just been squeezed out of the
top `k`, so popping it restores the cap. The new root is the answer and costs
nothing to read. Note that an arrival below the current root is pushed anyway
and immediately pops back out — the same three lines handle both cases, with no
comparison in front of them.

The constructor sets up the identical shape: heapify the seed values, then pop
until `k` remain. A seed shorter than `k` simply leaves a smaller heap, which
fills up over the first few arrivals — the constraints allow `k` to be one
larger than the seed.

Both reference implementations are the same structure in different clothes
(Python's `heapq` and Java's `PriorityQueue` are binary min-heaps). Each `add`
does `O(log k)` work, so `10⁴` arrivals are nothing.

On Example 1 (`k = 3`, seed `[2, 7, 4, 7]`) the heap trims to `{4, 7, 7}` with
root 4. Adding 5 evicts the 4 and leaves `{5, 7, 7}`, answer 5; adding 9 evicts
the 5 for `{7, 7, 9}`, answer 7; adding 1 pushes and pops the 1 straight back,
answer 7 again; adding 8 evicts a 7 and gives `{7, 8, 9}`, answer 7.

**Complexity:** `O(log k)` per `add`, `O(n + (n - k) log n)` to seed from `n`
values, `O(k)` space.
