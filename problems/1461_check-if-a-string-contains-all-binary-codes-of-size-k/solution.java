import java.util.HashSet;
import java.util.Set;

class Solution {

    public boolean hasAllCodes(String s, int k) {
        int need = 1 << k;
        if (s.length() < k) return false;
        Set<String> seen = new HashSet<>();
        for (int i = 0; i + k <= s.length(); i++) {
            seen.add(s.substring(i, i + k));
            if (seen.size() == need) return true;
        }
        return seen.size() == need;
    }
}
