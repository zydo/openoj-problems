import java.util.Arrays;

class Solution {

    // After sorting, the k smallest elements occupy the front of the
    // array and the k largest the back; equal values may straddle the
    // cut, but their contribution to each sum is unchanged.
    public int absDifference(int[] nums, int k) {
        Arrays.sort(nums);
        int small = 0;
        int large = 0;
        for (int i = 0; i < k; i++) {
            small += nums[i];
            large += nums[nums.length - 1 - i];
        }
        return large - small;
    }
}
