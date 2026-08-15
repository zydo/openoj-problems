class Solution {
  public:
    int distributeCoins(TreeNode *root) {
        int moves = 0;
        dfs(root, moves);
        return moves;
    }

  private:
    // Returns the net coin flow out of this subtree.
    int dfs(TreeNode *node, int &moves) {
        if (node == nullptr) {
            return 0;
        }
        int left = dfs(node->left, moves);
        int right = dfs(node->right, moves);
        moves += abs(left) + abs(right);
        return node->val + left + right - 1;
    }
};
