# Solutions — Count Difference-Bounded Pairs

## Fenwick tree over per-index differences

Rearranged, the requirement `nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff`
keeps index `i` entirely on the left and `j` entirely on the right:
`nums1[i] - nums2[i] <= nums1[j] - nums2[j] + diff`. Writing
`values[k] = nums1[k] - nums2[k]`, the task counts pairs `i < j` with
`values[i] <= values[j] + diff` — a familiar "count earlier entries at or
below a bound" sweep.

Walk the positions left to right; at each `j`, ask how many previously
inserted values sit at or below `values[j] + diff`, add the answer to the
running total, and insert `values[j]` only afterwards — the insert-after-query
order is what enforces `i < j`. Because the inputs are bounded
(`|values| <= 2 * 10^4`), the values slot straight into a Fenwick (binary
indexed) tree over their raw range after shifting by the minimum, with no
coordinate compression: `update` adds one at a value's slot, `query` reads the
prefix sum up to a clamped bound. The clamp doubles as the guard for negative
`diff` — when `values[j] + diff` drops below everything inserted so far (or
below the entire range), the prefix index falls to zero and that `j`
contributes nothing.

Both Fenwick operations cost time logarithmic in `V`, the spread between the
smallest and largest per-index difference (at most `4 * 10^4 + 1`), and the
tree is the only auxiliary storage.

**Complexity:** `O(n log V)` time, `O(V)` space.
