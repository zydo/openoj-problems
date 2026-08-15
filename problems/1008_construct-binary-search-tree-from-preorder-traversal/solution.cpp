class Solution {
  public:
    TreeNode *bstFromPreorder(vector<int> &preorder) {
        int index = 0;
        return build(preorder, index, LLONG_MIN, LLONG_MAX);
    }

  private:
    TreeNode *build(vector<int> &preorder, int &index, long long low, long long high) {
        if (index == (int)preorder.size()) {
            return nullptr;
        }
        int value = preorder[index];
        if (value < low || value > high) {
            return nullptr;
        }
        index++;
        TreeNode *node = new TreeNode(value);
        node->left = build(preorder, index, low, (long long)value - 1);
        node->right = build(preorder, index, (long long)value + 1, high);
        return node;
    }
};
