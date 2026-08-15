import java.util.PriorityQueue;

class Solution {

    public int connectSticks(int[] sticks) {
        if (sticks.length <= 1) {
            return 0;
        }
        PriorityQueue<Long> heap = new PriorityQueue<>();
        for (int s : sticks) {
            heap.add((long) s);
        }
        long total = 0;
        while (heap.size() > 1) {
            long combined = heap.poll() + heap.poll();
            total += combined;
            heap.add(combined);
        }
        return (int) total;
    }
}
