class Solution {
  public:
    int minOperations(vector<int> &nums, vector<int> &numsDivide) {
        int g = 0;
        for (int value : numsDivide) {
            g = std::gcd(g, value);
        }
        sort(nums.begin(), nums.end());
        for (int i = 0; i < (int)nums.size(); i++) {
            if (g % nums[i] == 0) {
                return i;
            }
        }
        return -1;
    }
};
