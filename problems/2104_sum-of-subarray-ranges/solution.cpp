class Solution {
  public:
    long long subArrayRanges(vector<int> &nums) {
        int n = nums.size();
        long long total = 0;
        for (int i = 0; i < n; i++) {
            int mn = nums[i], mx = nums[i];
            for (int j = i + 1; j < n; j++) {
                if (nums[j] < mn)
                    mn = nums[j];
                else if (nums[j] > mx)
                    mx = nums[j];
                total += (long long)(mx - mn);
            }
        }
        return total;
    }
};
