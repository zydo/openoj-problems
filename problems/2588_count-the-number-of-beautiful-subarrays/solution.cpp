class Solution {
  public:
    long long beautifulSubarrays(vector<int> &nums) {
        unordered_map<int, long long> count;
        count[0] = 1;
        int x = 0;
        long long ans = 0;
        for (int v : nums) {
            x ^= v;
            ans += count[x];
            count[x] += 1;
        }
        return ans;
    }
};
