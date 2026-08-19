class Solution {
  public:
    int minStations(int n, vector<int> &radii) {
        int total = radii.size();
        // Each tap becomes the interval [i-r, i+r] clamped to [0, n]; the task
        // is the classic minimum-interval-cover of the garden segment.
        vector<pair<int, int>> intervals;
        intervals.reserve(total);
        for (int i = 0; i < total; i++) {
            intervals.emplace_back(max(0, i - radii[i]), min(n, i + radii[i]));
        }
        // Sorting by left endpoint makes the sweep a single pass.
        sort(intervals.begin(), intervals.end());
        int count = 0;
        int covered = 0;
        int i = 0;
        while (covered < n) {
            // Among all intervals that start at or before the watered prefix,
            // take the farthest reach — the jump-game argument: any solution
            // must cross the current boundary, and the farthest reach leaves
            // the most room for the remaining cover.
            int reach = covered;
            while (i < total && intervals[i].first <= covered) {
                reach = max(reach, intervals[i].second);
                // Once an interval's start exceeds `covered` it exceeds every
                // earlier value too, so i is never revisited.
                i++;
            }
            if (reach == covered) {
                // No interval connects to the watered prefix: unwatered gap.
                return -1;
            }
            covered = reach;
            count++;
        }
        return count;
    }
};
