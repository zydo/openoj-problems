class Solution {

    public String[] generateParenthesis(int n) {
        java.util.List<String> result = new java.util.ArrayList<>();
        backtrack(n, new StringBuilder(), 0, 0, result);
        return result.toArray(new String[0]);
    }

    private void backtrack(
        int n,
        StringBuilder current,
        int openCount,
        int closeCount,
        java.util.List<String> result
    ) {
        if (current.length() == 2 * n) {
            result.add(current.toString());
            return;
        }
        if (openCount < n) {
            current.append('(');
            backtrack(n, current, openCount + 1, closeCount, result);
            current.deleteCharAt(current.length() - 1);
        }
        if (closeCount < openCount) {
            current.append(')');
            backtrack(n, current, openCount, closeCount + 1, result);
            current.deleteCharAt(current.length() - 1);
        }
    }
}
