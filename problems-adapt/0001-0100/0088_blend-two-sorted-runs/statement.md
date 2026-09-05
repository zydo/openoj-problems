# Blend Two Sorted Runs

## Description

Two integer arrays arrive, each already arranged in non-decreasing
order. The first one, `nums1`, is longer than the data it carries:
its real payload is the first `m` cells, while the final `n` cells
hold placeholder zeros — reserved seats for the blend. The second
one, `nums2`, brings its own `n` values.

Blend the two payloads into a single non-decreasing sequence, and
house the result inside `nums1` itself, filling the reserved seats
instead of allocating a third array. The judge reads the value your
function returns, so once the last element is placed, return `nums1`.

### Example 1

```text
Input: nums1 = [4,7,9,0,0,0], m = 3, nums2 = [2,5,8], n = 3
Output: [2,4,5,7,8,9]
```

The payloads are `[4,7,9]` and `[2,5,8]`; blended, every value finds
its seat, and the three trailing zeros turn out to have been pure
reservation.

### Example 2

```text
Input: nums1 = [-5,-2,4,0,0,0], m = 3, nums2 = [-7,0,6], n = 3
Output: [-7,-5,-2,0,4,6]
```

Negative values blend the same way. Note the `0` that lands mid-array
is genuine data contributed by `nums2` — unlike the placeholder zeros
it settles among.

### Example 3

```text
Input: nums1 = [0,0,0], m = 0, nums2 = [2,4,4], n = 3
Output: [2,4,4]
```

With `m = 0` the first array carries no data at all, so the blend is
just `nums2` copied into the reserved seats.

### Constraints

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10⁹ <= nums1[i], nums2[j] <= 10⁹`

### Follow-up

Can the blend be done in `O(m + n)` time, touching each value a
bounded number of times?

## Hints

### Hint 1

Stop thinking about two whole arrays and think about two values at a
time. Each run is sorted on its own; the uncertainty is only in how
the two intertwine, and a purely local comparison can settle each
position for good.

### Hint 2

Take one candidate from each array, keep the more useful one, and
step that side down. Committing one element per step — from the right
end, where free space is guaranteed — walks the entire answer into
place without any extra storage.
