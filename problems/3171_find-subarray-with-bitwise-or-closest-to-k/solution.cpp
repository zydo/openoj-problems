class Solution {
  public:
    int minimumDifference(vector<int> &nums, int k) {
        int best = abs(nums[0] - k);
        vector<int> current;
        current.push_back(0);
        for (int value : nums) {
            vector<int> nxt;
            nxt.push_back(value);
            for (int prev : current)
                nxt.push_back(prev | value);
            sort(nxt.begin(), nxt.end());
            nxt.erase(unique(nxt.begin(), nxt.end()), nxt.end());
            current = move(nxt);
            for (int x : current) {
                int diff = abs(x - k);
                if (diff < best)
                    best = diff;
            }
        }
        return best;
    }
};
