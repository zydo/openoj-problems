import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {

    public String[] removeInvalidParentheses(String s) {
        Set<String> level = new HashSet<>();
        level.add(s);
        while (true) {
            List<String> valid = new ArrayList<>();
            for (String item : level) {
                if (isValid(item)) valid.add(item);
            }
            if (!valid.isEmpty()) {
                Collections.sort(valid);
                return valid.toArray(new String[0]);
            }
            Set<String> next = new HashSet<>();
            for (String item : level) {
                for (int i = 0; i < item.length(); i++) {
                    char ch = item.charAt(i);
                    if (ch == '(' || ch == ')') {
                        next.add(item.substring(0, i) + item.substring(i + 1));
                    }
                }
            }
            level = next;
        }
    }

    private boolean isValid(String str) {
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == '(') count++;
            else if (ch == ')') {
                count--;
                if (count < 0) return false;
            }
        }
        return count == 0;
    }
}
