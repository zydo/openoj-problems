import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {

    public String[] findRepeatedDnaSequences(String s) {
        Set<String> seen = new HashSet<>();
        Set<String> repeated = new HashSet<>();
        for (int i = 0; i + 10 <= s.length(); i++) {
            String seq = s.substring(i, i + 10);
            if (!seen.add(seq)) {
                repeated.add(seq);
            }
        }
        String[] result = repeated.toArray(new String[0]);
        Arrays.sort(result);
        return result;
    }
}
