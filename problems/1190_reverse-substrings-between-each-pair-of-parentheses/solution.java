import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public String reverseParentheses(String s) {
        Deque<StringBuilder> stack = new ArrayDeque<>();
        stack.push(new StringBuilder());
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '(') {
                stack.push(new StringBuilder());
            } else if (ch == ')') {
                StringBuilder top = stack.pop();
                top.reverse();
                stack.peek().append(top);
            } else {
                stack.peek().append(ch);
            }
        }
        return stack.pop().toString();
    }
}
