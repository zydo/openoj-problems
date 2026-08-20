import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.PriorityQueue;

class Solution {

    public int minimumLimitedRouteCost(int nodeCount, int[][] links, int source, int target, int maxIntermediates) {
        List<int[]>[] graph = new ArrayList[nodeCount];
        for (int i = 0; i < nodeCount; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] link : links) {
            graph[link[0]].add(new int[] { link[1], link[2] });
        }
        // State = (cost, node, links taken). Carrying the count in the
        // state is what enforces the limit: a state that already used its
        // maxIntermediates+1 links is never allowed to board another.
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
        heap.offer(new int[] { 0, source, 0 });
        int[] best = new int[nodeCount];
        Arrays.fill(best, Integer.MAX_VALUE);
        while (!heap.isEmpty()) {
            int[] cur = heap.poll();
            int cost = cur[0],
                node = cur[1],
                edges = cur[2];
            // The heap pops in cost order, so the first target pop is final.
            if (node == target) {
                return cost;
            }
            // Dominance prune: a cheaper state that used no more links was
            // already expanded here, so this one cannot lead anywhere new.
            if (edges > best[node]) {
                continue;
            }
            best[node] = edges;
            if (edges < maxIntermediates + 1) {
                for (int[] link : graph[node]) {
                    heap.offer(new int[] { cost + link[1], link[0], edges + 1 });
                }
            }
        }
        return -1;
    }
}
