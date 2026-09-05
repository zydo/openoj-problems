class Solution {

    public int sumDisjointNeighbors(int n, int k) {
        int s = 0;
        for (int x = Math.max(1, n - k); x <= n + k; x++) if ((n & x) == 0) s += x;
        return s;
    }
}
