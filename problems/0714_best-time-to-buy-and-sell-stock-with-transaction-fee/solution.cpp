class Solution {
  public:
    long long maxProfit(vector<int> &prices, int fee) {
        long long cash = 0, hold = -1000000000000000000LL;
        for (int price : prices) {
            long long newCash = max(cash, hold + price - fee);
            long long newHold = max(hold, cash - price);
            cash = newCash;
            hold = newHold;
        }
        return cash;
    }
};
