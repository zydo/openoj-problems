class Solution {
  public:
    int maxProfit(vector<int> &prices) {
        int best = 0;
        int minPrice = prices[0];
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > best) {
                best = price - minPrice;
            }
        }
        return best;
    }
};
