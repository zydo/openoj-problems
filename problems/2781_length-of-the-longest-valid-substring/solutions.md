# Solutions — Length of the Longest Valid Substring

## Sliding Window with a Forbidden Set

Validity is hereditary — shrinking a valid window keeps it valid — so the longest valid substring fits a two-pointer sweep: advance `right` one character at a time and, whenever a forbidden string now ends at `right`, jump `left` past its start. Because every forbidden string has length at most `L = 10`, only the last `L` suffixes ending at `right` can possibly be forbidden, and a hash set of the forbidden strings answers each membership test in time proportional to the slice length.

For each new `right` the code tests those suffixes shortest-first and moves `left` to `j + 1` at the first match. Taking the shortest matching suffix — the one with the latest start — is the binding choice: it yields the largest window start that excludes every forbidden occurrence, since a longer match beginning further left is simply not contained in the resulting window. Occurrences that ended earlier were already excluded when the pointer passed their end, and `left` only ever moves right.

After each adjustment the candidate `right - left + 1` updates the answer. With `F` forbidden strings of length at most `L`, the sweep does at most `L` set lookups of length at most `L` per position, and storing the set costs the total size of the forbidden list.

**Complexity:** `O(n * L^2)` time, `O(F * L)` space.
