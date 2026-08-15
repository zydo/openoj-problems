class Solution {

    public String removeKdigits(String num, int k) {
        StringBuilder stack = new StringBuilder();
        for (int i = 0; i < num.length(); ++i) {
            char ch = num.charAt(i);
            while (
                k > 0 &&
                stack.length() > 0 &&
                stack.charAt(stack.length() - 1) > ch
            ) {
                stack.deleteCharAt(stack.length() - 1);
                --k;
            }
            stack.append(ch);
        }
        int len = stack.length() - k;
        stack.setLength(Math.max(len, 0));
        int pos = 0;
        while (pos < stack.length() && stack.charAt(pos) == '0') {
            ++pos;
        }
        String result = stack.substring(pos);
        return result.isEmpty() ? "0" : result;
    }
}
