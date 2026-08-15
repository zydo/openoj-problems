class Solution {

    public String removeDuplicateLetters(String s) {
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) count[s.charAt(i) - 'a']++;
        StringBuilder stack = new StringBuilder();
        boolean[] inStack = new boolean[26];
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            int c = ch - 'a';
            count[c]--;
            if (inStack[c]) continue;
            while (stack.length() > 0) {
                int top = stack.charAt(stack.length() - 1) - 'a';
                if (top > c && count[top] > 0) {
                    stack.deleteCharAt(stack.length() - 1);
                    inStack[top] = false;
                } else {
                    break;
                }
            }
            stack.append(ch);
            inStack[c] = true;
        }
        return stack.toString();
    }
}
