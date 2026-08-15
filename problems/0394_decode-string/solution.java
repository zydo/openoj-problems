import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public String decodeString(String s) {
        Deque<String> prevStack = new ArrayDeque<>();
        Deque<Integer> timesStack = new ArrayDeque<>();
        StringBuilder current = new StringBuilder();
        int repeat = 0;
        for (int idx = 0; idx < s.length(); idx++) {
            char ch = s.charAt(idx);
            if (ch >= '0' && ch <= '9') {
                repeat = repeat * 10 + (ch - '0');
            } else if (ch == '[') {
                prevStack.push(current.toString());
                timesStack.push(repeat);
                current = new StringBuilder();
                repeat = 0;
            } else if (ch == ']') {
                String previous = prevStack.pop();
                int times = timesStack.pop();
                StringBuilder sb = new StringBuilder(previous);
                for (int t = 0; t < times; t++) {
                    sb.append(current);
                }
                current = sb;
            } else {
                current.append(ch);
            }
        }
        return current.toString();
    }
}
