class Solution {

    public int xorAllNums(int[] nums1, int[] nums2) {
        int answer = 0;
        if (nums2.length % 2 == 1) {
            for (int value : nums1) {
                answer ^= value;
            }
        }
        if (nums1.length % 2 == 1) {
            for (int value : nums2) {
                answer ^= value;
            }
        }
        return answer;
    }
}
