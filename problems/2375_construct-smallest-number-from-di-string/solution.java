class Solution {

    public String smallestNumber(String pattern) {
        int n = pattern.length();
        StringBuilder result = new StringBuilder(n + 1);
        StringBuilder stack = new StringBuilder(n + 1);
        for (int i = 0; i <= n; i++) {
            stack.append((char) ('1' + i));
            if (i == n || pattern.charAt(i) == 'I') {
                result.append(stack.reverse());
                stack.setLength(0);
            }
        }
        return result.toString();
    }
}
