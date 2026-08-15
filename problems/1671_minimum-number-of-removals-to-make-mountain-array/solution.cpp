class Solution {
  public:
    int minimumMountainRemovals(vector<int> &nums) {
        int n = nums.size();
        vector<int> lis(n, 1), lds(n, 1);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i] && lis[j] + 1 > lis[i]) {
                    lis[i] = lis[j] + 1;
                }
            }
        }
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i + 1; j < n; j++) {
                if (nums[j] < nums[i] && lds[j] + 1 > lds[i]) {
                    lds[i] = lds[j] + 1;
                }
            }
        }
        int best = 0;
        for (int i = 0; i < n; i++) {
            if (lis[i] >= 2 && lds[i] >= 2) {
                best = max(best, lis[i] + lds[i] - 1);
            }
        }
        return n - best;
    }
};
