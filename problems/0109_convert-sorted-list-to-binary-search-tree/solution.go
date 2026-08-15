func sortedListToBST(head *ListNode) *TreeNode {
	return buildList(head)
}

func buildList(node *ListNode) *TreeNode {
	if node == nil {
		return nil
	}
	if node.Next == nil {
		return &TreeNode{Val: node.Val}
	}
	var prev *ListNode
	slow, fast := node, node
	for fast != nil && fast.Next != nil {
		prev = slow
		slow = slow.Next
		fast = fast.Next.Next
	}
	prev.Next = nil
	root := &TreeNode{Val: slow.Val}
	root.Left = buildList(node)
	root.Right = buildList(slow.Next)
	return root
}
