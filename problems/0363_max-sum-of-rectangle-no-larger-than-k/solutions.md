# Solutions — Max Sum of Rectangle No Larger Than K

## Row-pair compression with sorted prefix sums

Any rectangle is determined by its top and bottom rows and a contiguous column range. The solution enumerates the top row and then extends the bottom row downward, accumulating a `col_sum` array that holds the sum of each column between the two rows — so extending the bottom by one row is a single `O(n)` update rather than a recomputation from scratch. Within a fixed row pair, every rectangle corresponds to a contiguous subarray of `col_sum`, reducing the 2D problem to "max subarray sum not exceeding k".

That 1D problem with negatives has no Kadane-style linear solution, so prefix sums do the work: a subarray sum ending at the current position equals `prefix - earlier_prefix` for some earlier prefix already seen. To maximize the sum while staying `<= k`, the code keeps all earlier prefixes in a sorted list and uses `bisect_left` to find the smallest earlier prefix `>= prefix - k`; subtracting it yields the largest candidate that does not exceed k, and `0` is seeded into the list so the subarray starting at the first column is considered too. Each new prefix is then inserted with `insort` to keep the list sorted for the next query.

The search itself is logarithmic, but inserting into a Python list shifts elements, which dominates the cost of maintaining the structure. The problem guarantees at least one rectangle with sum `<= k`, so `best` is always set before the loops end. With `m, n <= 100` the total work is comfortably small even at the worst case.

**Complexity:** `O(m²·n²)` time worst case (`m²` row pairs, each doing `n` binary searches and up to `n` linear-time insertions), `O(n)` space.
