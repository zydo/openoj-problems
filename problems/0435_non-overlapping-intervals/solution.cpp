class Solution {
  public:
    int eraseOverlapIntervals(vector<vector<int>> &intervals) {
        sort(intervals.begin(), intervals.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[1] < b[1]; });
        int removed = 0;
        long long prevEnd = LLONG_MIN;
        for (const auto &interval : intervals) {
            if (interval[0] >= prevEnd) {
                prevEnd = interval[1];
            } else {
                removed++;
            }
        }
        return removed;
    }
};
