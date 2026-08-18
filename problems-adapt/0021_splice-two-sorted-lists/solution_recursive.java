class Solution {

    public ListNode spliceTwoSortedLists(ListNode first, ListNode second) {
        // Base case: an empty list is already sorted, so the other list —
        // whatever remains of it — is the merged continuation as is.
        if (first == null) {
            return second;
        }
        if (second == null) {
            return first;
        }
        // The smaller head stands in front; the recursion merges what follows
        // it with the untouched other list. <= keeps first first on ties,
        // matching the iterative merge's stability.
        if (first.val <= second.val) {
            first.next = spliceTwoSortedLists(first.next, second);
            return first;
        }
        second.next = spliceTwoSortedLists(first, second.next);
        return second;
    }
}
