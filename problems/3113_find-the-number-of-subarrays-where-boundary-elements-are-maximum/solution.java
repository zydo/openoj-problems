import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public long numberOfSubarrays(int[] nums) {
        int n = nums.length;
        int[] leftGreater = new int[n];
        int[] stack = new int[n];
        int top = 0;
        for (int i = 0; i < n; i++) {
            int x = nums[i];
            while (top > 0 && nums[stack[top - 1]] <= x) {
                top--;
            }
            leftGreater[i] = top > 0 ? stack[top - 1] : -1;
            stack[top++] = i;
        }

        Map<Integer, List<Integer>> positions = new HashMap<>();
        long ans = 0;
        for (int i = 0; i < n; i++) {
            int x = nums[i];
            List<Integer> lst = positions.computeIfAbsent(x, k ->
                new ArrayList<>()
            );
            int lo = 0,
                hi = lst.size();
            while (lo < hi) {
                int mid = (lo + hi) >>> 1;
                if (lst.get(mid) <= leftGreater[i]) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            long count = 1L + lst.size() - lo;
            ans += count;
            lst.add(i);
        }
        return ans;
    }
}
