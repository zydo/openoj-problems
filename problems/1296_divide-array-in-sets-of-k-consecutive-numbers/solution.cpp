class Solution {
  public:
    bool isPossibleDivide(vector<int> &nums, int k) {
        int len = nums.size();
        if (len % k != 0)
            return false;
        map<int, int> counts;
        for (int x : nums) {
            counts[x]++;
        }
        for (const auto &[value, count] : counts) {
            int need = count;
            if (need <= 0)
                continue;
            for (int i = value; i < value + k; i++) {
                auto it = counts.find(i);
                if (it == counts.end() || it->second < need)
                    return false;
                it->second -= need;
            }
        }
        return true;
    }
};
