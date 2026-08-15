class Solution {
  public:
    int countDistinct(vector<int> &nums, int k, int p) {
        unordered_set<string> seen;
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            int divisible = 0;
            string cur;
            for (int j = i; j < n; j++) {
                if (nums[j] % p == 0)
                    divisible += 1;
                if (!cur.empty())
                    cur += ',';
                cur += to_string(nums[j]);
                if (divisible > k)
                    break;
                seen.insert(cur);
            }
        }
        return (int)seen.size();
    }
};
