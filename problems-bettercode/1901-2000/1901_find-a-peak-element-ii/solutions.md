# Solutions — Find a Peak Element II

## Binary search on rows via the row maximum

The row maximum is the pivot of the search. Pick the middle row, find its largest entry in one scan — that entry already beats its left and right neighbors by construction, so only the vertical direction can disqualify it. Compare it with the cells directly above and below (the `-1` perimeter outside the grid). If it beats both, it is a peak and the search ends; otherwise the strictly larger vertical neighbor points the way.

Moving toward that larger neighbor is safe by a maximality argument. Suppose the up-neighbor wins, so `mat[mid-1][j] > mat[mid][j]`, and every cell of row `mid` is at most `mat[mid][j]` (it is the row maximum). Restrict attention to the top half, rows `lo..mid-1`, and take its maximum element: all of its neighbors inside the half are smaller, and its only neighbor that could lie outside — the cell below it, in row `mid` — is smaller too, because the entire row `mid` is below `mat[mid-1][j]`, itself at most the half's maximum. So the half's maximum is a peak of the whole matrix, and recursing there (setting `hi = mid - 1`) cannot lose the answer. The down-neighbor case mirrors it onto the bottom half.

Each iteration scans one row of length `n` and halves the row range, and the loop must terminate at a peak since a peak always exists in the retained half. Single-row and single-column matrices are covered by the `-1` perimeter guards on the out-of-range neighbor lookups.

**Complexity:** `O(n log m)` time, `O(1)` space.
