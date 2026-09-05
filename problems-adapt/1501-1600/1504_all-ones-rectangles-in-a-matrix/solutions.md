# Solutions — All-Ones Rectangles in a Matrix

## Column Heights With Running Minimum

Walking over all four corners of a block is quartic work; the anchor that
tames it is the bottom edge. Sweep the rows top to bottom and maintain
`height[c]`, the length of the run of ones currently ending at row `r` in
column `c`. Then for a fixed bottom row and a fixed span of columns, the
number of legal blocks with that bottom row and span is the minimum height
across the span: the block must stand on ones for some height `h`, and
every `h` from 1 up to the minimum is realizable. Summing these minima
over all rows and all spans counts every block once — a block has exactly
one bottom row and one column span.

The histogram updates in place: a one lengthens its column's run, a zero
wipes it. Inside a row, the left column is pinned and the right edge
slides outward while one running variable carries the minimum of the
growing span — a span's minimum can only drop as the span widens, so no
rescan is ever needed, and each span pours its current minimum into the
total. On `[[1,1,0],[1,1,1],[0,1,1]]` the third row carries heights
`[0,3,2]`: the single-column spans contribute 3 and 2, and the span
covering both columns contributes its minimum 2 — the tall middle column
hands its extra height to nothing, which is exactly why the count is 19
and not more.

Every span of every row is visited once with constant work, displacing
the naive per-span rescan. Rows of all zeros contribute nothing through
their zero heights, and a lone cell is simply a span of length one whose
minimum is that column's height.

**Complexity:** `O(m · n²)` time, `O(n)` space.
