import java.util.ArrayList;
import java.util.List;

class Solution {

    public String[][] partition(String s) {
        int n = s.length();
        boolean[][] isPal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (
                    s.charAt(i) == s.charAt(j) &&
                    (j - i < 2 || isPal[i + 1][j - 1])
                ) {
                    isPal[i][j] = true;
                }
            }
        }

        List<List<String>> result = new ArrayList<>();
        List<String> current = new ArrayList<>();
        backtrack(s, 0, isPal, current, result);

        String[][] output = new String[result.size()][];
        for (int i = 0; i < result.size(); i++) {
            List<String> row = result.get(i);
            output[i] = row.toArray(new String[0]);
        }
        return output;
    }

    private void backtrack(
        String s,
        int start,
        boolean[][] isPal,
        List<String> current,
        List<List<String>> result
    ) {
        if (start == s.length()) {
            result.add(new ArrayList<>(current));
            return;
        }
        for (int end = start; end < s.length(); end++) {
            if (isPal[start][end]) {
                current.add(s.substring(start, end + 1));
                backtrack(s, end + 1, isPal, current, result);
                current.remove(current.size() - 1);
            }
        }
    }
}
