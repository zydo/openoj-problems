import java.util.*;

class Solution {

    public int networkDelayTime(int[][] times, int n, int k) {
        Map<Integer, List<int[]>> graph = new HashMap<>();
        for (int[] t : times) {
            graph
                .computeIfAbsent(t[0], x -> new ArrayList<>())
                .add(new int[] { t[1], t[2] });
        }

        Map<Integer, Integer> dist = new HashMap<>();
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) ->
            Integer.compare(a[0], b[0])
        );
        heap.offer(new int[] { 0, k });
        while (!heap.isEmpty()) {
            int[] top = heap.poll();
            int d = top[0],
                u = top[1];
            if (dist.containsKey(u)) continue;
            dist.put(u, d);
            List<int[]> edges = graph.get(u);
            if (edges != null) {
                for (int[] e : edges) {
                    if (!dist.containsKey(e[0])) {
                        heap.offer(new int[] { d + e[1], e[0] });
                    }
                }
            }
        }

        if (dist.size() != n) return -1;
        int best = 0;
        for (int v : dist.values()) {
            if (v > best) best = v;
        }
        return best;
    }
}
