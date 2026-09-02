class Solution {

    public int maxPieces(int[] nums) {
        int completed = 0;
        int current = -1;
        for (int num : nums) {
            current &= num;
            if (current == 0) {
                completed += 1;
                current = -1;
            }
        }
        return Math.max(completed, 1);
    }
}
