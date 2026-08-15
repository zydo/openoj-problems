class Solution {
  public:
    int pathSum(TreeNode *root, int targetSum) {
        unordered_map<long long, long long> counter;
        counter[0] = 1;
        return dfs(root, 0, targetSum, counter);
    }

  private:
    long long dfs(TreeNode *node, long long running, int targetSum,
                  unordered_map<long long, long long> &counter) {
        if (node == nullptr) {
            return 0;
        }
        running += node->val;
        long long total = counter.count(running - targetSum) ? counter[running - targetSum] : 0;
        counter[running] += 1;
        total += dfs(node->left, running, targetSum, counter);
        total += dfs(node->right, running, targetSum, counter);
        counter[running] -= 1;
        return total;
    }
};
