class Solution {
  public:
    vector<vector<int>> merge(vector<vector<int>> &intervals) {
        vector<vector<int>> ordered(intervals);
        sort(ordered.begin(), ordered.end());
        vector<vector<int>> merged;
        for (auto &interval : ordered) {
            int start = interval[0];
            int end = interval[1];
            if (!merged.empty() && start <= merged.back()[1]) {
                if (end > merged.back()[1]) {
                    merged.back()[1] = end;
                }
            } else {
                merged.push_back({start, end});
            }
        }
        return merged;
    }
};
