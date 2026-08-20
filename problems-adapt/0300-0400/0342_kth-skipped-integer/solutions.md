# Solutions — Kth Skipped Integer

## Binary Search on the Shortfall

Fix the first entry as an anchor. In an array that skipped nothing, index i would
carry the value nums[0] + i, so the difference shortfall(i) = nums[i] − nums[0] − i
is a direct count of the integers that were passed over before nums[i] appears.
Because the entries climb by at least one each step, this count can only stay put
or grow as i advances — and a quantity that is monotone in the index is precisely
what binary search consumes.

The tail deserves its own branch. shortfall(n − 1) is the total number of skipped
integers the array itself accounts for; when that total is under k, the target is
above the final entry, at nums[n − 1] + (k − shortfall(n − 1)). On [1,10] with
k = 6, for instance, shortfall(1) = 10 − 1 − 1 = 8 ≥ 6, so this branch does not
fire; on [5,6,7] with k = 4 it does, giving 7 + (4 − 0) = 11.

Otherwise search for the leftmost index lo whose shortfall has reached k. Since
shortfall(0) is always 0 and k is at least 1, index 0 never qualifies, so lo lands
at 1 or beyond and lo − 1 is a real index. The k-th skipped integer then lies in
the gap that opens right after nums[lo − 1]: start at that entry and step forward
by the k − shortfall(lo − 1) values still owed. Take [2,3,6,7,11] with k = 2. The
shortfalls read 0, 0, 2, 2, 5, so lo = 2, and the answer is nums[1] + (2 − 0) = 5.

Each probe is a subtraction, so the halving loop dominates.

**Complexity:** `O(log n)` time, `O(1)` space.
