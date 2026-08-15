class Solution {

    public long minimumMoney(int[][] transactions) {
        long totalLose = 0;
        long maxCashbackLosing = 0;
        long maxCostWinning = 0;
        for (int[] t : transactions) {
            long cost = t[0],
                cashback = t[1];
            if (cashback < cost) {
                totalLose += cost - cashback;
                if (cashback > maxCashbackLosing) maxCashbackLosing = cashback;
            } else {
                if (cost > maxCostWinning) maxCostWinning = cost;
            }
        }
        return totalLose + Math.max(maxCashbackLosing, maxCostWinning);
    }
}
