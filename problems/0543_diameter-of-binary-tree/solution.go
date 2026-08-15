func diameterOfBinaryTree(root *TreeNode) int {
	diameter := 0

	var height func(node *TreeNode) int
	height = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		left := height(node.Left)
		right := height(node.Right)
		if left+right > diameter {
			diameter = left + right
		}
		if left > right {
			return 1 + left
		}
		return 1 + right
	}

	height(root)
	return diameter
}
