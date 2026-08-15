func bstToGst(root *TreeNode) *TreeNode {
	total := 0
	reverseInorder(root, &total)
	return root
}

func reverseInorder(current *TreeNode, total *int) {
	if current == nil {
		return
	}
	reverseInorder(current.Right, total)
	*total += current.Val
	current.Val = *total
	reverseInorder(current.Left, total)
}
