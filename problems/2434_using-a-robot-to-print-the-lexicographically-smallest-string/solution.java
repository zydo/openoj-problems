class Solution {

    public String robotWithString(String s) {
        int n = s.length();
        char[] suffixMin = new char[n + 1];
        suffixMin[n] = 127;
        for (int i = n - 1; i >= 0; i--) {
            suffixMin[i] = (char) Math.min(s.charAt(i), suffixMin[i + 1]);
        }
        StringBuilder st = new StringBuilder();
        StringBuilder out = new StringBuilder();
        for (int i = 0; i < n; i++) {
            while (
                st.length() > 0 && st.charAt(st.length() - 1) <= suffixMin[i]
            ) {
                out.append(st.charAt(st.length() - 1));
                st.deleteCharAt(st.length() - 1);
            }
            st.append(s.charAt(i));
        }
        while (st.length() > 0) {
            out.append(st.charAt(st.length() - 1));
            st.deleteCharAt(st.length() - 1);
        }
        return out.toString();
    }
}
