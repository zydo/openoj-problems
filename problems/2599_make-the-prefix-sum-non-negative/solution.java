import java.util.PriorityQueue;

class Solution {

    public int makePrefSumNonNegative(int[] nums) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        long prefix = 0;
        int ops = 0;
        for (int num : nums) {
            prefix += num;
            heap.offer(num);
            while (prefix < 0) {
                prefix -= heap.poll();
                ops++;
            }
        }
        return ops;
    }
}
