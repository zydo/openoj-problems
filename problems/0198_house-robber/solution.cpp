class Solution {
  public:
    int rob(vector<int> &nums) {
        long long prev = 0, cur = 0;
        for (int x : nums) {
            long long next = max(cur, prev + x);
            prev = cur;
            cur = next;
        }
        return (int)cur;
    }
};
