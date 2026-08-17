class Solution {
  public:
    vector<vector<int>> employeeFreeTime(vector<vector<vector<int>>> &schedule) {
        vector<pair<int, int>> intervals;
        for (const auto &employee : schedule) {
            for (const auto &interval : employee) {
                intervals.emplace_back(interval[0], interval[1]);
            }
        }
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> free;
        bool started = false;
        int previousEnd = 0;
        for (const auto &[start, end] : intervals) {
            if (started && start > previousEnd) {
                free.push_back({previousEnd, start});
            }
            previousEnd = !started ? end : max(previousEnd, end);
            started = true;
        }
        return free;
    }
};
