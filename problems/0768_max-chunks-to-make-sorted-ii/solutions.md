# Solutions — Max Chunks To Make Sorted II

## Running multiset balance against the sorted array

Index `k` is a legal chunk boundary exactly when the multiset of `arr[:k]` equals the multiset of `sorted(arr)[:k]`: only then does sorting each side independently and concatenating reproduce the fully sorted array (unlike the permutation version of this problem, values can repeat, so multisets rather than max/min ranges are needed).

Sorting a copy gives the target, then compare the two arrays in lockstep with a count map and a running balance. For each position, increment the count of the original value and decrement the count of the sorted value. Each operation adjusts the balance by `+1` when it leaves a value's count nonzero (a new unpaired element) and by `-1` when it brings a value's count back to zero (pairing off a previously unpaired element). The balance therefore equals the total number of unpaired elements, and it returns to zero precisely when every value's copies in the prefix have been matched — cut a chunk there.

Cutting at every zero-balance position yields the maximum number of chunks, since each cut happens at the earliest index where the prefix multisets agree; any later cut would only merge chunks. A strictly decreasing array never balances until the end, giving one chunk, while an already-sorted array balances at every index.

**Complexity:** `O(n log n)` time (dominated by the sort; the sweep is linear), `O(n)` space.
