func mergeKLists(lists []*ListNode) *ListNode {
	cur := make([]*ListNode, len(lists))
	copy(cur, lists)
	if len(cur) == 0 {
		return nil
	}
	for len(cur) > 1 {
		var next []*ListNode
		for i := 0; i < len(cur); i += 2 {
			if i+1 < len(cur) {
				next = append(next, merge2(cur[i], cur[i+1]))
			} else {
				next = append(next, cur[i])
			}
		}
		cur = next
	}
	return cur[0]
}

func merge2(a, b *ListNode) *ListNode {
	dummy := &ListNode{Val: 0}
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
