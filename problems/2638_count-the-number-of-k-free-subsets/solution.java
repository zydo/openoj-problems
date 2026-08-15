import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public long countTheNumOfKFreeSubsets(int[] nums, int k) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> groupOf = new HashMap<>();
        List<Integer> lengths = new ArrayList<>();
        for (int x : sorted) {
            Integer gid = groupOf.get(x - k);
            if (gid != null) {
                groupOf.put(x, gid);
                lengths.set(gid, lengths.get(gid) + 1);
            } else {
                groupOf.put(x, lengths.size());
                lengths.add(1);
            }
        }
        long ans = 1;
        for (int length : lengths) {
            long a = 1,
                b = 1;
            for (int t = 0; t < length; t++) {
                long nb = a + b;
                a = b;
                b = nb;
            }
            ans *= b;
        }
        return ans;
    }
}
