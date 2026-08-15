class Solution {

    public String pushDominoes(String dominoes) {
        int n = dominoes.length();
        int[] forces = new int[n];
        int f = 0;
        for (int i = 0; i < n; i++) {
            char c = dominoes.charAt(i);
            if (c == 'R') {
                f = n;
            } else if (c == 'L') {
                f = 0;
            } else {
                f = Math.max(f - 1, 0);
            }
            forces[i] += f;
        }
        f = 0;
        for (int i = n - 1; i >= 0; i--) {
            char c = dominoes.charAt(i);
            if (c == 'L') {
                f = n;
            } else if (c == 'R') {
                f = 0;
            } else {
                f = Math.max(f - 1, 0);
            }
            forces[i] -= f;
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            if (forces[i] == 0) {
                sb.append('.');
            } else if (forces[i] > 0) {
                sb.append('R');
            } else {
                sb.append('L');
            }
        }
        return sb.toString();
    }
}
