func spliceTwoSortedLists(first *ListNode, second *ListNode) *ListNode {
	// Base case: an empty list is already sorted, so the other list —
	// whatever remains of it — is the merged continuation as is.
	if first == nil {
		return second
	}
	if second == nil {
		return first
	}
	// The smaller head stands in front; the recursion merges what follows
	// it with the untouched other list. <= keeps first first on ties,
	// matching the iterative merge's stability.
	if first.Val <= second.Val {
		first.Next = spliceTwoSortedLists(first.Next, second)
		return first
	}
	second.Next = spliceTwoSortedLists(first, second.Next)
	return second
}
