func rob(root *TreeNode) int {
	robHere, skipHere := best(root)
	return max(robHere, skipHere)
}

// best returns (best if node is robbed, best if node is skipped).
func best(node *TreeNode) (int, int) {
	if node == nil {
		return 0, 0
	}
	leftRob, leftSkip := best(node.Left)
	rightRob, rightSkip := best(node.Right)
	robHere := node.Val + leftSkip + rightSkip
	skipHere := max(leftRob, leftSkip) + max(rightRob, rightSkip)
	return robHere, skipHere
}
