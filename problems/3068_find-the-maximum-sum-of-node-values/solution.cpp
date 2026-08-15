class Solution {
  public:
    long long maximumValueSum(vector<int> &nums, int k, vector<vector<int>> &edges) {
        long long base = 0;
        int posCount = 0;
        long long minPos = LLONG_MAX;
        long long maxNonPos = LLONG_MIN;
        bool hasPos = false;
        bool hasNonPos = false;
        for (int x : nums) {
            long long d = (long long)(x ^ k) - x;
            base += x;
            if (d > 0) {
                posCount++;
                base += d;
                if (d < minPos)
                    minPos = d;
                hasPos = true;
            } else {
                if (d > maxNonPos)
                    maxNonPos = d;
                hasNonPos = true;
            }
        }
        if (posCount % 2 == 0) {
            return base;
        }
        long long best = LLONG_MAX;
        if (hasPos) {
            best = minPos;
        }
        if (hasNonPos) {
            long long penalty = -maxNonPos;
            if (penalty < best) {
                best = penalty;
            }
        }
        return base - best;
    }
};
