func distributeCoins(root *TreeNode) int {
	moves := 0

	// dfs returns the net coin flow out of this subtree.
	var dfs func(node *TreeNode) int
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		left := dfs(node.Left)
		right := dfs(node.Right)
		if left < 0 {
			moves += -left
		} else {
			moves += left
		}
		if right < 0 {
			moves += -right
		} else {
			moves += right
		}
		return node.Val + left + right - 1
	}

	dfs(root)
	return moves
}
