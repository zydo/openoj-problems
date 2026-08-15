class Solution {
  public:
    int maxSubArrayLen(vector<int> &nums, int k) {
        unordered_map<long long, int> first;
        first[0] = -1;
        long long acc = 0;
        int best = 0;
        for (int i = 0; i < (int)nums.size(); ++i) {
            acc += nums[i];
            auto it = first.find(acc - (long long)k);
            if (it != first.end() && i - it->second > best) {
                best = i - it->second;
            }
            if (first.find(acc) == first.end()) {
                first[acc] = i;
            }
        }
        return best;
    }
};
