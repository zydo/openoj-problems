class Solution {
  public:
    int minOperations(vector<int> &nums) {
        vector<int> tails;
        for (int x : nums) {
            int v = -x;
            auto it = upper_bound(tails.begin(), tails.end(), v);
            if (it == tails.end())
                tails.push_back(v);
            else
                *it = v;
        }
        return tails.size();
    }
};
