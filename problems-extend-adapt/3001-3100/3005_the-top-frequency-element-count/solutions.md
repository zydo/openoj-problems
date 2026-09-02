# Solutions — The Top-Frequency Element Count

## Frequency Map and Max Tier Sum

One pass turns the array into a hash map from value to count, which is all
the problem needs — only frequencies matter, never the values themselves.
The maximum frequency `m` is the largest count in that map, and the answer
is the total number of array elements whose value reaches it: every value
whose count equals `m` contributes exactly `m` elements.

The same sum reads as a product, `(number of values at frequency m) * m`.
Example 3 is the tie case — values 2, 4, and 6 each reach frequency 2, so
the answer is `3 * 2 = 6` — while Example 2's single-value array gives its
whole length to one count. A second scan over the map's at
most 100 counts picks out those equal to `m`, so nothing beyond one pass and
one lookup-sized sweep is required.

**Complexity:** `O(n)` time, `O(n)` space.
