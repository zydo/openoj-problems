class Solution {
  public:
    long long maximumSum(vector<int> &nums) {
        unordered_map<int, long long> groups;
        for (int i = 1; i <= (int)nums.size(); i++) {
            groups[squarefreePart(i)] += nums[i - 1];
        }
        long long best = LLONG_MIN;
        for (auto &[key, v] : groups) {
            if (v > best)
                best = v;
        }
        return best;
    }

  private:
    int squarefreePart(int x) {
        int result = 1;
        int d = 2;
        while ((long long)d * d <= x) {
            if (x % d == 0) {
                int count = 0;
                while (x % d == 0) {
                    x /= d;
                    count++;
                }
                if (count % 2 == 1)
                    result *= d;
            }
            d++;
        }
        if (x > 1)
            result *= x;
        return result;
    }
};
