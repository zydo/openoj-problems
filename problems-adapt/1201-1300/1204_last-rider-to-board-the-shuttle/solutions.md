# Solutions — Last Rider to Board the Shuttle

## Running total over boarding order

The shuttle admits riders strictly in `slot` order, so a running total of `weight` ordered by `slot` tells us, for every rider, the combined weight on board the moment they step on. A window `SUM(weight) OVER (ORDER BY slot)` computes exactly that cumulative weight for each row in one pass over the table.

A rider boards only while that running total stays at or below the 1000-kilogram rating. Filtering `WHERE total <= 1000` keeps precisely the riders who fit; among them the answer is the one with the largest `slot`, so ordering those survivors by `slot` descending and taking the first row yields the name of the last rider to board. The guarantee that the first rider fits ensures the filtered set is never empty.

**Complexity:** `O(n log n)` time (the window is ordered by `slot`) and `O(n)` space.
