class Solution {
  public:
    int lastStoneWeightII(vector<int> &stones) {
        int total = 0;
        for (int s : stones) {
            total += s;
        }
        int target = total / 2;
        vector<bool> reachable(target + 1, false);
        reachable[0] = true;
        for (int value : stones) {
            for (int s = target; s >= value; s--) {
                if (reachable[s - value]) {
                    reachable[s] = true;
                }
            }
        }
        int best = 0;
        for (int s = target; s >= 0; s--) {
            if (reachable[s]) {
                best = s;
                break;
            }
        }
        return total - 2 * best;
    }
};
