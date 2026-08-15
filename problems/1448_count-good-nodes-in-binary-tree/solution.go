func goodNodes(root *TreeNode) int {
	return dfs(root, root.Val)
}

func dfs(node *TreeNode, maxSoFar int) int {
	if node == nil {
		return 0
	}
	count := 0
	if node.Val >= maxSoFar {
		count = 1
		maxSoFar = node.Val
	}
	return count + dfs(node.Left, maxSoFar) + dfs(node.Right, maxSoFar)
}
