class Solution {
  public:
    bool carriesChildSum(TreeNode *root) { return root->val == root->left->val + root->right->val; }
};
