class Solution {

    public int[] laterOpposites(int[] nums) {
        int even = 0;
        int odd = 0;
        int[] answer = new int[nums.length];
        for (int i = nums.length - 1; i >= 0; i--) {
            if (nums[i] % 2 == 0) {
                answer[i] = odd;
                even++;
            } else {
                answer[i] = even;
                odd++;
            }
        }
        return answer;
    }
}
