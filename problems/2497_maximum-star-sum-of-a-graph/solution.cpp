class Solution {
  public:
    int maxStarSum(vector<int> &vals, vector<vector<int>> &edges, int k) {
        int n = vals.size();
        vector<vector<int>> neighbors(n);
        for (auto &edge : edges) {
            neighbors[edge[0]].push_back(vals[edge[1]]);
            neighbors[edge[1]].push_back(vals[edge[0]]);
        }
        int best = *max_element(vals.begin(), vals.end());
        for (int i = 0; i < n; i++) {
            vector<int> &adjacent = neighbors[i];
            sort(adjacent.begin(), adjacent.end(), greater<int>());
            int total = vals[i];
            int take = min(k, (int)adjacent.size());
            for (int j = 0; j < take; j++) {
                if (adjacent[j] <= 0)
                    break;
                total += adjacent[j];
            }
            if (total > best)
                best = total;
        }
        return best;
    }
};
