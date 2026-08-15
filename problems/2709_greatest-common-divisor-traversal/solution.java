import java.util.HashMap;
import java.util.Map;

class Solution {

    public boolean canTraverseAllPairs(int[] nums) {
        int n = nums.length;
        if (n == 1) return true;
        for (int x : nums) {
            if (x == 1) return false;
        }

        int maxv = 0;
        for (int x : nums) maxv = Math.max(maxv, x);
        int[] spf = new int[maxv + 1];
        for (int i = 0; i <= maxv; i++) spf[i] = i;
        for (int i = 2; (long) i * i <= maxv; i++) {
            if (spf[i] == i) {
                for (int j = i * i; j <= maxv; j += i) {
                    if (spf[j] == j) spf[j] = i;
                }
            }
        }

        int[] parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;

        Map<Integer, Integer> last = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int v = nums[i];
            while (v > 1) {
                int p = spf[v];
                Integer j = last.get(p);
                if (j != null) union(parent, i, j);
                last.put(p, i);
                while (v % p == 0) v /= p;
            }
        }

        int root = find(parent, 0);
        for (int i = 1; i < n; i++) {
            if (find(parent, i) != root) return false;
        }
        return true;
    }

    private int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    private void union(int[] parent, int a, int b) {
        int ra = find(parent, a),
            rb = find(parent, b);
        if (ra != rb) parent[ra] = rb;
    }
}
