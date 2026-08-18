func spliceTwoSortedLists(first *ListNode, second *ListNode) *ListNode {
	// Dummy head: every attachment happens the same way, with no special
	// case for the first node; the real head is simply dummy.Next.
	dummy := &ListNode{Val: 0}
	tail := dummy
	// Both lists sorted, so the merged list's next node is always the
	// smaller of the two current heads. Each iteration consumes one node for
	// good, bounding the walk by the combined length.
	for first != nil && second != nil {
		// <= takes first on ties, keeping the merge stable with respect to
		// the first list.
		if first.Val <= second.Val {
			tail.Next = first
			first = first.Next
		} else {
			tail.Next = second
			second = second.Next
		}
		tail = tail.Next
	}
	// Whatever survives is already the sorted continuation -- splice it on
	// in one assignment instead of walking it node by node.
	if first != nil {
		tail.Next = first
	} else {
		tail.Next = second
	}
	return dummy.Next
}
