class Solution {
  public:
    int twoCitySchedCost(vector<vector<int>> &costs) {
        vector<vector<int>> ordered(costs);
        sort(ordered.begin(), ordered.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[0] - a[1] < b[0] - b[1]; });
        int n = (int)ordered.size() / 2;
        int total = 0;
        for (int i = 0; i < (int)ordered.size(); i++) {
            total += i < n ? ordered[i][0] : ordered[i][1];
        }
        return total;
    }
};
