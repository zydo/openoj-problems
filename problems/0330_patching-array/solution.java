class Solution {

    public int minPatches(int[] nums, int n) {
        int patches = 0;
        int i = 0;
        long reachable = 1;
        while (reachable <= n) {
            if (i < nums.length && nums[i] <= reachable) {
                reachable += nums[i];
                i++;
            } else {
                reachable += reachable;
                patches++;
            }
        }
        return patches;
    }
}
