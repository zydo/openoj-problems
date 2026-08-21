# Solutions — Find the City With the Smallest Number of Neighbors at a Threshold Distance

## Floyd-Warshall All-Pairs Distances

With at most 100 cities, the cheapest way to know every city's neighborhood radius is to compute all-pairs shortest distances at once. The distance matrix starts with 0 on the diagonal, the direct edge weights (symmetric, since edges are bidirectional), and infinity elsewhere; a triple loop over intermediate node `k` relaxes `dist[i][j]` with `dist[i][k] + dist[k][j]`. After n passes, `dist[i][j]` is the true shortest path cost, and any pair still at infinity is genuinely disconnected. The `dik == INF` guard skips inner loops that cannot improve anything, a constant-factor trim on the standard algorithm.

The selection pass then counts, for each city i, how many other cities satisfy `dist[i][j] <= distanceThreshold`. Scanning i in increasing order and replacing the best on a strictly smaller count — or an equal count at a larger index — implements the tie-break: among cities with the same neighborhood size, the greatest number wins. Since the scan ascends, a later equal-count city always supersedes an earlier one.

Weights are strictly positive, so a city never counts itself (its self-distance is 0 but the counter excludes j == i explicitly). Disconnected graphs cause no trouble: unreachable pairs simply stay above the threshold.

**Complexity:** `O(n³)` time, `O(n²)` space.
