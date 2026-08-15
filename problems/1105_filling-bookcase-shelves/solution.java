import java.util.*;

class Solution {

    public int minHeightShelves(int[][] books, int shelfWidth) {
        int count = books.length;
        int[] dp = new int[count + 1];
        for (int i = 1; i <= count; i++) {
            int width = 0;
            int height = 0;
            dp[i] = Integer.MAX_VALUE;
            for (int j = i - 1; j >= 0; j--) {
                int thickness = books[j][0];
                int bookHeight = books[j][1];
                width += thickness;
                if (width > shelfWidth) {
                    break;
                }
                height = Math.max(height, bookHeight);
                dp[i] = Math.min(dp[i], dp[j] + height);
            }
        }
        return dp[count];
    }
}
