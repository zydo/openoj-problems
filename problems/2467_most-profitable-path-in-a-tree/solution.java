import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public int mostProfitablePath(int[][] edges, int bob, int[] amount) {
        int n = amount.length;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }

        int[] parent = new int[n];
        int[] depth = new int[n];
        boolean[] seen = new boolean[n];
        java.util.Arrays.fill(parent, -1);
        seen[0] = true;
        List<Integer> order = new ArrayList<>();
        Deque<Integer> queue = new ArrayDeque<>();
        queue.add(0);
        while (!queue.isEmpty()) {
            int u = queue.poll();
            order.add(u);
            for (int v : adj.get(u)) {
                if (!seen[v]) {
                    seen[v] = true;
                    parent[v] = u;
                    depth[v] = depth[u] + 1;
                    queue.add(v);
                }
            }
        }

        Map<Integer, Integer> bobTime = new HashMap<>();
        int t = 0;
        int node = bob;
        while (node != -1) {
            bobTime.put(node, t);
            t++;
            node = parent[node];
        }

        int[] income = new int[n];
        boolean hasBest = false;
        int best = 0;
        for (int u : order) {
            int d = depth[u];
            Integer bt = bobTime.get(u);
            int gain;
            if (bt == null || bt > d) {
                gain = amount[u];
            } else if (bt == d) {
                gain = Math.floorDiv(amount[u], 2);
            } else {
                gain = 0;
            }
            income[u] = (u != 0 ? income[parent[u]] : 0) + gain;
            if (u != 0 && adj.get(u).size() == 1) {
                if (!hasBest || income[u] > best) {
                    best = income[u];
                    hasBest = true;
                }
            }
        }
        return best;
    }
}
