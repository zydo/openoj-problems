class Solution {
  public:
    int minTaps(int n, vector<int> &ranges) {
        int total = ranges.size();
        vector<pair<int, int>> intervals;
        intervals.reserve(total);
        for (int i = 0; i < total; i++) {
            intervals.emplace_back(max(0, i - ranges[i]), min(n, i + ranges[i]));
        }
        sort(intervals.begin(), intervals.end());
        int count = 0;
        int covered = 0;
        int i = 0;
        while (covered < n) {
            int reach = covered;
            while (i < total && intervals[i].first <= covered) {
                reach = max(reach, intervals[i].second);
                i++;
            }
            if (reach == covered) {
                return -1;
            }
            covered = reach;
            count++;
        }
        return count;
    }
};
