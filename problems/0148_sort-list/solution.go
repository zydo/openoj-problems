func sortList(head *ListNode) *ListNode {
	var merge func(a, b *ListNode) *ListNode
	merge = func(a, b *ListNode) *ListNode {
		dummy := &ListNode{}
		tail := dummy
		for a != nil && b != nil {
			if a.Val <= b.Val {
				tail.Next = a
				a = a.Next
			} else {
				tail.Next = b
				b = b.Next
			}
			tail = tail.Next
		}
		if a != nil {
			tail.Next = a
		} else {
			tail.Next = b
		}
		return dummy.Next
	}

	if head == nil || head.Next == nil {
		return head
	}
	slow := head
	fast := head.Next
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	mid := slow.Next
	slow.Next = nil
	left := sortList(head)
	right := sortList(mid)
	return merge(left, right)
}
