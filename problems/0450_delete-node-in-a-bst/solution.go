func deleteNode(root *TreeNode, key int) *TreeNode {
	var del func(node *TreeNode, key int) *TreeNode
	del = func(node *TreeNode, key int) *TreeNode {
		if node == nil {
			return nil
		}
		if key < node.Val {
			node.Left = del(node.Left, key)
		} else if key > node.Val {
			node.Right = del(node.Right, key)
		} else {
			if node.Left == nil {
				return node.Right
			}
			if node.Right == nil {
				return node.Left
			}
			successor := node.Right
			for successor.Left != nil {
				successor = successor.Left
			}
			node.Val = successor.Val
			node.Right = del(node.Right, successor.Val)
		}
		return node
	}

	return del(root, key)
}
