# Solutions — Longest Stretch of Open Floors

## Sort the unavailable floors and measure the gaps

Every maximal run of consecutive open floors is bounded by an unavailable
floor or by an end of the leased range. After sorting `blocked`, each
adjacent pair `(blocked[i], blocked[i + 1])` contributes a run of
`blocked[i + 1] - blocked[i] - 1` floors between them, while the range's own
ends contribute `blocked[0] - bottom` below the first unavailable floor and
`top - blocked[last]` above the last one. The answer is the largest of those
runs; since there is at least one unavailable floor, a range covered end to
end simply scores non-positive everywhere and returns `0`.

**Complexity:** `O(m log m)` time and `O(1)` extra space, where `m` is the
length of `blocked`.
