import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int calculate(String s) {
        Deque<Long> stack = new ArrayDeque<>();
        long num = 0;
        char op = '+';
        int last = s.length() - 1;
        for (int i = 0; i <= last; i++) {
            char ch = s.charAt(i);
            if (ch >= '0' && ch <= '9') {
                num = num * 10 + (ch - '0');
            }
            if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || i == last) {
                switch (op) {
                    case '+':
                        stack.push(num);
                        break;
                    case '-':
                        stack.push(-num);
                        break;
                    case '*':
                        stack.push(stack.pop() * num);
                        break;
                    default:
                        stack.push(stack.pop() / num);
                }
                op = ch;
                num = 0;
            }
        }
        long total = 0;
        for (long value : stack) {
            total += value;
        }
        return (int) total;
    }
}
