class Solution {
  public:
    int lowestCommonAncestor(TreeNode *root, int p, int q) {
        TreeNode *node = root;
        while (node) {
            if (p < node->val && q < node->val) {
                node = node->left;
            } else if (p > node->val && q > node->val) {
                node = node->right;
            } else {
                return node->val;
            }
        }
        return -1;
    }
};
