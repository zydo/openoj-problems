type cycleListNode struct {
	val  int
	next *cycleListNode
}

func listContainsCycle(values []int, tailLink int) bool {
	if len(values) == 0 {
		// Empty input is acyclic by convention.
		return false
	}
	// Materialize the wire form: one node per value, then link in order.
	nodes := make([]*cycleListNode, len(values))
	for i, v := range values {
		nodes[i] = &cycleListNode{val: v}
	}
	for i := 0; i+1 < len(nodes); i++ {
		nodes[i].next = nodes[i+1]
	}
	// Close the cycle by pointing the tail at the given index.
	if tailLink != -1 {
		nodes[len(nodes)-1].next = nodes[tailLink]
	}
	// Floyd's tortoise and hare: slow advances one node per step, fast two.
	slow := nodes[0]
	fast := nodes[0]
	for fast != nil && fast.next != nil {
		slow = slow.next
		fast = fast.next.next
		// fast gains one node per lap on slow, so inside a cycle it must
		// catch slow within a single lap: meeting proves the cycle.
		if slow == fast {
			return true
		}
	}
	// fast ran past the end of the list: no cycle.
	return false
}
