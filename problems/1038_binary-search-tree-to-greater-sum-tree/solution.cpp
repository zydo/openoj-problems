class Solution {
  public:
    TreeNode *bstToGst(TreeNode *root) {
        int total = 0;
        reverseInorder(root, total);
        return root;
    }

  private:
    void reverseInorder(TreeNode *current, int &total) {
        if (current == nullptr) {
            return;
        }
        reverseInorder(current->right, total);
        total += current->val;
        current->val = total;
        reverseInorder(current->left, total);
    }
};
