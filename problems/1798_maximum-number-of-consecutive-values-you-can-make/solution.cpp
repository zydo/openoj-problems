class Solution {
  public:
    int getMaximumConsecutive(vector<int> &coins) {
        vector<int> sorted = coins;
        sort(sorted.begin(), sorted.end());
        int reachable = 0;
        for (int coin : sorted) {
            if (coin > reachable + 1) {
                break;
            }
            reachable += coin;
        }
        return reachable + 1;
    }
};
