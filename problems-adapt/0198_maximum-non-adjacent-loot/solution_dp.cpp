class Solution {
  public:
    int maxNonAdjacentLoot(vector<int> &nums) {
        // Rolling two-variable DP: cur = best through position i-1, prev = best
        // through position i-2; both start at 0 ("nothing taken yet").
        long long prev = 0, cur = 0;
        for (int x : nums) {
            // Skip this position (keep cur) or take it (prev + x).
            long long next = max(cur, prev + x);
            prev = cur;
            cur = next;
        }
        return (int)cur;
    }
};
