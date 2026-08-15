class Solution {

    public int longestValidParentheses(String s) {
        int[] stack = new int[s.length() + 1];
        int top = 0;
        stack[top++] = -1;
        int best = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack[top++] = i;
            } else {
                top--;
                if (top == 0) {
                    stack[top++] = i;
                } else {
                    if (i - stack[top - 1] > best) {
                        best = i - stack[top - 1];
                    }
                }
            }
        }
        return best;
    }
}
