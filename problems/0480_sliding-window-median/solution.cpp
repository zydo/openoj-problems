class Solution {
  public:
    vector<double> medianSlidingWindow(vector<int> &nums, int k) {
        vector<int> window;
        window.reserve(nums.size());
        vector<double> out;
        out.reserve(nums.size() - k + 1);
        for (int i = 0; i < (int)nums.size(); ++i) {
            window.insert(lower_bound(window.begin(), window.end(), nums[i]), nums[i]);
            if (i >= k) {
                window.erase(lower_bound(window.begin(), window.end(), nums[i - k]));
            }
            if (i >= k - 1) {
                if (k & 1) {
                    out.push_back((double)window[k / 2]);
                } else {
                    out.push_back(((long long)window[k / 2 - 1] + (long long)window[k / 2]) / 2.0);
                }
            }
        }
        return out;
    }
};
