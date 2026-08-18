# Solutions — Uniform Point From Rectangles

## Area-Weighted Rectangle, Uniform Cell

Uniformity over all covered integer points splits into two uniform choices.
First draw rectangle `i` with probability proportional to its count of
integer cells — `(xi - ai + 1) * (yi - bi + 1)`, cells rather than raw side
differences — then draw one of those cells uniformly. The product gives each
point of rectangle `i` the probability `area(i)/total · 1/area(i) = 1/total`.
The converse also holds: any sampler uniform over points must land in
rectangles according to their cell counts, so a wide rectangle beside a small
square absorbs proportionally more draws — precisely what the statistical
judge measures with its tens of thousands of invocations per case.

The weighted draw is a prefix-sum table plus binary search:
`P[i+1] = P[i] + area(i)` maps a uniform `cell ∈ [0, total)` to the unique
`i` with `P[i] <= cell < P[i+1]` — `bisect_left` in Python, a hand-rolled
search in Java (accumulating into `long`, because 100 rectangles of
2000×2000 cells blow past 32-bit sums). Inside the rectangle the decode is
row-major indexing at width `w = xi - ai + 1`: the point is
`(ai + offset % w, bi + offset / w)`. Because the decode is a bijection on
cells, the inner draw is uniform in truth, not just in appearance.

**Judged scale.** The judge's frequency table is keyed by whole returned
points, so the statistical configurations hold the covered area to ~100
integer points — room for multi-rectangle mixes, tall-and-thin beside
wide-and-flat shapes, adjacency, and extreme coordinates, yet far under the
constraint ceiling (`10⁹` coordinates, sides up to 2000) where no enumerable
table could exist. The uniformity argument itself never consults the scale.

**Complexity:** `O(n)` construction, `O(log n)` per `drawPoint`, `O(n)` space.
