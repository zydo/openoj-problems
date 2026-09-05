import java.util.Arrays;

class Solution {

    public boolean containsAnagram(String pattern, String text) {
        int m = pattern.length();
        int n = text.length();
        // No window of length m can exist inside a shorter text.
        if (m > n) {
            return false;
        }
        int[] need = new int[26];
        int[] window = new int[26];
        for (int i = 0; i < m; i++) {
            need[pattern.charAt(i) - 'a']++;
            window[text.charAt(i) - 'a']++;
        }
        // Matching frequency vectors means the window is a permutation of pattern.
        if (Arrays.equals(need, window)) {
            return true;
        }
        for (int i = m; i < n; i++) {
            // Slide one position: add the entering char, drop the leaving one.
            window[text.charAt(i) - 'a']++;
            window[text.charAt(i - m) - 'a']--;
            if (Arrays.equals(need, window)) {
                return true;
            }
        }
        return false;
    }
}
