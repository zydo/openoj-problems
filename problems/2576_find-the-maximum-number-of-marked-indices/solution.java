import java.util.Arrays;

class Solution {

    public int maxNumOfMarkedIndices(int[] nums) {
        int[] a = nums.clone();
        Arrays.sort(a);
        int n = a.length;
        int i = 0;
        for (int j = (n + 1) / 2; j < n; j++) {
            if (2L * a[i] <= a[j]) {
                i++;
            }
        }
        return 2 * i;
    }
}
