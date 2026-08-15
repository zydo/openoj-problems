import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {

    public long countGoodIntegers(int n, int k) {
        int half = (n + 1) / 2;
        long[] fact = new long[n + 1];
        fact[0] = 1;
        for (int i = 1; i <= n; i++) fact[i] = fact[i - 1] * i;
        Set<String> seen = new HashSet<>();
        int limit = 1;
        for (int i = 0; i < half; i++) limit *= 10;
        for (int first = 0; first < limit; first++) {
            int[] counts = new int[10];
            int[] prefix = new int[half];
            int v = first;
            for (int i = 0; i < half; i++) {
                prefix[i] = v % 10;
                v /= 10;
            }
            if (prefix[half - 1] == 0) continue;
            int[] seq = new int[n];
            int len = 0;
            for (int i = half - 1; i >= 0; i--) seq[len++] = prefix[i];
            if (n % 2 == 0) {
                for (int i = 0; i < half; i++) seq[len++] = prefix[i];
            } else {
                for (int i = 1; i < half; i++) seq[len++] = prefix[i];
            }
            long value = 0;
            for (int i = 0; i < len; i++) {
                int d = seq[i];
                counts[d]++;
                value = (value * 10 + d) % k;
            }
            if (value == 0) {
                StringBuilder sb = new StringBuilder();
                for (int d = 0; d < 10; d++) {
                    if (d > 0) sb.append(',');
                    sb.append(counts[d]);
                }
                seen.add(sb.toString());
            }
        }
        long answer = 0;
        for (String key : seen) {
            String[] parts = key.split(",");
            int[] counts = new int[10];
            for (int d = 0; d < 10; d++) counts[d] = Integer.parseInt(parts[d]);
            long total = fact[n];
            for (int c : counts) total /= fact[c];
            if (counts[0] > 0) {
                long lead = fact[n - 1];
                lead /= fact[counts[0] - 1];
                for (int d = 1; d < 10; d++) lead /= fact[counts[d]];
                total -= lead;
            }
            answer += total;
        }
        return answer;
    }
}
