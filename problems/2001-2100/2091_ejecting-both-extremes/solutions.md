# Solutions — Ejecting Both Extremes

## Compare the three deletion patterns

Find the indices of the minimum and maximum values and order them as `left < right` (for a singleton they coincide). Ejecting both from the front alone costs `right + 1`, while ejecting both from the back alone costs `n - left`.

The remaining possibility removes the left extremum from the front and the right extremum from the back, costing `left + 1 + n - right`. Every legal sequence takes one of these three shapes, so their minimum is optimal.

**Complexity:** `O(n)` time and `O(1)` auxiliary space.
