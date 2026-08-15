func countNodes(root *TreeNode) int {
	var depth func(node *TreeNode, left bool) int
	depth = func(node *TreeNode, left bool) int {
		d := 0
		for node != nil {
			d++
			if left {
				node = node.Left
			} else {
				node = node.Right
			}
		}
		return d
	}

	if root == nil {
		return 0
	}
	leftDepth := depth(root, true)
	rightDepth := depth(root, false)
	if leftDepth == rightDepth {
		return (1 << uint(leftDepth)) - 1
	}
	return 1 + countNodes(root.Left) + countNodes(root.Right)
}
