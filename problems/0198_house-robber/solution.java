class Solution {

    public int rob(int[] nums) {
        int prev = 0,
            cur = 0;
        for (int x : nums) {
            int next = Math.max(cur, prev + x);
            prev = cur;
            cur = next;
        }
        return cur;
    }
}
