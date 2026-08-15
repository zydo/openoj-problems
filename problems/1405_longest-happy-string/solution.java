class Solution {

    public String longestDiverseString(int a, int b, int c) {
        int[] cnt = { a, b, c };
        char[] letters = { 'a', 'b', 'c' };
        StringBuilder result = new StringBuilder();
        while (true) {
            Integer[] idx = { 0, 1, 2 };
            java.util.Arrays.sort(idx, (x, y) -> {
                if (cnt[x] != cnt[y]) {
                    return Integer.compare(cnt[y], cnt[x]);
                }
                return Character.compare(letters[x], letters[y]);
            });
            int pick = idx[0];
            if (cnt[pick] == 0) {
                break;
            }
            int len = result.length();
            if (
                len >= 2 &&
                result.charAt(len - 1) == letters[pick] &&
                result.charAt(len - 2) == letters[pick]
            ) {
                pick = idx[1];
                if (cnt[pick] == 0) {
                    break;
                }
            }
            result.append(letters[pick]);
            cnt[pick]--;
        }
        return result.toString();
    }
}
