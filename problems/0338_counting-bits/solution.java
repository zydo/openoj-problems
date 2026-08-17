class Solution {

    public int[] countBits(int n) {
        int[] ans = new int[n + 1];
        // i >> 1 drops the low bit, so its popcount is already computed;
        // i & 1 adds the dropped bit back. Ascending order keeps it ready.
        for (int i = 1; i <= n; ++i) {
            ans[i] = ans[i >> 1] + (i & 1);
        }
        return ans;
    }
}
