class Solution {
  public:
    int maxProfit(vector<int> &prices) {
        int hold = -1000000000, sold = 0, rest = 0;
        for (int price : prices) {
            int prevSold = sold;
            hold = max(hold, rest - price);
            sold = hold + price;
            rest = max(rest, prevSold);
        }
        return max(sold, rest);
    }
};
