class Solution {
  public:
    vector<int> getSumAbsoluteDifferences(vector<int> &nums) {
        int n = nums.size();
        long long total = 0;
        for (int x : nums)
            total += x;
        long long prefix = 0;
        vector<int> result;
        result.reserve(n);
        for (int i = 0; i < n; i++) {
            long long x = nums[i];
            long long left = x * i - prefix;
            long long suffix = total - prefix - x;
            long long right = suffix - x * (n - i - 1);
            result.push_back((int)(left + right));
            prefix += x;
        }
        return result;
    }
};
