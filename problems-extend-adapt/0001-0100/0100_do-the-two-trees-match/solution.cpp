class Solution {
  public:
    bool treesMatch(TreeNode *p, TreeNode *q) {
        // Two missing subtrees match; exactly one missing is a structural
        // mismatch — `p == q` holds only when both are nullptr.
        if (p == nullptr || q == nullptr)
            return p == q;
        // Both nodes exist: values must agree here, and each aligned pair of
        // child subtrees must be the same tree by these very same rules.
        if (p->val != q->val)
            return false;
        return treesMatch(p->left, q->left) && treesMatch(p->right, q->right);
    }
};
