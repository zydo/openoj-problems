class Solution {

    public int maxProfit(int[] prices) {
        int hold = -1000000000,
            sold = 0,
            rest = 0;
        for (int price : prices) {
            int prevSold = sold;
            hold = Math.max(hold, rest - price);
            sold = hold + price;
            rest = Math.max(rest, prevSold);
        }
        return Math.max(sold, rest);
    }
}
