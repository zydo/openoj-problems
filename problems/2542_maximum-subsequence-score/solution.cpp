class Solution {
  public:
    long long maxScore(vector<int> &nums1, vector<int> &nums2, int k) {
        int n = nums1.size();
        vector<int> idx(n);
        for (int i = 0; i < n; i++)
            idx[i] = i;
        stable_sort(idx.begin(), idx.end(), [&](int a, int b) { return nums2[a] > nums2[b]; });
        priority_queue<int, vector<int>, greater<int>> heap;
        long long total = 0;
        long long best = 0;
        for (int i = 0; i < n; i++) {
            int j = idx[i];
            heap.push(nums1[j]);
            total += nums1[j];
            if ((int)heap.size() > k) {
                total -= heap.top();
                heap.pop();
            }
            if ((int)heap.size() == k) {
                best = max(best, total * (long long)nums2[j]);
            }
        }
        return best;
    }
};
