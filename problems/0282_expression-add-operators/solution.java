import java.util.ArrayList;
import java.util.List;

class Solution {

    public String[] addOperators(String num, int target) {
        List<String> results = new ArrayList<>();
        dfs(num, target, 0, 0L, 0L, new StringBuilder(), results);
        return results.toArray(new String[0]);
    }

    // num.length <= 10, so every operand is < 1e10 and any run of '*'
    // operands stays under ~1e10; the running total never exceeds ~1e11,
    // which fits comfortably in a long.
    private void dfs(
        String num,
        int target,
        int index,
        long prev,
        long current,
        StringBuilder expression,
        List<String> results
    ) {
        int n = num.length();
        if (index == n) {
            if (current == target) {
                results.add(expression.toString());
            }
            return;
        }
        long nxt = 0;
        for (int end = index; end < n; end++) {
            if (end != index && num.charAt(index) == '0') {
                break;
            }
            nxt = nxt * 10 + (num.charAt(end) - '0');
            int lengthBefore = expression.length();
            if (index == 0) {
                expression.append(nxt);
                dfs(num, target, end + 1, nxt, nxt, expression, results);
            } else {
                expression.append('+').append(nxt);
                dfs(
                    num,
                    target,
                    end + 1,
                    nxt,
                    current + nxt,
                    expression,
                    results
                );
                expression.setLength(lengthBefore);
                expression.append('-').append(nxt);
                dfs(
                    num,
                    target,
                    end + 1,
                    -nxt,
                    current - nxt,
                    expression,
                    results
                );
                expression.setLength(lengthBefore);
                expression.append('*').append(nxt);
                dfs(
                    num,
                    target,
                    end + 1,
                    prev * nxt,
                    current - prev + prev * nxt,
                    expression,
                    results
                );
            }
            expression.setLength(lengthBefore);
        }
    }
}
