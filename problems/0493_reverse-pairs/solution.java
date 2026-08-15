import java.util.ArrayList;
import java.util.List;

class Solution {

    private long count = 0;

    public int reversePairs(int[] nums) {
        count = 0;
        long[] arr = new long[nums.length];
        for (int i = 0; i < nums.length; i++) {
            arr[i] = nums[i];
        }
        mergeCount(arr);
        return (int) count;
    }

    private long[] mergeCount(long[] arr) {
        if (arr.length <= 1) {
            return arr;
        }
        int mid = arr.length / 2;
        long[] left = mergeCount(java.util.Arrays.copyOfRange(arr, 0, mid));
        long[] right = mergeCount(
            java.util.Arrays.copyOfRange(arr, mid, arr.length)
        );
        // count cross reverse pairs: left[i] > 2 * right[j]
        int j = 0;
        for (int i = 0; i < left.length; i++) {
            while (j < right.length && left[i] > 2L * right[j]) {
                j++;
            }
            count += j;
        }
        // merge
        long[] merged = new long[arr.length];
        int i = 0;
        j = 0;
        int t = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                merged[t++] = left[i++];
            } else {
                merged[t++] = right[j++];
            }
        }
        while (i < left.length) merged[t++] = left[i++];
        while (j < right.length) merged[t++] = right[j++];
        return merged;
    }
}
