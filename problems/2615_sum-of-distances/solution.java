import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public long[] distance(int[] nums) {
        Map<Integer, List<Integer>> pos = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            pos.computeIfAbsent(nums[i], x -> new ArrayList<>()).add(i);
        }
        long[] arr = new long[nums.length];
        for (List<Integer> idxs : pos.values()) {
            int m = idxs.size();
            long[] prefix = new long[m + 1];
            for (int j = 0; j < m; j++) {
                prefix[j + 1] = prefix[j] + idxs.get(j);
            }
            for (int j = 0; j < m; j++) {
                long i = idxs.get(j);
                long left = i * j - prefix[j];
                long right = prefix[m] - prefix[j + 1] - i * (m - 1 - j);
                arr[idxs.get(j)] = left + right;
            }
        }
        return arr;
    }
}
