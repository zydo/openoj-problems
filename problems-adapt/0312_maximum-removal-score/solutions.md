# Solutions — Maximum Removal Score

## Interval DP on the Last Entry Taken

Splitting on the first entry taken does not produce independent subproblems.
Once it goes, the two sides become adjacent, and the value of a later removal
on the left depends on what is still standing on the right. Splitting on the
**last** entry taken inside a stretch does work: at the instant it is removed,
everything strictly inside the stretch has already gone, so its two neighbours
are exactly the values bounding the stretch — fixed for the entire subproblem.
That is the whole trick.

Pad the array with a `1` at each end so that no removal is ever missing a
neighbour, and index into the padded array. Define `best[i][j]` over the
**open** interval `(i, j)`: the greatest total from removing everything
strictly between positions `i` and `j`, with those two positions still
standing. Choosing `k` as the last entry taken there gives

```text
best[i][j] = max over i < k < j of
             padded[i] * padded[k] * padded[j] + best[i][k] + best[k][j]
```

The two recursive terms are genuinely independent — each side clears out
entirely before `k` is taken, and neither can see past `k` while it is still
there. Filling by increasing width guarantees both are already known. The
answer is the whole interior, `best[0][m - 1]` on the padded array of length
`m`.

Take Example 1, `nums = [4,2,7,3]`, padded to `[1,4,2,7,3,1]` (positions `0` to
`5`):

1. Width one, a lone entry between its padded neighbours: `best[0][2] = 1·4·2 =
   8`, `best[1][3] = 4·2·7 = 56`, `best[2][4] = 2·7·3 = 42`, `best[3][5] =
   7·3·1 = 21`.
2. Width two: `best[0][3]` picks 2 last (`1·2·7 + best[0][2] = 14 + 8 = 22`) or
   4 last (`1·4·7 + best[1][3] = 28 + 56 = 84`) — 84 wins. Likewise
   `best[1][4] = 4·7·3 + best[1][3] = 84 + 56 = 140` with 7 last, and
   `best[2][5] = 2·3·1 + best[2][4] = 6 + 42 = 48` with 3 last.
3. Width three: `best[0][4] = 1·4·3 + best[1][4] = 12 + 140 = 152` (4 last) and
   `best[1][5]` reaches only `105` by taking 7 last
   (`4·7·1 + best[1][3] + best[3][5] = 28 + 56 + 21`), so 3 last wins there
   too: `4·3·1 + best[1][4] = 12 + 140 = 152`.
4. Width four: `best[0][5]` takes 4 last, `1·4·1 + best[1][5] = 4 + 152 = 156`
   — the order 2, 7, 3, 4 from the statement.

Edge cases fall out without special handling. A one-entry array pads to
`[1, x, 1]` and its single width-one interval yields `x`. Entries equal to `0`
make their own removal worthless but still separate their neighbours, so the
same recurrence weighs "clear it early" against "clear it late" correctly. The
running maximum starts at `0`, which is safe because every score is a product
of non-negative values.

With `n <= 300` the padded array has at most `302` positions and the triple
loop runs on the order of `3·10⁷` inner steps. Intermediate totals stay well
inside 64-bit range; the C++, Java, Go and Rust references accumulate in a
64-bit type and narrow only at the end.

**Complexity:** `O(n³)` time, `O(n²)` space.
