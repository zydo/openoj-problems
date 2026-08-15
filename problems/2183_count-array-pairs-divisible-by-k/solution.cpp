class Solution {
  public:
    long long countPairs(vector<int> &nums, int k) {
        unordered_map<long long, long long> counts;
        for (int num : nums) {
            counts[gcd(num, k)]++;
        }

        long long total = 0;
        vector<long long> gs;
        gs.reserve(counts.size());
        for (const auto &[g, c] : counts) {
            gs.push_back(g);
        }
        for (size_t i = 0; i < gs.size(); i++) {
            for (size_t j = i; j < gs.size(); j++) {
                if (gs[i] * gs[j] % k != 0) {
                    continue;
                }
                if (i == j) {
                    long long c = counts[gs[i]];
                    total += c * (c - 1) / 2;
                } else {
                    total += counts[gs[i]] * counts[gs[j]];
                }
            }
        }
        return total;
    }
};
