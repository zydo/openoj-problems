import java.util.Arrays;

class Solution {

    public int findKthLargest(int[] nums, int k) {
        // Sort a copy ascending; the kth largest sits k slots from the end.
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        return sorted[sorted.length - k];
    }
}
