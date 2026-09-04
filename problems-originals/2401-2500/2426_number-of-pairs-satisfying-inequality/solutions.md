# Solutions — Number of Pairs Satisfying Inequality

## Fenwick tree over transformed values

Rearranging the condition `nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff` puts all of index `i` on one side and all of `j` on the other: `nums1[i] - nums2[i] <= nums1[j] - nums2[j] + diff`. Defining `values[i] = nums1[i] - nums2[i]`, the task is to count pairs `i < j` with `values[i] <= values[j] + diff` — a classic "count earlier elements at most a bound" sweep.

Scan left to right; for each position `j`, query how many previously inserted values are `<= values[j] + diff`, add that to the count, and only then insert `values[j]` — inserting after querying is what enforces `i < j`. Because the inputs are bounded (`|values| <= 2 * 10^4`), the values fit a Fenwick tree (binary indexed tree) over their raw range after shifting by the minimum, with no coordinate compression: `update` adds 1 at the value's slot, and `query` reads the prefix sum up to the clamped target. The clamping is also the guard for negative `diff` — when `values[j] + diff` falls below every value seen so far (or below the whole range), the prefix index drops to zero and the pair count for that `j` is simply 0.

Both Fenwick operations cost logarithmic time in `V`, the spread between the minimum and maximum transformed value (at most `4 * 10^4 + 1`), and the tree is the only auxiliary storage.

**Complexity:** `O(n log V)` time, `O(V)` space.
