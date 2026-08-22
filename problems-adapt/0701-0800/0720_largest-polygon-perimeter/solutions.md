# Solutions — Largest Polygon Perimeter

## Descending scan on sorted lengths

One inequality decides everything: a multiset of lengths closes into a
polygon exactly when its largest member is smaller than the sum of the
rest — necessary for any polygon, and sufficient for any side count of
three or more. So the task is to find the largest-sum selection whose
maximum element the others can outweigh.

Perimeters only grow as more sides join, so greed wants the fullest
selection possible. Fix a candidate longest side — the largest value that
will appear in the selection. Every smaller value added to the selection
strictly helps the inequality (it joins the "others" side while leaving
the maximum unchanged), so the best selection around a given longest side
is simply *all* values up to and including it. That collapses the search
to one scan: sort ascending, and try the candidates from the top.

The scan carries `total`, the sum of everything still under
consideration. For the current largest candidate `nums[i]`, either
`total - nums[i] > nums[i]` — the selection closes, and since every
candidate after it yields a smaller sum, `total` is the answer — or the
candidate is hopeless: every polygon containing it would need the smaller
values to outweigh it, and even taking *all* of them is not enough. A
hopeless candidate is subtracted from `total` and the scan steps down.
Stopping at index 2 keeps at least three sides in play; if no prefix that
long ever closes, the answer is `-1` (Example 3, where 100 outweighs
everything and discarding it leaves only two sides).

Example 2 runs the full logic: 30 is hopeless (19 < 30) and discarded,
after which 1+2+3+4 = 10 outweighs 9 and the pentagon's perimeter 19 is
returned.

**Complexity:** `O(n log n)` time for the sort plus a linear scan,
`O(n)` space.
