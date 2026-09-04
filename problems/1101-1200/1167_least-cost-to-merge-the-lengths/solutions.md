# Solutions — Least Cost to Merge the Lengths

## Greedy Min-Heap Fusing

Fusing lengths `x` and `y` costs `x + y`, and the fused segment drags that
sum into every later fusion it joins — so each original length is paid once
for every fusion performed above it. The total is minimized by keeping long
lengths low in that hierarchy, which is exactly what always fusing the two
shortest available segments achieves (the Huffman exchange argument: any
optimal first fusion can be rearranged onto the two shortest without
raising the cost).

A min-heap of the lengths serves up the two smallest in logarithmic time.
The loop pops both, adds their sum to the running total, and pushes the
fused length back into the pool. Every pass shrinks the segment count by
one, so after `len(lengths) - 1` passes a single segment remains and the
accumulated total is the answer — for `[2,7,4,9]` that is 6 + 13 + 22 = 41,
and fusing the 9 into the picture earlier cannot beat it.

One segment needs no fusion and returns 0 at once, covering the smallest
input. Sorting up front is unnecessary: `heapify` is linear, and as fused
lengths re-enter the pool the pops naturally respect the growing values.

**Complexity:** `O(n log n)` time, `O(n)` space.
