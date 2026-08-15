class Solution {
  public:
    long long countGood(vector<int> &nums, int k) {
        unordered_map<int, long long> count;
        long long pairs = 0;
        long long ans = 0;
        long long left = 0;
        long long n = nums.size();
        for (long long right = 0; right < n; right++) {
            int x = nums[right];
            pairs += count[x];
            count[x] += 1;
            while (pairs >= k) {
                ans += n - right;
                int y = nums[left];
                count[y] -= 1;
                pairs -= count[y];
                left += 1;
            }
        }
        return ans;
    }
};
