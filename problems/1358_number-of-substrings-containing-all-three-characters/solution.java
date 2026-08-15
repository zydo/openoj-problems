class Solution {

    public int numberOfSubstrings(String s) {
        int[] last = { -1, -1, -1 };
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            int idx = s.charAt(i) - 'a';
            if (idx >= 0 && idx <= 2) {
                last[idx] = i;
            }
            count += Math.min(last[0], Math.min(last[1], last[2])) + 1;
        }
        return count;
    }
}
