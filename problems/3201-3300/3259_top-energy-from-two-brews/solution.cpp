class Solution {
  public:
    long long maxBrewEnergy(vector<int> &brewA, vector<int> &brewB) {
        // A plan that drinks A at hour i either drank A at hour i-1 or
        // drank B at hour i-2 and idled through the cleanse hour i-1, so
        // dpA[i] = max(dpA[i-1], dpB[i-2]) + brewA[i] and
        // symmetrically for B. Four rolling variables carry the current
        // pair and the one-hour-older pair; totals reach 10^10, past the
        // 32-bit range.
        long long a = (long long)brewA[0] + brewA[1];
        long long b = (long long)brewB[0] + brewB[1];
        long long old_a = brewA[0], old_b = brewB[0];
        for (int i = 2; i < (int)brewA.size(); i++) {
            long long next_a = max(a, old_b) + brewA[i];
            long long next_b = max(b, old_a) + brewB[i];
            old_a = a;
            old_b = b;
            a = next_a;
            b = next_b;
        }
        return max(a, b);
    }
};
