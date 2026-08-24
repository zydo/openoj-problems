# Solutions — Find All Numbers Disappeared in an Array

## In-place sign marking

Because every value lies in `[1, n]`, the array's own indices can serve as the
hash table: value `v` is assigned slot `v - 1`. One linear pass reads each
element, maps it to its slot, and flips that slot's sign to record "value
seen". Reading `abs(nums[i])` keeps the pass correct even when the element
being read has already taken a flip from an earlier visit, and repeats are
harmless: only the first visit to a slot changes anything.

A second sweep then reads the marks back. Slot `i` still positive means the
value `i + 1` was never written anywhere in the array, so it belongs to the
answer; collecting in index order gathers the values ascending by
construction, which is exactly the order this judge pins. The same sweep
restores every negative mark with `abs`, leaving the array exactly as it
arrived.

Both passes touch nothing but the array plus the output list, and the
follow-up excludes the returned list from the space budget, so the whole
answer to "without extra space" is just these two sweeps.

**Complexity:** `O(n)` time, `O(1)` auxiliary space, excluding the output.
