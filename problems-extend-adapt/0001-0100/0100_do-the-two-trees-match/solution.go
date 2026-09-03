// Synchronous recursion on both roots: the definition of "same" decomposes
// along the tree's own structure, so one call checks one aligned node pair.
func treesMatch(p *TreeNode, q *TreeNode) bool {
	// Two missing subtrees match; exactly one missing is a structural
	// mismatch — `p == q` holds only when both are nil.
	if p == nil || q == nil {
		return p == q
	}
	// Both nodes exist: values must agree here, and each aligned pair of
	// child subtrees must be the same tree by these very same rules.
	if p.Val != q.Val {
		return false
	}
	return treesMatch(p.Left, q.Left) && treesMatch(p.Right, q.Right)
}
