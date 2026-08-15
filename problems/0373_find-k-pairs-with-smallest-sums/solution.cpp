class Solution {
  public:
    vector<vector<int>> kSmallestPairs(vector<int> &nums1, vector<int> &nums2, int k) {
        vector<vector<int>> result;
        if (nums1.empty() || nums2.empty() || k <= 0)
            return result;
        using Entry = tuple<long long, int, int>; // (sum, i, j)
        priority_queue<Entry, vector<Entry>, greater<Entry>> pq;
        int limit = min((int)nums1.size(), k);
        for (int i = 0; i < limit; i++) {
            pq.emplace((long long)nums1[i] + nums2[0], i, 0);
        }
        while (!pq.empty() && (int)result.size() < k) {
            auto [sum, i, j] = pq.top();
            pq.pop();
            result.push_back({nums1[i], nums2[j]});
            if (j + 1 < (int)nums2.size()) {
                pq.emplace((long long)nums1[i] + nums2[j + 1], i, j + 1);
            }
        }
        return result;
    }
};
