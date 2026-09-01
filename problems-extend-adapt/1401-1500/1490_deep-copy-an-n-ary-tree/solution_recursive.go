func copyTree(root *Node) *Node {
	if root == nil {
		return nil
	}
	clone := &Node{Val: root.Val}
	for _, child := range root.Children {
		clone.Children = append(clone.Children, copyTree(child))
	}
	return clone
}
