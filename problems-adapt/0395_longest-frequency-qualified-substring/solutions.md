# Solutions — Longest Frequency-Qualified Substring

## Divide and Conquer on Underrepresented Letters

Count the letters in the current region. If each present letter reaches `k`,
the entire region qualifies. Otherwise, every letter below the threshold is
unusable anywhere inside this region: taking a shorter substring cannot
increase its count. Such letters split the region into independent pieces.

Scan through the region and recursively evaluate each nonempty piece between
splitters. The best child length is the answer for the parent. An empty piece
contributes zero, which also handles the case where every position is a
splitter.

At one recursion depth the pieces are disjoint, so their total scanning work
is linear in `s.length`. Moving to a child removes at least one letter that
was present in its parent. With only 26 lowercase letters, recursion has at
most 26 meaningful levels. If `k` exceeds a region's length, the same rule
naturally splits it until no nonempty candidate remains.

**Complexity:** `O(26n)` time and `O(n)` auxiliary space.
