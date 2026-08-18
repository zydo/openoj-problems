class Solution {
  public:
    int minCoveringPositions(vector<vector<int>> &intervals) {
        sort(intervals.begin(), intervals.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[1] < b[1]; });
        // Position-cover greedy: sort by right endpoint and place a position at the
        // right end of the first uncovered interval — among the positions
        // covering it, the right endpoint reaches every interval that any
        // earlier position could.
        int chosen = 0;
        // Sentinel below any coordinate (coordinates span signed 32-bit).
        long long lastPosition = LLONG_MIN;
        for (const auto &interval : intervals) {
            // Strict >: intervals are closed, so start == lastPosition is
            // already covered; otherwise place a position at the earliest end remaining.
            if (interval[0] > lastPosition) {
                chosen++;
                lastPosition = interval[1];
            }
        }
        return chosen;
    }
};
