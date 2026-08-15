import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {

    public int ladderLength(
        String beginWord,
        String endWord,
        String[] wordList
    ) {
        Set<String> words = new HashSet<>(Arrays.asList(wordList));
        if (!words.contains(endWord)) {
            return 0;
        }
        int length = beginWord.length();
        Map<String, List<String>> buckets = new HashMap<>();
        for (String word : wordList) {
            for (int i = 0; i < length; ++i) {
                buckets
                    .computeIfAbsent(pattern(word, i), key -> new ArrayList<>())
                    .add(word);
            }
        }

        Set<String> visited = new HashSet<>();
        visited.add(beginWord);
        List<String> queue = Arrays.asList(beginWord);
        int steps = 1;
        while (!queue.isEmpty()) {
            List<String> next = new ArrayList<>();
            for (String word : queue) {
                if (word.equals(endWord)) {
                    return steps;
                }
                for (int i = 0; i < length; ++i) {
                    List<String> bucket = buckets.remove(pattern(word, i));
                    if (bucket == null) {
                        continue;
                    }
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
