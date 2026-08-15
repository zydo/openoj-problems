class Solution {
  public:
    int maxProfit(vector<int> &prices) {
        int buy1 = -1000000000, buy2 = -1000000000;
        int sell1 = 0, sell2 = 0;
        for (int price : prices) {
            buy1 = max(buy1, -price);
            sell1 = max(sell1, buy1 + price);
            buy2 = max(buy2, sell1 - price);
            sell2 = max(sell2, buy2 + price);
        }
        return sell2;
    }
};
