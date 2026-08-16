# Solutions — 4Sum II

## Meet in the Middle

Enumerating all `(i, j, k, l)` tuples is `O(n^4)` — hopeless even at n = 200 (1.6 billion combinations). The split trick is to observe that the equation `a + b + c + d = 0` can be cut in half: it holds exactly when `a + b = -(c + d)`. The four arrays form two independent pairs, so counts of pair sums can be joined through a hash map.

First the code builds `sums`, a map from each value `a + b` (over all n^2 index pairs from the first two arrays) to the number of pairs producing it. Then it walks the n^2 pairs of the last two arrays and, for each `c + d`, adds `sums[-(c + d)]` — the number of ways the first half could have summed to exactly the negation. Every zero-sum tuple is counted once through its unique `(i, j)` and `(k, l)` split, so the total is exact, and duplicates in the arrays cause no trouble because the map stores multiplicities rather than a set of sums.

Both loops are plain double iterations with O(1) average hash operations, turning quartic work into quadratic. With n up to 200 that is 40,000 map insertions and 40,000 lookups, and sums fit comfortably in machine integers since values are bounded by 2^28.

**Complexity:** `O(n^2)` time, `O(n^2)` space for the pair-sum map.
