class Solution {

    public int lengthOfLIS(int[] nums, int k) {
        int size = 1;
        while (size <= 100000) {
            size *= 2;
        }
        int[] tree = new int[2 * size];
        int answer = 0;
        for (int x : nums) {
            int current = query(tree, size, Math.max(1, x - k), x - 1) + 1;
            int i = x + size;
            while (i >= 1 && tree[i] < current) {
                tree[i] = current;
                i /= 2;
            }
            answer = Math.max(answer, current);
        }
        return answer;
    }

    private int query(int[] tree, int size, int left, int right) {
        int best = 0;
        int lo = left + size;
        int hi = right + size + 1;
        while (lo < hi) {
            if ((lo & 1) == 1) {
                best = Math.max(best, tree[lo]);
                lo++;
            }
            if ((hi & 1) == 1) {
                hi--;
                best = Math.max(best, tree[hi]);
            }
            lo /= 2;
            hi /= 2;
        }
        return best;
    }
}
