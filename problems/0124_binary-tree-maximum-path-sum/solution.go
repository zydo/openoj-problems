func maxPathSum(root *TreeNode) int {
	best := int64(1) << 62
	best = -best
	gain(root, &best)
	return int(best)
}

func gain(node *TreeNode, best *int64) int64 {
	if node == nil {
		return 0
	}
	left := gain(node.Left, best)
	if left < 0 {
		left = 0
	}
	right := gain(node.Right, best)
	if right < 0 {
		right = 0
	}
	total := int64(node.Val) + left + right
	if total > *best {
		*best = total
	}
	single := int64(node.Val) + left
	if right > left {
		single = int64(node.Val) + right
	}
	return single
}
