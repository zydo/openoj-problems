import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {

    public int[][] palindromePairs(String[] words) {
        Map<String, Integer> index = new HashMap<>();
        for (int i = 0; i < words.length; i++) {
            index.put(words[i], i);
        }
        Set<Long> results = new HashSet<>();

        for (int j = 0; j < words.length; j++) {
            String w = words[j];
            int length = w.length();
            for (int cut = 0; cut <= length; cut++) {
                String prefix = w.substring(0, cut);
                String suffix = w.substring(cut);
                if (isPalindrome(prefix)) {
                    String rev = new StringBuilder(suffix).reverse().toString();
                    Integer idx = index.get(rev);
                    if (idx != null && idx != j) {
                        results.add(((long) idx << 32) | (j & 0xffffffffL));
                    }
                }
                if (cut != length && isPalindrome(suffix)) {
                    String rev = new StringBuilder(prefix).reverse().toString();
                    Integer idx = index.get(rev);
                    if (idx != null && idx != j) {
                        results.add(((long) j << 32) | (idx & 0xffffffffL));
                    }
                }
            }
        }

        List<Long> sorted = new ArrayList<>(results);
        java.util.Collections.sort(sorted);
        int[][] out = new int[sorted.size()][2];
        for (int i = 0; i < sorted.size(); i++) {
            long key = sorted.get(i);
            out[i][0] = (int) (key >>> 32);
            out[i][1] = (int) (key & 0xffffffffL);
        }
        return out;
    }

    private boolean isPalindrome(String s) {
        int a = 0,
            b = s.length() - 1;
        while (a < b) {
            if (s.charAt(a) != s.charAt(b)) return false;
            a++;
            b--;
        }
        return true;
    }
}
