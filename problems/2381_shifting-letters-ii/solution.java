class Solution {

    public String shiftingLetters(String s, int[][] shifts) {
        int n = s.length();
        int[] diff = new int[n + 1];
        for (int[] sh : shifts) {
            int delta = sh[2] == 1 ? 1 : -1;
            diff[sh[0]] += delta;
            diff[sh[1] + 1] -= delta;
        }
        StringBuilder sb = new StringBuilder(n);
        int shift = 0;
        for (int i = 0; i < n; i++) {
            shift += diff[i];
            int c = (((s.charAt(i) - 'a' + shift) % 26) + 26) % 26;
            sb.append((char) ('a' + c));
        }
        return sb.toString();
    }
}
