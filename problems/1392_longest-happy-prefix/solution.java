class Solution {

    public String longestPrefix(String s) {
        int n = s.length();
        int[] pi = new int[n];
        int j = 0;
        for (int i = 1; i < n; i++) {
            while (j > 0 && s.charAt(i) != s.charAt(j)) {
                j = pi[j - 1];
            }
            if (s.charAt(i) == s.charAt(j)) {
                j++;
            }
            pi[i] = j;
        }
        return n > 0 ? s.substring(0, pi[n - 1]) : "";
    }
}
