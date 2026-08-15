class Solution {
  public:
    TreeNode *buildTree(vector<int> &preorder, vector<int> &inorder) {
        unordered_map<int, int> index;
        for (int i = 0; i < (int)inorder.size(); i++) {
            index[inorder[i]] = i;
        }
        int position = 0;
        return build(preorder, index, position, 0, inorder.size());
    }

  private:
    TreeNode *build(vector<int> &preorder, unordered_map<int, int> &index, int &position, int low,
                    int high) {
        if (low >= high) {
            return nullptr;
        }
        int value = preorder[position];
        position++;
        TreeNode *node = new TreeNode(value);
        int mid = index[value];
        node->left = build(preorder, index, position, low, mid);
        node->right = build(preorder, index, position, mid + 1, high);
        return node;
    }
};
