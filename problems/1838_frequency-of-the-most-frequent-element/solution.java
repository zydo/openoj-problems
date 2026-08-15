import java.util.*;

class Solution {

    public int maxFrequency(int[] nums, int k) {
        int[] arr = nums.clone();
        Arrays.sort(arr);
        long best = 1;
        int left = 0;
        long windowSum = 0;
        for (int right = 0; right < arr.length; right++) {
            long value = arr[right];
            windowSum += value;
            while ((long) (right - left + 1) * value - windowSum > k) {
                windowSum -= arr[left];
                left++;
            }
            best = Math.max(best, right - left + 1);
        }
        return (int) best;
    }
}
