# Solutions — First Missing Positive

## Cyclic Sort (Index as Hash)

The answer must lie in the range `[1, n+1]`, where `n` is the length of the array: if all of `1..n` are present, the answer is `n+1`; otherwise some value in `1..n` is missing. This observation lets the array itself serve as the bookkeeping structure — value `v` "belongs" at index `v-1`, so after rearranging, `nums[i] == i+1` wherever the value `i+1` exists.

The first pass performs a cyclic sort. At each index `i`, as long as `nums[i]` is a positive value in `[1, n]` and the slot it belongs to (`nums[i]-1`) does not already hold that same value, the code swaps it into its home slot. The `nums[nums[i]-1] != nums[i]` guard terminates the inner loop when the destination is already correct, which also makes duplicates harmless: a duplicate finds its target slot already occupied and stops swapping. Every swap places at least one value into its final position and no value ever leaves its correct slot, so the total number of swaps across the entire outer loop is at most `n` — the double loop is `O(n)` amortized, not quadratic. Values that are zero, negative, or larger than `n` are simply skipped, since they can never be the answer nor occupy a meaningful slot.

![Cyclic sort on nums = [3,4,-1,1]: 3 swaps home to index 2, then 4 to index 3, then 1 to index 0; the final scan finds index 1 holding -1 and returns 2.](figures/solution-cyclic-sort-swaps.svg)

The second pass scans for the first index where `nums[i] != i+1` and returns `i+1` as the smallest missing positive. If every slot matches, all of `1..n` are present and `n+1` is returned. Note the code works on a defensive copy of the input (`list(nums)`) so the caller's list is never mutated; aside from that copy, the algorithm only permutes elements in place using a constant number of variables.

**Complexity:** `O(n)` time, `O(n)` space.
