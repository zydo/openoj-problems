import java.util.HashMap;
import java.util.Map;

class PrefixSuffixIndex {

    // One hash entry per (prefix, suffix) pair, built once at construction:
    // for each word, every prefix of the word is joined to every suffix
    // through a '#' -- no word or query can contain it, since both are
    // lowercase letters only -- and the entry holds the word's index.
    // Processing words left to right makes later words overwrite earlier
    // ones, so every entry ends up holding the largest matching index, and
    // bestMatch() is a single lookup that answers -1 when the key is absent.
    private final Map<String, Integer> weights = new HashMap<>();

    public PrefixSuffixIndex(String[] words) {
        for (int index = 0; index < words.length; ++index) {
            String word = words[index];
            for (int prefix = 0; prefix <= word.length(); ++prefix) {
                String head = word.substring(0, prefix);
                for (int suffix = 0; suffix <= word.length(); ++suffix) {
                    weights.put(head + "#" + word.substring(suffix), index);
                }
            }
        }
    }

    public int bestMatch(String pref, String suff) {
        Integer found = weights.get(pref + "#" + suff);
        return found == null ? -1 : found;
    }
}
