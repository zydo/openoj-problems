import java.util.Arrays;

class Solution {

    public long appealSum(String s) {
        int[] last = new int[26];
        Arrays.fill(last, -1);
        long total = 0;
        long current = 0;
        for (int i = 0; i < s.length(); i++) {
            int c = s.charAt(i) - 'a';
            current += i - last[c];
            last[c] = i;
            total += current;
        }
        return total;
    }
}
