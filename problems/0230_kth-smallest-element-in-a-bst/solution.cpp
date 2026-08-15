class Solution {
  public:
    int kthSmallest(TreeNode *root, int k) {
        vector<TreeNode *> stack;
        TreeNode *node = root;
        while (node || !stack.empty()) {
            while (node) {
                stack.push_back(node);
                node = node->left;
            }
            node = stack.back();
            stack.pop_back();
            --k;
            if (k == 0) {
                return node->val;
            }
            node = node->right;
        }
        return -1;
    }
};
