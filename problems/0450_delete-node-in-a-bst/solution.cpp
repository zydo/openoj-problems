class Solution {
  public:
    TreeNode *deleteNode(TreeNode *root, int key) { return delete_(root, key); }

  private:
    TreeNode *delete_(TreeNode *node, int key) {
        if (node == nullptr) {
            return nullptr;
        }
        if (key < node->val) {
            node->left = delete_(node->left, key);
        } else if (key > node->val) {
            node->right = delete_(node->right, key);
        } else {
            if (node->left == nullptr) {
                return node->right;
            }
            if (node->right == nullptr) {
                return node->left;
            }
            TreeNode *successor = node->right;
            while (successor->left != nullptr) {
                successor = successor->left;
            }
            node->val = successor->val;
            node->right = delete_(node->right, successor->val);
        }
        return node;
    }
};
