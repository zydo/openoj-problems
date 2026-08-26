class Solution {
  public:
    int visibleMountains(vector<vector<int>> &peaks) {
        // (u, v) = (x - y, x + y): mountain b hides peak a iff
        // u_b <= u_a and v_b >= v_a. Sort by u ascending, v descending,
        // then a peak is visible iff its v beats every earlier one strictly.
        vector<pair<long long, long long>> points;
        points.reserve(peaks.size());
        for (auto &p : peaks) {
            points.push_back({(long long)p[0] - p[1], (long long)p[0] + p[1]});
        }
        sort(points.begin(), points.end(), [](const auto &a, const auto &b) {
            if (a.first != b.first)
                return a.first < b.first;
            return a.second > b.second; // equal u: larger (negated) v first
        });
        int count = 0;
        bool seen_any = false;
        long long best = 0;
        size_t i = 0;
        while (i < points.size()) {
            size_t j = i + 1;
            while (j < points.size() && points[j] == points[i]) {
                j++;
            }
            if (j - i == 1 && (!seen_any || points[i].second > best)) {
                count++;
            }
            if (!seen_any || points[i].second > best) {
                best = points[i].second;
                seen_any = true;
            }
            i = j;
        }
        return count;
    }
};
