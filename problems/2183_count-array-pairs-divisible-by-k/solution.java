import java.util.*;

class Solution {

    public long countPairs(int[] nums, int k) {
        HashMap<Integer, Long> counts = new HashMap<>();
        for (int num : nums) {
            counts.merge(gcd(num, k), 1L, Long::sum);
        }

        long total = 0;
        List<Integer> gs = new ArrayList<>(counts.keySet());
        for (int i = 0; i < gs.size(); i++) {
            for (int j = i; j < gs.size(); j++) {
                if (((long) gs.get(i) * gs.get(j)) % k != 0) {
                    continue;
                }
                if (i == j) {
                    long c = counts.get(gs.get(i));
                    total += (c * (c - 1)) / 2;
                } else {
                    total += counts.get(gs.get(i)) * counts.get(gs.get(j));
                }
            }
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
