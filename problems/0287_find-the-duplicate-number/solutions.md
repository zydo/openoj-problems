# Solutions — Find the Duplicate Number

## Floyd's Cycle Detection (Linked-List View)

The key reframing is to treat the array as a function from indices to indices: position `i` "points to" position `nums[i]`. Since there are `n + 1` positions but every value lies in `[1, n]`, following these pointers must eventually revisit a position — the sequence enters a cycle, and the duplicate value is precisely the cycle's entry point, because two different indices `i` and `j` with `nums[i] == nums[j] == d` both point into node `d`.

![The array [1,3,4,2,2] drawn as an implicit linked list 0 -> 1 -> 3 -> 2 -> 4 -> 2: indices 3 and 4 both point at node 2, so 2 is the cycle entry and the duplicate.](figures/solution-implicit-list-cycle.svg)

The solution runs Floyd's tortoise-and-hare on this implicit list. The tortoise advances one pointer per step (`slow = nums[slow]`) and the hare two (`fast = nums[nums[fast]]`); both start at index 0, which is significant because index 0 cannot be inside the cycle (no value is 0), guaranteeing the standard algorithm's precondition. When they meet, both are somewhere inside the cycle.

The second phase finds the cycle entrance: reset `slow` to 0 and advance both one step at a time. The classic distance argument shows they meet exactly at the entry node — if the tail before the cycle has length `μ` and the meeting point is `λ` steps past the entry, then `μ ≡ λ (mod cycle length)`, so both pointers arrive at the entry after exactly `μ` more moves. That entry index is the returned duplicate.

This satisfies both restrictions: the array is never modified and only two integer variables are used. A pathological input like `[3,3,3,3,3]`, where every node points directly to node 3, is just a cycle of length 1 preceded by a tail, and the algorithm still converges. Note the problem guarantees exactly one repeated value (appearing two or more times), which is what makes the single-cycle-entrance argument sound.

**Complexity:** `O(n)` time, `O(1)` space.
