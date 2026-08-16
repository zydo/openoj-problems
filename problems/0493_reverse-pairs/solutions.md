# Solutions — Reverse Pairs

## Merge-Sort Counting

A reverse pair links an earlier element to a later one, so the array can be split in half: pairs wholly inside either half are counted by recursing, and only the cross pairs — `left[i] > 2 * right[j]` — need dedicated work. That is exactly the merge-sort skeleton: the function recursively sorts both halves, counts pairs inside each, then counts cross pairs between the two now-sorted halves, then merges them and returns the sorted run upward.

The cross count exploits both halves being sorted with a two-pointer sweep that never moves backward. For each `left[i]` in increasing order, the pointer `j` advances over `right` while `left[i] > 2 * right[j]`; the value of `j` when the loop stops is the number of right-half elements satisfying the condition, added to the total. Because the next `left[i]` is at least as large, every element the pointer already passed also qualifies for it, so `j` continues from where it stopped instead of restarting — the whole pass over a merge level is linear. Using Python integers also sidesteps the overflow trap that `2 * nums[j]` sets in fixed-width languages, since values reach both int32 extremes.

The subsequent merge is the standard stable one (`left[i] <= right[j]` takes from the left), and the identity of elements is irrelevant beyond their values — only counts matter, so sorting loses nothing. Each recursion level does linear counting plus linear merging, and there are `log n` levels over `n` elements; the extra memory is the half-slices and merged lists, which along any active recursion path sum to the array size.

**Complexity:** `O(n log n)` time, `O(n)` space.
