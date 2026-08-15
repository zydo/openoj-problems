import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {

    public int minimumDifference(int[] nums, int k) {
        int best = Math.abs(nums[0] - k);
        List<Integer> current = new ArrayList<>();
        current.add(0);
        for (int value : nums) {
            List<Integer> nxt = new ArrayList<>();
            nxt.add(value);
            for (int prev : current) {
                nxt.add(prev | value);
            }
            int[] arr = new int[nxt.size()];
            for (int i = 0; i < arr.length; i++) arr[i] = nxt.get(i);
            Arrays.sort(arr);
            current = new ArrayList<>();
            for (int i = 0; i < arr.length; i++) {
                if (i == 0 || arr[i] != arr[i - 1]) current.add(arr[i]);
            }
            for (int x : current) {
                int diff = Math.abs(x - k);
                if (diff < best) best = diff;
            }
        }
        return best;
    }
}
