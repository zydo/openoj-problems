import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {

    public long makeSubKSumEqual(int[] arr, int k) {
        int n = arr.length;
        int g = gcd(n, k);
        long total = 0;
        for (int r = 0; r < g; r++) {
            List<Integer> group = new ArrayList<>();
            for (int i = r; i < n; i += g) group.add(arr[i]);
            Collections.sort(group);
            int median = group.get(group.size() / 2);
            for (int v : group) total += Math.abs((long) v - median);
        }
        return total;
    }

    private int gcd(int a, int b) {
        while (b != 0) {
            int t = a % b;
            a = b;
            b = t;
        }
        return a;
    }
}
