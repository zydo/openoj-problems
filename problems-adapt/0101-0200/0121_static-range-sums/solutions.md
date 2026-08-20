# Solutions — Static Range Sums

## Prefix Table

The array never changes, so every one of the up-to-`10⁴` questions
interrogates the same frozen data — summing work belongs in construction,
not in the query path. `StaticRanges` builds `prefix`, where `prefix[i]`
holds the total of the first `i` elements and `prefix[0]` is `0`. One
left-to-right pass fills it, each entry being its predecessor plus one
element; the extra leading zero exists so that a query starting at position
`0` needs no special case.

Any stretch total then telescopes: everything counted before `left` cancels
when the total up to `left` is subtracted from the total up to `right + 1`,
leaving exactly `nums[left] + ... + nums[right]`. For the Example 1 array
`[5, -2, 7, 1, -4, 3]`, `prefix` is `[0, 5, 3, 10, 11, 7, 10]`, and
`rangeSum(1, 3)` is `prefix[4] - prefix[1] = 11 - 5 = 6` — two lookups and
a subtraction, whatever the stretch's length.

The Java port accumulates into `long`, comfortably above the worst total of
`10⁴` elements at `10⁵` each. Preprocessing linear, queries constant — the
follow-up's target exactly.

**Complexity:** `O(n)` construction, `O(1)` per `rangeSum`, `O(n)` extra
space.
