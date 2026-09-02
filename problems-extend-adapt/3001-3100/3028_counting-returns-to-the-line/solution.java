class Solution {

    public int countReturns(int[] nums) {
        int position = 0;
        int returns = 0;
        for (int num : nums) {
            position += num;
            if (position == 0) {
                returns++;
            }
        }
        return returns;
    }
}
