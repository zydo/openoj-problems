class Solution {
  public:
    long long numberOfSubarrays(vector<int> &nums) {
        int n = nums.size();
        vector<int> leftGreater(n, -1);
        vector<int> stack;
        stack.reserve(n);
        for (int i = 0; i < n; i++) {
            int x = nums[i];
            while (!stack.empty() && nums[stack.back()] <= x) {
                stack.pop_back();
            }
            leftGreater[i] = stack.empty() ? -1 : stack.back();
            stack.push_back(i);
        }

        unordered_map<int, vector<int>> positions;
        long long ans = 0;
        for (int i = 0; i < n; i++) {
            int x = nums[i];
            vector<int> &lst = positions[x];
            int lo = 0, hi = (int)lst.size();
            while (lo < hi) {
                int mid = lo + (hi - lo) / 2;
                if (lst[mid] <= leftGreater[i]) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            long long count = 1LL + (long long)lst.size() - lo;
            ans += count;
            lst.push_back(i);
        }
        return ans;
    }
};
