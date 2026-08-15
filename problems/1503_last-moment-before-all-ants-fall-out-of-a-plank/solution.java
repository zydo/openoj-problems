class Solution {

    public int getLastMoment(int n, int[] left, int[] right) {
        int best = 0;
        for (int position : left) {
            best = Math.max(best, position);
        }
        for (int position : right) {
            best = Math.max(best, n - position);
        }
        return best;
    }
}
