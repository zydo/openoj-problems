class Solution {
  public:
    long long countInterestingSubarrays(vector<int> &nums, int modulo, int k) {
        unordered_map<int, long long> count;
        count[0] = 1;
        int pref = 0;
        long long ans = 0;
        for (int x : nums) {
            if (x % modulo == k)
                pref++;
            int need = ((pref - k) % modulo + modulo) % modulo;
            ans += count[need];
            count[pref % modulo]++;
        }
        return ans;
    }
};
