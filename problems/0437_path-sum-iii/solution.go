func pathSum(root *TreeNode, targetSum int) int {
	counter := map[int64]int64{0: 1}

	var dfs func(node *TreeNode, running int64) int64
	dfs = func(node *TreeNode, running int64) int64 {
		if node == nil {
			return 0
		}
		running += int64(node.Val)
		total := counter[running-int64(targetSum)]
		counter[running]++
		total += dfs(node.Left, running)
		total += dfs(node.Right, running)
		counter[running]--
		return total
	}

	return int(dfs(root, 0))
}
