# Solutions — Intersection of Two Arrays II

## Hash-map counts, then walk

The intersection here is a multiset question: a value belongs in the result
exactly `min(count in nums1, count in nums2)` times. Counting how often each
value occurs in `nums1` turns that formula into a lookup — the map answers
"how many copies of this value may still join" in constant time.

The code then walks `nums2` once, appending each value whose count is still
positive and decrementing that count. The falling counter is what enforces
the min: once a value's budget reaches zero, later copies of it in `nums2`
are skipped, so every shared value contributes exactly its smaller count and
nothing else survives. Because the judge compares arrays exactly, the picked
values are sorted ascending before returning — for `nums1 = [4,9,5]` and
`nums2 = [9,4,9,8,4]` the picks `[9,4]` come back as `[4,9]`.

The follow-ups all bend the same idea. When one array is much smaller than
the other, count the smaller one so the map stays small. When both arrays
arrive already sorted, the map disappears entirely: two indexes walking the
arrays in lockstep emit the intersection in one coordinated pass. And when
`nums2` lives on disk with room for only chunks of it in memory, counting
survives streaming — hold `nums1`'s counts in memory, feed in `nums2` one
chunk at a time, and pick from each chunk as it passes.

**Complexity:** `O(n + m + k·log k)` time, `O(n)` space (n, m the input
lengths, k the intersection's).
