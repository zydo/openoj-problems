class Solution {

    public long maxProfit(int[] prices, int fee) {
        long cash = 0,
            hold = -1000000000000000000L;
        for (int price : prices) {
            long newCash = Math.max(cash, hold + price - fee);
            long newHold = Math.max(hold, cash - price);
            cash = newCash;
            hold = newHold;
        }
        return cash;
    }
}
