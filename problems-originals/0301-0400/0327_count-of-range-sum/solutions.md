# Solutions — Count of Range Sum

## Merge-Sort Divide and Conquer over Prefix Sums

Rewriting each range sum as a difference of prefixes turns the problem into counting index pairs `i < j` with `prefix[j] - prefix[i] ∈ [lower, upper]` (using a prefix array of length `n + 1` with a leading 0). A divide-and-conquer merge sort counts exactly the pairs whose endpoints land in different halves: recursively count pairs within the left half, within the right half, then count cross pairs while both halves are momentarily sorted.

The cross-counting step exploits the left half being sorted. For each left value `prefix[i]`, two pointers sweep the right half: `l` advances past all values whose difference is below `lower`, and `r` advances past all values whose difference is at most `upper`. The window `[l, r)` contains exactly the right-half entries pairing validly with `prefix[i]`, and both pointers only ever move forward — monotone because consecutive left values are non-decreasing — so the sweep costs linear time per merge rather than a nested search.

After counting, the standard stable merge of the two halves sorts the combined range, restoring the invariant the parent level relies on. The recursion bottoms out at single-element ranges contributing nothing. Python's integers are arbitrary precision, so the potentially 32-bit-overflowing prefix differences hinted at for other languages are a non-issue here.

The pair structure is why naive approaches fail: there are quadratically many `(i, j)` pairs (10⁵ elements → ~5 · 10⁹ pairs), but the divide and conquer visits each element `O(log n)` times, one count pass and one merge pass per level. Single-element arrays are counted correctly — the empty prefix 0 pairs with the sole element when its value lies in range.

**Complexity:** `O(n log n)` time, `O(n)` space.
