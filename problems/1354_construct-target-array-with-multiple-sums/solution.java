import java.util.Collections;
import java.util.PriorityQueue;

class Solution {

    public boolean isPossible(int[] target) {
        int n = target.length;
        if (n == 1) {
            return target[0] == 1;
        }
        long total = 0;
        PriorityQueue<Long> pq = new PriorityQueue<>(
            Collections.reverseOrder()
        );
        for (int v : target) {
            total += v;
            pq.add((long) v);
        }
        while (true) {
            long largest = pq.poll();
            if (largest == 1) {
                return true;
            }
            long rest = total - largest;
            if (largest <= rest) {
                return false;
            }
            long steps = (largest - 1) / rest;
            long prev = largest - steps * rest;
            pq.add(prev);
            total = rest + prev;
        }
    }
}
