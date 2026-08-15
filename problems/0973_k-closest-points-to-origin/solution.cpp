class Solution {
  public:
    vector<vector<int>> kClosest(vector<vector<int>> &points, int k) {
        vector<vector<int>> pts = points;
        stable_sort(pts.begin(), pts.end(), [](const vector<int> &a, const vector<int> &b) {
            return a[0] * a[0] + a[1] * a[1] < b[0] * b[0] + b[1] * b[1];
        });
        pts.resize(k);
        return pts;
    }
};
