# Lamp-Lit Grid Queries

## Description

An `n x n` board starts completely dark: each cell can host a lamp, but
every lamp begins switched off.

The list `lamps` tells you which lamps get switched on: `lamps[i] = [r, c]`
lights the lamp in cell `(r, c)`. The same lamp may be listed several
times, yet a lamp that is already lit simply stays lit — duplicates never
produce extra light. While a lamp is lit it bathes every cell of its own
row, its own column, and both of its diagonals.

Afterwards `queries` arrives; `queries[j] = [rj, cj]` asks about cell
`(rj, cj)`. Query `j` answers `true` if that cell is lit by any lamp at
that moment and `false` otherwise. Right after each answer, every lamp
inside the `3 x 3` block of cells centered on the queried cell — its own
cell plus the up-to-eight cells touching it — is switched off.

Return the answers in query order.

### Example 1

![diagram](figures/1001-1.svg)

![diagram](figures/1001-2.svg)

![diagram](figures/1001-3.svg)

```text
Input: n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
Output: [true,false]
Explanation: From a dark board, the lamps at (0,0) and (4,4) are switched
on. Query 0 asks about cell (1,1), which the (0,0) lamp lights along their
shared diagonal, so it answers true; clearing the block around (1,1) then
switches the (0,0) lamp off. Query 1 asks about cell (1,0) — with (0,0)
dark and (4,4) too far away nothing lights it, so it answers false.
```

### Example 2

```text
Input: n = 5, lamps = [[1,1],[3,3]], queries = [[2,2],[4,4],[2,2]]
Output: [true,false,false]
Explanation: Cell (2,2) lies on the diagonal lit by (1,1), so query 0
answers true — and clearing the block around (2,2) switches off both
(1,1) and (3,3). No lamp is left burning, so queries 1 and 2 both answer
false.
```

### Example 3

```text
Input: n = 6, lamps = [[0,2],[0,2],[5,1]], queries = [[0,5],[5,0],[1,2]]
Output: [true,true,true]
Explanation: The repeated entry for (0,2) changes nothing. Query 0 answers
true because (0,2) lights row 0, and the clear around (0,5) reaches no
lamp. Query 1 answers true through row 5, after which (5,1) is switched
off. Query 2 answers true because (0,2) still lights column 2, and is
itself switched off afterwards.
```

### Example 4

```text
Input: n = 8, lamps = [[7,7]], queries = [[7,0],[6,6],[7,7],[0,0]]
Output: [true,true,false,false]
Explanation: The lamp at (7,7) lights all of row 7, so query 0 answers
true, though the clear around (7,0) reaches no lamp. Query 1 answers true
along their shared diagonal, and this time the clear around (6,6) does
switch (7,7) off. The last two queries therefore find nothing lit.
```

### Constraints

- `1 <= n <= 10^9`
- `0 <= lamps.length <= 20000`
- `0 <= queries.length <= 20000`
- for each `[r, c]` in `lamps`: `lamps[i].length == 2` and
  `0 <= r, c < n`
- for each `[rj, cj]` in `queries`: `queries[j].length == 2` and
  `0 <= rj, cj < n`
