class Solution {
  public:
    vector<vector<int>> combinationSum(vector<int> &candidates, int target) {
        vector<vector<int>> results;
        vector<int> path;
        backtrack(candidates, 0, target, path, results);
        return results;
    }

  private:
    void backtrack(vector<int> &candidates, int start, int remaining, vector<int> &path,
                   vector<vector<int>> &results) {
        if (remaining == 0) {
            results.push_back(path);
            return;
        }
        for (int i = start; i < (int)candidates.size(); i++) {
            int value = candidates[i];
            if (value > remaining)
                continue;
            path.push_back(value);
            backtrack(candidates, i, remaining - value, path, results);
            path.pop_back();
        }
    }
};
