type cycleListNode struct {
	val  int
	next *cycleListNode
}

func hasCycle(values []int, pos int) bool {
	if len(values) == 0 {
		return false
	}
	nodes := make([]*cycleListNode, len(values))
	for i, v := range values {
		nodes[i] = &cycleListNode{val: v}
	}
	for i := 0; i+1 < len(nodes); i++ {
		nodes[i].next = nodes[i+1]
	}
	if pos != -1 {
		nodes[len(nodes)-1].next = nodes[pos]
	}
	slow := nodes[0]
	fast := nodes[0]
	for fast != nil && fast.next != nil {
		slow = slow.next
		fast = fast.next.next
		if slow == fast {
			return true
		}
	}
	return false
}
