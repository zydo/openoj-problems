func addDigitLists(first *ListNode, second *ListNode) *ListNode {
	// Dummy head anchors the result list so the first node is not a
	// special case; tail always points at the last node built.
	dummy := &ListNode{Val: 0}
	tail := dummy
	carry := 0
	// One loop condition covers all edge cases at once: lists of unequal
	// length and a leftover final carry (5 + 5 -> [0, 1]).
	for first != nil || second != nil || carry != 0 {
		// A list that has run out simply contributes nothing.
		total := carry
		if first != nil {
			total += first.Val
			first = first.Next
		}
		if second != nil {
			total += second.Val
			second = second.Next
		}
		// Split the column total into the new carry and the digit to append.
		carry = total / 10
		tail.Next = &ListNode{Val: total % 10}
		tail = tail.Next
	}
	// Both inputs are exhausted and the carry is zero: the sum is complete.
	return dummy.Next
}
