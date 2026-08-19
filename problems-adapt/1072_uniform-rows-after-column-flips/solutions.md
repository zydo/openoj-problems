# Solutions — Uniform Rows After Column Flips

## Canonical Row Forms

Choosing columns to flip is choosing a bit pattern `K`, one bit per column,
that gets XOR-ed onto every row alike. A row `r` lands on all zeros or all
ones exactly when `r XOR K` is one of those — that is, when `r` is `K`
itself or `K` with every bit inverted. So the rows one flip set can fix
together are precisely the rows that are pairwise identical or pairwise
complementary, and the task is to find the largest such group.

Pairwise comparison is unnecessary. Encode each row by its own shape
instead: every cell XOR-ed against the row's first cell. Copies of a row
produce the same code, and so do its complements — inverting a row flips
the first cell too, so every XOR result comes out identical. A row that
already reads uniformly codes to all zeros. Counting codes in a dictionary
and reading off the busiest one therefore returns the size of the best
simultaneous group, and the corresponding `K` (the code or its inverse)
realizes it with actual flips.

Nothing needs special casing. In a one-column matrix every row codes to the
single bit 0, recovering the obvious answer `m`; uniform rows of either
color fall into one bucket. The whole computation is one pass over the
cells.

**Complexity:** `O(m·n)` time, `O(m·n)` space.
