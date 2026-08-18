class Solution {

    public ListNode spliceTwoSortedLists(ListNode first, ListNode second) {
        // Dummy head: every attachment happens the same way, with no special
        // case for the first node; the real head is simply dummy.next.
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        // Both lists sorted, so the merged list's next node is always the
        // smaller of the two current heads. Each iteration consumes one node
        // for good, bounding the walk by the combined length.
        while (first != null && second != null) {
            // <= takes first on ties, keeping the merge stable with respect
            // to the first list.
            if (first.val <= second.val) {
                tail.next = first;
                first = first.next;
            } else {
                tail.next = second;
                second = second.next;
            }
            tail = tail.next;
        }
        // Whatever survives is already the sorted continuation -- splice it
        // on in one assignment instead of walking it node by node.
        tail.next = first != null ? first : second;
        return dummy.next;
    }
}
