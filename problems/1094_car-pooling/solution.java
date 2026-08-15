class Solution {

    public boolean carPooling(int[][] trips, int capacity) {
        int[] diff = new int[1001];
        for (int[] t : trips) {
            diff[t[1]] += t[0];
            diff[t[2]] -= t[0];
        }
        int used = 0;
        for (int delta : diff) {
            used += delta;
            if (used > capacity) {
                return false;
            }
        }
        return true;
    }
}
