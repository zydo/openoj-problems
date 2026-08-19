# Solutions — Farthest Hamming Neighbor

## Multi-source BFS on the hypercube

Every word y splits its m bit positions into those where it agrees with x and
those where it agrees with x's complement, so HD(x, y) + HD(~x, y) = m — and
pushing the maximum through that identity turns it into a minimum:
`answer[i] = m - minDist(~nums[i])`. Minima over a set of m-bit words are
shortest-path distances in the hypercube, whose edges join words differing in
a single bit, because each bit flip is exactly one Hamming step.

The BFS starts with every distinct value of nums already at distance 0 —
duplicates just re-seed a source and change nothing — and floods the entire
2^m-vertex cube: a dequeued word relaxes each of its m neighbors `v ^ (1 <<
bit)` when doing so improves the recorded distance. Unit edge weights mean the
first arrival at a word uses a shortest path, so `dist[v]` finishes as the
smallest Hamming distance from v to the nearest array element. Unreached
vertices hold the initial `size + 1` sentinel, though the flood always covers
the connected cube.

The last pass sends each query word through its complement: `m - dist[full ^
x]` is how far x can sit from the array, since whatever stands closest to the
complement of x stands farthest from x itself. With m capped at 17 the cube
holds 131072 vertices and one flood serves every query, whereas comparing each
element against the array directly would cost a quadratic number of popcounts.

**Complexity:** `O(2^m · m + n)` time, `O(2^m)` space.
