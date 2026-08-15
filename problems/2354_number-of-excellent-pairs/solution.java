import java.util.HashSet;
import java.util.Set;

class Solution {

    public long countExcellentPairs(int[] nums, int k) {
        Set<Integer> unique = new HashSet<>();
        for (int x : nums) unique.add(x);
        long[] counts = new long[64];
        for (int x : unique) counts[Integer.bitCount(x)]++;
        long answer = 0;
        for (int b1 = 0; b1 < 64; b1++) {
            if (counts[b1] == 0) continue;
            for (int b2 = 0; b2 < 64; b2++) {
                if (b1 + b2 >= k) answer += counts[b1] * counts[b2];
            }
        }
        return answer;
    }
}
