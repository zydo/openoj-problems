# Solutions — Find the Length of the Longest Common Prefix

## Hash set of decimal prefixes

Two integers share a common prefix of length `L` exactly when their first `L` digits agree, so the whole cross-product question collapses to set membership: put every prefix of every element of `arr1` into a hash set, then test prefixes of `arr2` elements against it.

Insertion folds digits left to right (`v = v * 10 + digit`) and adds each intermediate value, so one pass over `arr1` registers up to `D` prefixes per number, with `D <= 9` since values are at most 10^8. For each `y` in `arr2`, walk its prefixes in increasing length and track the longest one found in the set.

The scan over `arr2` can stop at the first miss: prefixes nest, so once a length-L prefix of `y` is absent from the set, no longer prefix of `y` can match any prefix of any `arr1` element either. The break also keeps queries with tiny shared prefixes from grinding through all 9 digits.

**Complexity:** `O((|arr1| + |arr2|) * D)` time, `O(|arr1| * D)` space.
