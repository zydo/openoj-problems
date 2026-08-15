import java.util.PriorityQueue;

class Solution {

    public int minOperations(int[] nums, int k) {
        PriorityQueue<Long> heap = new PriorityQueue<>();
        for (int x : nums) heap.add((long) x);
        int operations = 0;
        while (heap.size() >= 2 && heap.peek() < k) {
            long x = heap.poll();
            long y = heap.poll();
            heap.add(x * 2 + y);
            operations++;
        }
        return operations;
    }
}
