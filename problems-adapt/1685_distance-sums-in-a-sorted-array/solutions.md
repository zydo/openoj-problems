# Solutions — Distance Sums in a Sorted Array

## Prefix and Suffix Sums

Sortedness settles every comparison in advance: no entry before index
`i` exceeds `nums[i]`, no entry after it falls short. The absolute-value
bars can therefore come off. Everything to the left of `i` contributes
`nums[i] · i − (total of the first i entries)` — each of the `i` smaller
values gives up its distance at once — and everything to the right
contributes `(total of the entries after i) − nums[i] · (n − i − 1)`.
Their sum is `result[i]`.

One left-to-right pass keeps a running prefix sum alongside the grand
total, so both pieces are on hand at every index for free, and the
answers stream out as the sweep proceeds. In `nums = [2,4,4,9]`, the
final entry pays `9·3 − (2+4+4) = 17` to its left and nothing to its
right, while each `4` pays `4 − 2 = 2` left and `(4+9) − 4·2 = 5`
right, totalling `7`.

Equal neighbours behave: a tie contributes a zero distance, and the
formulas attribute that zero to whichever side the index falls on,
non-strict order included. Each entry is touched once, and apart from
the output array the only state is a fixed handful of scalars — the
pairwise `O(n²)` loop this replaces never stood a chance at `n = 10⁵`.

**Complexity:** `O(n)` time, `O(1)` auxiliary space (excluding the
output array).
