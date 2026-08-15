import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public String[][] groupAnagrams(String[] strs) {
        Map<String, List<String>> groups = new LinkedHashMap<>();
        for (String word : strs) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        String[][] out = new String[groups.size()][];
        int i = 0;
        for (List<String> group : groups.values()) {
            out[i++] = group.toArray(new String[0]);
        }
        return out;
    }
}
