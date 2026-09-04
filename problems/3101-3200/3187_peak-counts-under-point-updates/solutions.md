# Solutions — Peak Counts Under Point Updates

## Fenwick tree over peak indicators

Compress the array to a 0/1 marker p[i], set exactly at interior indices whose
entry strictly dominates both neighbors. Counting over `[l, r]` is then a range
sum over the open interior `l + 1 .. r - 1`, since the ends of a queried
stretch can never be peaks, and a stretch shorter than three entries has no
interior at all and yields 0. Range sums over a 0/1 strip with point
reassignments interleaved is precisely the workload a Fenwick tree serves in
logarithmic time per operation.

Construction seeds the tree with a 1 at every initially peaking index. An
assignment `nums[idx] = val` can only disturb the marker at idx - 1, idx, and
idx + 1 — the cells whose comparisons touch the rewritten one — so the update
subtracts those three old contributions, performs the write, and re-adds the
markers recomputed against the new array. Six Fenwick adds at O(log n) apiece
cover the worst case, with `is_peak` refusing the boundary indices 0 and n - 1,
which can never peak.

The array is mutated in place, so later instructions observe every earlier
write; reading the three markers before and after the assignment is what keeps
old and new states exact. Example 2 shows the mechanism: raising one flat
entry to 9 switches on a single marker, and the count query reads it straight
out of the tree.

**Complexity:** `O((n + q) log n)` time, `O(n)` space.
