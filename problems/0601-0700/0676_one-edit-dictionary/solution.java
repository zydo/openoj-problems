import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class OneEditDictionary {

    // Words grouped by length, in loadWords order. Each loadWords REPLACES
    // the previous dictionary, so matchesOneEdit only ever sees the latest call's
    // words; a candidate matches when it differs from the matchesOneEdit word in
    // exactly one position, and other lengths never reach the comparison.
    private final Map<Integer, List<String>> buckets = new HashMap<>();

    public OneEditDictionary() {}

    public void loadWords(String[] dictionary) {
        buckets.clear();
        for (String word : dictionary) {
            buckets.computeIfAbsent(word.length(), key -> new ArrayList<>()).add(word);
        }
    }

    public boolean matchesOneEdit(String searchWord) {
        List<String> candidates = buckets.get(searchWord.length());
        if (candidates == null) {
            return false;
        }
        for (String word : candidates) {
            int mismatches = 0;
            for (int index = 0; index < word.length(); ++index) {
                if (word.charAt(index) != searchWord.charAt(index)) {
                    ++mismatches;
                    if (mismatches > 1) {
                        break;
                    }
                }
            }
            if (mismatches == 1) {
                return true;
            }
        }
        return false;
    }
}
