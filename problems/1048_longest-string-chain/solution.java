import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {

    public int longestStrChain(String[] words) {
        Set<String> unique = new HashSet<>(Arrays.asList(words));
        List<String> sorted = new ArrayList<>(unique);
        sorted.sort((a, b) -> a.length() - b.length());
        Map<String, Integer> dp = new HashMap<>();
        int best = 0;
        StringBuilder sb = new StringBuilder();
        for (String word : sorted) {
            int current = 1;
            for (int i = 0; i < word.length(); i++) {
                sb.setLength(0);
                sb.append(word, 0, i).append(word, i + 1, word.length());
                Integer prev = dp.get(sb.toString());
                if (prev != null && prev + 1 > current) {
                    current = prev + 1;
                }
            }
            dp.put(word, current);
            if (current > best) {
                best = current;
            }
        }
        return best;
    }
}
