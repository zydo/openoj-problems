# Solutions — Count of Smaller Numbers After Self

## Fenwick Tree over the Value Range

Scanning right to left turns the question inside out: when the walker reaches `nums[i]`, everything already processed lies to its right, so `counts[i]` is simply "how many already-inserted values are strictly smaller than `nums[i]`". That is a rank query, which a Fenwick tree (binary indexed tree) answers in logarithmic time.

The values are bounded in `[-10⁴, 10⁴]`, so instead of compressing coordinates the solution maps each value to a positive 1-based index with `value + 10002` (shifting the minimum to 2), and allocates a BIT sized to the whole 20005-slot value range. Each slot conceptually counts how many times its value has been inserted. For each element the code queries `query(index - 1)` — the prefix count over all values strictly below it — then inserts the element with `update(index, 1)`. The insertion order (query first, insert after) is what keeps the element from counting itself.

Both BIT operations are the standard low-bit walks: `update` climbs `i += i & -i` adding the delta to every covering block, `query` descends `i -= i & -i` summing the disjoint blocks that tile the prefix. Because the results are produced right-to-left, the list is reversed before returning.

Equal values are counted correctly on both sides: duplicates are inserted and counted (the third example `[-1,-1]` yields `[0,0]` since equal is not smaller), and the strictly-smaller semantics come from querying the prefix ending just below the element's own index. With `n` up to 10⁵, the total work is `n` logarithmic operations over the fixed value range `V = 2 · 10⁴ + 5`, which fits comfortably.

**Complexity:** `O(n log V)` time, `O(V)` space.
