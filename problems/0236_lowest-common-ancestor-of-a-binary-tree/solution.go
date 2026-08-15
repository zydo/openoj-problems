func lowestCommonAncestor(root *TreeNode, p int, q int) int {
	return find(root, p, q).Val
}

func find(node *TreeNode, p int, q int) *TreeNode {
	if node == nil || node.Val == p || node.Val == q {
		return node
	}
	left := find(node.Left, p, q)
	right := find(node.Right, p, q)
	if left != nil && right != nil {
		return node
	}
	if left != nil {
		return left
	}
	return right
}
