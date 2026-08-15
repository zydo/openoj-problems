class Solution {
  public:
    vector<int> onceTwice(vector<int> &nums) {
        unordered_map<int, int> counts;
        for (int x : nums)
            counts[x]++;
        int once = 0, twice = 0;
        for (auto &kv : counts) {
            if (kv.second == 1)
                once = kv.first;
            else if (kv.second == 2)
                twice = kv.first;
        }
        return {once, twice};
    }
};
