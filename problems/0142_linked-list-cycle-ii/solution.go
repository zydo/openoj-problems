type cycleListNode struct {
	val  int
	next *cycleListNode
}

func detectCycle(values []int, pos int) int {
	if len(values) == 0 {
		return -1
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
			// Phase 2: one pointer back at the head; both advance one
			// step and meet exactly at the cycle-entry node.
			finder := nodes[0]
			for finder != slow {
				finder = finder.next
				slow = slow.next
			}
			index := 0
			entry := nodes[0]
			for entry != finder {
				entry = entry.next
				index++
			}
			return index
		}
	}
	return -1
}
