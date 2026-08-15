class Solution {

    public String reorganizeString(String s) {
        int n = s.length();
        int[] counts = new int[26];
        for (int i = 0; i < n; i++) {
            counts[s.charAt(i) - 'a']++;
        }
        java.util.List<int[]> letters = new java.util.ArrayList<>();
        for (int c = 0; c < 26; c++) {
            if (counts[c] > 0) {
                letters.add(new int[] { c, counts[c] });
            }
        }
        letters.sort((a, b) ->
            b[1] != a[1]
                ? Integer.compare(b[1], a[1])
                : Integer.compare(a[0], b[0])
        );
        if (letters.get(0)[1] > (n + 1) / 2) {
            return "";
        }
        char[] res = new char[n];
        int idx = 0;
        for (int[] letter : letters) {
            char ch = (char) ('a' + letter[0]);
            for (int k = 0; k < letter[1]; k++) {
                if (idx >= n) {
                    idx = 1;
                }
                res[idx] = ch;
                idx += 2;
            }
        }
        return new String(res);
    }
}
