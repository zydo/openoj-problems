class Solution {
  public:
    long long maxTotalFruits(vector<vector<int>> &fruits, int startPos, int k) {
        int n = fruits.size();
        vector<long long> prefix(n + 1, 0);
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + fruits[i][1];
        }

        long long best = 0;
        int left = 0;
        for (int right = 0; right < n; right++) {
            while (left < right && windowCost(fruits[left][0], fruits[right][0], startPos) > k) {
                left++;
            }
            if (windowCost(fruits[left][0], fruits[right][0], startPos) <= k) {
                best = max(best, prefix[right + 1] - prefix[left]);
            }
        }
        return best;
    }

  private:
    long long windowCost(int leftPos, int rightPos, int startPos) {
        if (startPos <= leftPos) {
            return rightPos - startPos;
        }
        if (startPos >= rightPos) {
            return startPos - leftPos;
        }
        return min(2LL * (startPos - leftPos) + (rightPos - startPos),
                   2LL * (rightPos - startPos) + (startPos - leftPos));
    }
};
