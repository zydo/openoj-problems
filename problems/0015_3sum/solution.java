import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {

    public int[][] threeSum(int[] nums) {
        int[] arr = nums.clone();
        Arrays.sort(arr);
        int n = arr.length;
        List<int[]> result = new ArrayList<>();
        for (int i = 0; i + 2 < n; i++) {
            if (i > 0 && arr[i] == arr[i - 1]) continue;
            if ((long) arr[i] * 3 > 0) break;
            int left = i + 1,
                right = n - 1;
            while (left < right) {
                long total = (long) arr[i] + arr[left] + arr[right];
                if (total < 0) {
                    left++;
                } else if (total > 0) {
                    right--;
                } else {
                    result.add(new int[] { arr[i], arr[left], arr[right] });
                    left++;
                    right--;
                    while (left < right && arr[left] == arr[left - 1]) left++;
                    while (left < right && arr[right] == arr[right + 1])
                        right--;
                }
            }
        }
        return result.toArray(new int[0][]);
    }
}
