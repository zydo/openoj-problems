class Solution {
  public:
    int shortestSubarray(vector<int> &nums, int k) {
        int n = nums.size();
        vector<long long> prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        deque<int> dq;
        int best = n + 1;
        for (int i = 0; i <= n; i++) {
            long long p = prefix[i];
            while (!dq.empty() && prefix[dq.front()] <= p - k) {
                best = min(best, i - dq.front());
                dq.pop_front();
            }
            while (!dq.empty() && prefix[dq.back()] >= p) {
                dq.pop_back();
            }
            dq.push_back(i);
        }
        return best <= n ? best : -1;
    }
};
