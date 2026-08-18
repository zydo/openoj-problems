import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {

    public int shortestBridgeLength(
        String startWord,
        String targetWord,
        String[] dictionary
    ) {
        Set<String> words = new HashSet<>(Arrays.asList(dictionary));
        // No sequence can end outside the dictionary.
        if (!words.contains(targetWord)) {
            return 0;
        }
        int length = startWord.length();
        // File every word under each of its wildcard patterns ("malt"
        // files under "*alt", "m*lt", "ma*t", "mal*"): all one-letter
        // neighbors share one of its patterns.
        Map<String, List<String>> buckets = new HashMap<>();
        for (String word : dictionary) {
            for (int i = 0; i < length; ++i) {
                buckets
                    .computeIfAbsent(pattern(word, i), key -> new ArrayList<>())
                    .add(word);
            }
        }

        // Level-order BFS; steps starts at 1 because startWord itself counts.
        Set<String> visited = new HashSet<>();
        visited.add(startWord);
        List<String> queue = Arrays.asList(startWord);
        int steps = 1;
        while (!queue.isEmpty()) {
            List<String> next = new ArrayList<>();
            for (String word : queue) {
                if (word.equals(targetWord)) {
                    return steps;
                }
                for (int i = 0; i < length; ++i) {
                    // remove() pops the bucket so it is read once overall and
                    // never re-read via a same-level word sharing the pattern.
                    List<String> bucket = buckets.remove(pattern(word, i));
                    if (bucket == null) {
                        continue;
                    }
                    // Each word is enqueued at most once.
                    for (String neighbor : bucket) {
                        if (visited.add(neighbor)) {
                            next.add(neighbor);
                        }
                    }
                }
            }
            queue = next;
            ++steps;
        }
        return 0;
    }

    private static String pattern(String word, int i) {
        return word.substring(0, i) + '*' + word.substring(i + 1);
    }
}
