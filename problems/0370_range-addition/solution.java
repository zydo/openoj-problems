class Solution {

    public int[] getModifiedArray(int length, int[][] updates) {
        long[] diff = new long[length + 1];
        for (int[] u : updates) {
            diff[u[0]] += u[2];
            diff[u[1] + 1] -= u[2];
        }
        int[] arr = new int[length];
        long cur = 0;
        for (int i = 0; i < length; ++i) {
            cur += diff[i];
            arr[i] = (int) cur;
        }
        return arr;
    }
}
