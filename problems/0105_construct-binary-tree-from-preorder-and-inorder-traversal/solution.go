func buildTree(preorder []int, inorder []int) *TreeNode {
	index := make(map[int]int)
	for i, v := range inorder {
		index[v] = i
	}
	position := 0

	var build func(low, high int) *TreeNode
	build = func(low, high int) *TreeNode {
		if low >= high {
			return nil
		}
		value := preorder[position]
		position++
		node := &TreeNode{Val: value}
		mid := index[value]
		node.Left = build(low, mid)
		node.Right = build(mid+1, high)
		return node
	}

	return build(0, len(inorder))
}
