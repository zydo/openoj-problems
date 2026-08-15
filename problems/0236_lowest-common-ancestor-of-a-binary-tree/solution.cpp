class Solution {
  public:
    int lowestCommonAncestor(TreeNode *root, int p, int q) { return find(root, p, q)->val; }

  private:
    TreeNode *find(TreeNode *node, int p, int q) {
        if (node == nullptr || node->val == p || node->val == q) {
            return node;
        }
        TreeNode *left = find(node->left, p, q);
        TreeNode *right = find(node->right, p, q);
        if (left && right) {
            return node;
        }
        return left ? left : right;
    }
};
