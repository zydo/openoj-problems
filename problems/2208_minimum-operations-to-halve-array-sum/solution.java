import java.util.Collections;
import java.util.PriorityQueue;

class Solution {

    public int halveArray(int[] nums) {
        double total = 0;
        PriorityQueue<Double> pq = new PriorityQueue<>(
            Collections.reverseOrder()
        );
        for (int x : nums) {
            pq.add((double) x);
            total += x;
        }
        double target = total / 2.0;
        int ops = 0;
        while (target > 0) {
            double largest = pq.poll();
            double half = largest / 2.0;
            target -= half;
            pq.add(half);
            ops++;
        }
        return ops;
    }
}
