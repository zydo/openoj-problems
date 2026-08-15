func balanceBST(root *TreeNode) *TreeNode {
	values := []int{}
	stack := []*TreeNode{}
	current := root
	for len(stack) > 0 || current != nil {
		for current != nil {
			stack = append(stack, current)
			current = current.Left
		}
		current = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		values = append(values, current.Val)
		current = current.Right
	}

	var build func(lo, hi int) *TreeNode
	build = func(lo, hi int) *TreeNode {
		if lo > hi {
			return nil
		}
		mid := lo + (hi-lo)/2
		node := &TreeNode{Val: values[mid]}
		node.Left = build(lo, mid-1)
		node.Right = build(mid+1, hi)
		return node
	}

	return build(0, len(values)-1)
}
