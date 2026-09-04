# Solutions — Contains Duplicate

## Hash Set Membership

The question "does any value appear twice?" only needs memory of the values already visited. A single left-to-right pass keeps every seen value in a hash set and checks each new element for membership _before_ inserting it — the moment an element is already present, the second occurrence has been found and the scan stops early with true.

Because the check precedes the insert, a duplicate is caught exactly when its second copy arrives, never falsely on the first. If the loop finishes without a hit, every element was distinct at insertion time and the answer is false. Hash set lookups and inserts are average O(1), so the whole pass is linear even for the full 10^5-element range.

The early return means the best case (a duplicate near the front) touches only a few elements, while the worst case stores the entire array in the set before concluding all values are distinct.

**Complexity:** `O(n)` time, `O(n)` space.
