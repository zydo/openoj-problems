class Solution {
  public:
    int diameterOfBinaryTree(TreeNode *root) {
        int diameter = 0;
        height(root, diameter);
        return diameter;
    }

  private:
    int height(TreeNode *node, int &diameter) {
        if (node == nullptr) {
            return 0;
        }
        int left = height(node->left, diameter);
        int right = height(node->right, diameter);
        diameter = max(diameter, left + right);
        return 1 + max(left, right);
    }
};
