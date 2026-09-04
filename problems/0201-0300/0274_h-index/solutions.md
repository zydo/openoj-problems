# Solutions — H-Index

## Counting Buckets Clamped at n

The answer is bounded by the number of papers `n`, so a paper cited more
than `n` times gains nothing over a paper cited exactly `n` times — both
clear every bar the definition can set. That collapses the value range to
`0..n` and turns the obvious sort into a counting pass: allocate `n + 1`
buckets and tally each paper into `count[min(value, n)]`, everything
oversized funneled into the last bucket.

From there the definition is answered in a single downward sweep. Walk `h`
from `n` toward 0 while adding `count[h]` into a running `total`; after
bucket `h` is added, `total` counts every paper with at least `h`
citations, since papers with larger counts were clamped into buckets at or
above `h` and are already included. The first `h` where `total >= h` is
the answer — maximal, because every larger `h` was tested first and
failed the very same test. For `[2, 7, 4, 0, 5, 9]` (`n = 6`, with 9
clamped to 6) the sweep accumulates 1, 2, 3, 4 and stops at `h = 4`:
four papers reach the bar of 4, and at `h = 5` only 3 do. For
`[1000, 999, 3]` both large values land in bucket 3, the total is already
3 at `h = 3`, and the answer is 3 — the paper count caps everything.

The sweep cannot fall off the end: at `h = 0` the accumulated total is
`n`, which never fails the test, so the trailing return exists only to
satisfy the type checker. Both passes are linear, and the bucket array is
the only extra storage.

**Complexity:** `O(n)` time, `O(n)` space.
