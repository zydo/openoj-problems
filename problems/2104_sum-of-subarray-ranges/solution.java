class Solution {

    public long subArrayRanges(int[] nums) {
        int n = nums.length;
        long total = 0;
        for (int i = 0; i < n; i++) {
            int mn = nums[i],
                mx = nums[i];
            for (int j = i + 1; j < n; j++) {
                if (nums[j] < mn) mn = nums[j];
                else if (nums[j] > mx) mx = nums[j];
                total += (long) mx - mn;
            }
        }
        return total;
    }
}
