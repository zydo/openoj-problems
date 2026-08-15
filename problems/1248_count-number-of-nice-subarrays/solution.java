class Solution {

    public int numberOfSubarrays(int[] nums, int k) {
        int n = nums.length;
        int[] counts = new int[n + 1];
        counts[0] = 1;
        int odds = 0;
        int result = 0;
        for (int x : nums) {
            odds += x & 1;
            if (odds - k >= 0) {
                result += counts[odds - k];
            }
            counts[odds]++;
        }
        return result;
    }
}
