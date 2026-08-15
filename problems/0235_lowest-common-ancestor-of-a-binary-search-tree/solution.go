func lowestCommonAncestor(root *TreeNode, p int, q int) int {
	node := root
	for node != nil {
		if p < node.Val && q < node.Val {
			node = node.Left
		} else if p > node.Val && q > node.Val {
			node = node.Right
		} else {
			return node.Val
		}
	}
	return -1
}
