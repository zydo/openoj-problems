import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public String[] wordFrequency(String content) {
        // One counter per distinct word; the split drops leading/trailing
        // separators and never yields an empty word.
        Map<String, Integer> counts = new HashMap<>();
        for (String word : content.split("\\s+")) {
            if (word.isEmpty()) {
                continue;
            }
            counts.merge(word, 1, Integer::sum);
        }
        List<Map.Entry<String, Integer>> ranked = new ArrayList<>(counts.entrySet());
        // Descending frequency, lexicographic word as the tiebreaker.
        ranked.sort((a, b) -> {
            int byCount = Integer.compare(b.getValue(), a.getValue());
            return byCount != 0 ? byCount : a.getKey().compareTo(b.getKey());
        });
        String[] lines = new String[ranked.size()];
        for (int index = 0; index < lines.length; index++) {
            Map.Entry<String, Integer> entry = ranked.get(index);
            lines[index] = entry.getKey() + " " + entry.getValue();
        }
        return lines;
    }
}
