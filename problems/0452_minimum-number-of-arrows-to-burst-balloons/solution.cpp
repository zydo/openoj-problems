class Solution {
  public:
    int findMinArrowShots(vector<vector<int>> &points) {
        sort(points.begin(), points.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[1] < b[1]; });
        int arrows = 0;
        long long lastArrow = LLONG_MIN;
        for (const auto &point : points) {
            if (point[0] > lastArrow) {
                arrows++;
                lastArrow = point[1];
            }
        }
        return arrows;
    }
};
