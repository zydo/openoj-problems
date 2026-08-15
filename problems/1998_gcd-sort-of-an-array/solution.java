import java.util.Arrays;

class Solution {

    public boolean gcdSort(int[] nums) {
        final int MX = 100001;
        int[] spf = new int[MX];
        for (int i = 0; i < MX; i++) {
            spf[i] = i;
        }
        for (int i = 2; (long) i * i < MX; i++) {
            if (spf[i] == i) {
                for (int j = i * i; j < MX; j += i) {
                    if (spf[j] == j) {
                        spf[j] = i;
                    }
                }
            }
        }

        int[] parent = new int[MX];
        for (int i = 0; i < MX; i++) {
            parent[i] = i;
        }

        for (int x : nums) {
            int v = x;
            while (v > 1) {
                int p = spf[v];
                union(parent, x, p);
                while (v % p == 0) {
                    v /= p;
                }
            }
        }

        int[] target = nums.clone();
        Arrays.sort(target);
        for (int i = 0; i < nums.length; i++) {
            if (find(parent, nums[i]) != find(parent, target[i])) {
                return false;
            }
        }
        return true;
    }

    private int find(int[] parent, int a) {
        while (parent[a] != a) {
            parent[a] = parent[parent[a]];
            a = parent[a];
        }
        return a;
    }

    private void union(int[] parent, int a, int b) {
        int ra = find(parent, a);
        int rb = find(parent, b);
        if (ra != rb) {
            parent[ra] = rb;
        }
    }
}
