class Solution {

    public int greatestReachableXor(int[] nums) {
        int answer = 0;
        for (int value : nums) {
            answer |= value;
        }
        return answer;
    }
}
