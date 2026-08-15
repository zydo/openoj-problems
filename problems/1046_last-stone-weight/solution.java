import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {

    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(
            Comparator.reverseOrder()
        );
        for (int s : stones) {
            heap.offer(s);
        }
        while (heap.size() > 1) {
            int y = heap.poll();
            int x = heap.poll();
            if (x != y) {
                heap.offer(y - x);
            }
        }
        return heap.isEmpty() ? 0 : heap.poll();
    }
}
