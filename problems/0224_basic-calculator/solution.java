import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int calculate(String s) {
        int result = 0;
        int sign = 1;
        int num = 0;
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch >= '0' && ch <= '9') {
                num = num * 10 + (ch - '0');
            } else if (ch == '+') {
                result += sign * num;
                num = 0;
                sign = 1;
            } else if (ch == '-') {
                result += sign * num;
                num = 0;
                sign = -1;
            } else if (ch == '(') {
                stack.push(result);
                stack.push(sign);
                result = 0;
                sign = 1;
            } else if (ch == ')') {
                result += sign * num;
                num = 0;
                result = result * stack.pop() + stack.pop();
            }
            // spaces are ignored
        }
        return result + sign * num;
    }
}
