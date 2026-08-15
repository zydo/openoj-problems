class Solution {

    public int sortArray(int[] nums) {
        int n = nums.length;
        int[] targetA = new int[n];
        int[] targetB = new int[n];
        targetA[0] = n - 1;
        for (int v = 1; v < n; v++) targetA[v] = v - 1;
        for (int v = 0; v < n; v++) targetB[v] = v;
        return Math.min(opsFor(nums, targetA), opsFor(nums, targetB));
    }

    private int opsFor(int[] nums, int[] target) {
        int n = nums.length;
        int[] sigma = new int[n];
        for (int i = 0; i < n; i++) sigma[i] = target[nums[i]];
        int blank = -1;
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) {
                blank = i;
                break;
            }
        }
        boolean[] visited = new boolean[n];
        int total = 0;
        for (int i = 0; i < n; i++) {
            if (visited[i]) continue;
            int length = 0;
            boolean hasBlank = false;
            int j = i;
            while (!visited[j]) {
                visited[j] = true;
                if (j == blank) hasBlank = true;
                length++;
                j = sigma[j];
            }
            if (hasBlank) total += length - 1;
            else if (length >= 2) total += length + 1;
        }
        return total;
    }
}
