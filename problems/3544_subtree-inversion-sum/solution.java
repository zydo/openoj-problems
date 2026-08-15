import java.util.ArrayList;
import java.util.List;

class Solution {

    public long subtreeInversionSum(int[][] edges, int[] nums, int k) {
        int n = nums.length;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }

        int[] parent = new int[n];
        parent[0] = -2;
        int[] order = new int[n];
        int cnt = 0;
        order[cnt++] = 0;
        for (int i = 0; i < cnt; i++) {
            int u = order[i];
            for (int v : adj.get(u)) {
                if (v != parent[u]) {
                    parent[v] = u;
                    order[cnt++] = v;
                }
            }
        }

        int width = k + 1;
        long[][][] dp = new long[n][2][width];
        for (int idx = n - 1; idx >= 0; idx--) {
            int u = order[idx];
            long[][] childSum = new long[2][width];
            for (int v : adj.get(u)) {
                if (v == parent[u]) continue;
                for (int flip = 0; flip < 2; flip++) {
                    for (int d = 0; d < width; d++) {
                        childSum[flip][d] += dp[v][flip][d];
                    }
                }
            }

            long[][] table = dp[u];
            for (int flip = 0; flip < 2; flip++) {
                int s = flip == 0 ? 1 : -1;
                long baseDont = (long) nums[u] * s;
                long baseInv = -((long) nums[u]) * s;
                long[] dontRow = childSum[flip];
                long[] invRow = childSum[flip ^ 1];
                for (int dist = 0; dist < width; dist++) {
                    int dd = dist < k ? dist + 1 : k;
                    long valDont = baseDont + dontRow[dd];
                    if (dist >= k) {
                        long valInv = baseInv + invRow[1];
                        table[flip][dist] = Math.max(valDont, valInv);
                    } else {
                        table[flip][dist] = valDont;
                    }
                }
            }
        }
        return dp[0][0][k];
    }
}
