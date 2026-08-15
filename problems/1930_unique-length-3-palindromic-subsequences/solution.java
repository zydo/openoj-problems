import java.util.HashSet;
import java.util.Set;

class Solution {

    public int countPalindromicSubsequence(String s) {
        int count = 0;
        for (char ch = 'a'; ch <= 'z'; ch++) {
            int first = s.indexOf(ch);
            int last = s.lastIndexOf(ch);
            if (first != -1 && last - first >= 2) {
                Set<Character> seen = new HashSet<>();
                for (int i = first + 1; i < last; i++) seen.add(s.charAt(i));
                count += seen.size();
            }
        }
        return count;
    }
}
