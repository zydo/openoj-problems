import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public String[][] wordSquares(String[] words) {
        final int n = words[0].length();
        Map<String, List<String>> prefixMap = new HashMap<>();
        for (String w : words) {
            for (int i = 0; i <= n; i++) {
                String p = w.substring(0, i);
                prefixMap.computeIfAbsent(p, x -> new ArrayList<>()).add(w);
            }
        }

        List<List<String>> results = new ArrayList<>();
        List<String> square = new ArrayList<>();
        backtrack(prefixMap, square, n, results);

        results.sort((a, b) -> {
            for (int i = 0; i < n; i++) {
                int cmp = a.get(i).compareTo(b.get(i));
                if (cmp != 0) return cmp;
            }
            return 0;
        });
        String[][] out = new String[results.size()][];
        for (int i = 0; i < results.size(); i++) {
            out[i] = results.get(i).toArray(new String[0]);
        }
        return out;
    }

    private void backtrack(
        Map<String, List<String>> prefixMap,
        List<String> square,
        int n,
        List<List<String>> results
    ) {
        if (square.size() == n) {
            results.add(new ArrayList<>(square));
            return;
        }
        int col = square.size();
        StringBuilder sb = new StringBuilder();
        for (int r = 0; r < col; r++) {
            sb.append(square.get(r).charAt(col));
        }
        List<String> candidates = prefixMap.get(sb.toString());
        if (candidates == null) return;
        for (String w : candidates) {
            square.add(w);
            backtrack(prefixMap, square, n, results);
            square.remove(square.size() - 1);
        }
    }
}
