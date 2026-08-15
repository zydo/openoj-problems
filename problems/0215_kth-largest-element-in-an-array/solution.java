import java.util.Arrays;

class Solution {

    public int findKthLargest(int[] nums, int k) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        return sorted[sorted.length - k];
    }
}
