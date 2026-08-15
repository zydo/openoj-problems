class Solution {
  public:
    long long countExcellentPairs(vector<int> &nums, int k) {
        unordered_set<int> unique(nums.begin(), nums.end());
        long long counts[64] = {0};
        for (int x : unique)
            counts[__builtin_popcount((unsigned)x)]++;
        long long answer = 0;
        for (int b1 = 0; b1 < 64; b1++) {
            if (counts[b1] == 0)
                continue;
            for (int b2 = 0; b2 < 64; b2++) {
                if (b1 + b2 >= k)
                    answer += counts[b1] * counts[b2];
            }
        }
        return answer;
    }
};
