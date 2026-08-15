import java.util.Arrays;
import java.util.Comparator;

class Solution {

    public int maxHeight(int[][] cuboids) {
        int n = cuboids.length;
        int[][] boxes = new int[n][];
        for (int i = 0; i < n; i++) {
            int[] b = cuboids[i].clone();
            Arrays.sort(b);
            boxes[i] = b;
        }
        Arrays.sort(
            boxes,
            Comparator.<int[]>comparingInt(b -> b[0])
                .thenComparingInt(b -> b[1])
                .thenComparingInt(b -> b[2])
        );
        int[] dp = new int[n];
        for (int i = 0; i < n; i++) {
            dp[i] = boxes[i][2];
            for (int j = 0; j < i; j++) {
                if (
                    boxes[j][0] <= boxes[i][0] &&
                    boxes[j][1] <= boxes[i][1] &&
                    boxes[j][2] <= boxes[i][2]
                ) {
                    if (dp[j] + boxes[i][2] > dp[i]) {
                        dp[i] = dp[j] + boxes[i][2];
                    }
                }
            }
        }
        int best = 0;
        for (int v : dp) {
            best = Math.max(best, v);
        }
        return best;
    }
}
