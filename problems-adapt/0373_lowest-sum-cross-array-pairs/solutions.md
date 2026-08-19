# Solutions — Lowest-Sum Cross-Array Pairs

## Min-Heap Frontier

Imagine one sorted row for each position `i` in `nums1`. Row `i` contains
the pairs `(nums1[i], nums2[j])` as `j` increases. Because `nums2` is sorted,
the sums within every row are non-decreasing. We only need to merge the
beginnings of these rows rather than construct every pair.

Seed a min-heap with `(i, 0)` for the first `min(nums1.length, k)` rows. A
later row cannot reach the first `k` outputs: each of those earlier rows
already begins with a sum no greater than its first sum. Store `(sum, i, j)`
in the heap so the index `i` supplies the required tie-break.

The heap minimum is the next output pair. After removing `(i, j)`, insert
`(i, j + 1)` when that position exists. This restores one frontier item for
row `i`; every other row's smallest unseen item remains in the heap. Repeating
the operation `k` times therefore performs a partial merge of all relevant
rows. Duplicate values stay as separate indexed choices and are emitted as
often as they occur.

**Complexity:** `O(k log k)` time and `O(k)` auxiliary space.
