import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {

    public long maxScore(int[] nums1, int[] nums2, int k) {
        int n = nums1.length;
        Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) idx[i] = i;
        Arrays.sort(idx, (a, b) -> Integer.compare(nums2[b], nums2[a]));
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        long total = 0;
        long best = 0;
        for (int i = 0; i < n; i++) {
            int j = idx[i];
            heap.offer(nums1[j]);
            total += nums1[j];
            if (heap.size() > k) {
                total -= heap.poll();
            }
            if (heap.size() == k) {
                best = Math.max(best, total * nums2[j]);
            }
        }
        return best;
    }
}
