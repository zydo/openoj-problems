import java.util.PriorityQueue;

class Solution {

    public int minStoneSum(int[] piles, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>((a, b) ->
            Integer.compare(b, a)
        );
        for (int p : piles) heap.offer(p);
        for (int i = 0; i < k; i++) {
            int top = heap.peek();
            if (top == 1) break;
            heap.poll();
            heap.offer(top - top / 2);
        }
        long total = 0;
        for (int p : heap) total += p;
        return (int) total;
    }
}
