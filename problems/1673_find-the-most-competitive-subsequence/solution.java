class Solution {

    public int[] mostCompetitive(int[] nums, int k) {
        int[] stack = new int[k];
        int top = 0;
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int value = nums[i];
            int remaining = n - i;
            while (top > 0 && stack[top - 1] > value && top + remaining > k) {
                top--;
            }
            if (top < k) {
                stack[top++] = value;
            }
        }
        return stack;
    }
}
