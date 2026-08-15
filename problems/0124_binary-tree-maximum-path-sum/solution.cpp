class Solution {
  public:
    int maxPathSum(TreeNode *root) {
        long long best = numeric_limits<long long>::min();
        gain(root, best);
        return (int)best;
    }

  private:
    long long gain(TreeNode *node, long long &best) {
        if (node == nullptr) {
            return 0;
        }
        long long left = max(gain(node->left, best), 0LL);
        long long right = max(gain(node->right, best), 0LL);
        best = max(best, (long long)node->val + left + right);
        return node->val + max(left, right);
    }
};
