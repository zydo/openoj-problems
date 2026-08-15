import java.util.Collections;
import java.util.PriorityQueue;

class Solution {

    public int minimumDeviation(int[] nums) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(
            Collections.reverseOrder()
        );
        int currentMin = Integer.MAX_VALUE;
        for (int v : nums) {
            int m = v % 2 == 1 ? v * 2 : v;
            heap.add(m);
            if (m < currentMin) {
                currentMin = m;
            }
        }
        int best = heap.peek() - currentMin;
        while (heap.peek() % 2 == 0) {
            int half = heap.poll() / 2;
            heap.add(half);
            if (half < currentMin) {
                currentMin = half;
            }
            int deviation = heap.peek() - currentMin;
            if (deviation < best) {
                best = deviation;
            }
        }
        return best;
    }
}
