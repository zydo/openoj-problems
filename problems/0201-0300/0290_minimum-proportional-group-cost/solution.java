import java.util.*;

class Solution {

    public double minimumProportionalGroupCost(int[] units, int[] minimumPayments, int groupCount) {
        int n = units.length;
        Integer[] order = new Integer[n];
        for (int i = 0; i < n; i++) {
            order[i] = i;
        }
        final int[] q = units;
        final int[] w = minimumPayments;
        Arrays.sort(order, (a, b) -> Double.compare(w[a] / (double) q[a], w[b] / (double) q[b]));

        PriorityQueue<Integer> heap = new PriorityQueue<>((a, b) -> b - a);
        long totalQuality = 0;
        double best = Double.POSITIVE_INFINITY;
        for (int idx : order) {
            heap.offer(q[idx]);
            totalQuality += q[idx];
            if (heap.size() > groupCount) {
                totalQuality -= heap.poll();
            }
            if (heap.size() == groupCount) {
                double cost = totalQuality * (w[idx] / (double) q[idx]);
                if (cost < best) {
                    best = cost;
                }
            }
        }
        return best;
    }
}
