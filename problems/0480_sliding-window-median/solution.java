import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {

    public double[] medianSlidingWindow(int[] nums, int k) {
        List<Integer> window = new ArrayList<>();
        double[] out = new double[nums.length - k + 1];
        int oi = 0;
        for (int i = 0; i < nums.length; i++) {
            int pos = Collections.binarySearch(window, nums[i]);
            if (pos < 0) pos = -(pos + 1);
            window.add(pos, nums[i]);
            if (i >= k) {
                int p = Collections.binarySearch(window, nums[i - k]);
                if (p < 0) p = -(p + 1);
                window.remove(p);
            }
            if (i >= k - 1) {
                if ((k & 1) == 1) {
                    out[oi++] = (double) window.get(k / 2);
                } else {
                    out[oi++] =
                        ((long) window.get(k / 2 - 1) +
                            (long) window.get(k / 2)) /
                        2.0;
                }
            }
        }
        return out;
    }
}
