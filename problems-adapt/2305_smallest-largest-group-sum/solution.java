import java.util.HashSet;
import java.util.Set;

class Solution {

    private int[] groups;
    private int[] nums;
    private int k;
    private long best;

    public int smallestLargestGroupSum(int[] nums, int k) {
        this.nums = nums;
        this.k = k;
        this.groups = new int[k];
        // +inf start guarantees the first complete leaf always improves on best
        this.best = Long.MAX_VALUE;
        backtrack(0, 0);
        return (int) best;
    }

    private void backtrack(int i, long curMax) {
        // bound pruning: the running max only grows, so this branch can no
        // longer beat the best complete distribution found so far
        if (curMax >= best) return;
        // all items placed: the running max is this leaf's cost
        if (i == nums.length) {
            best = curMax;
            return;
        }
        Set<Long> tried = new HashSet<>();
        for (int j = 0; j < k; j++) {
            long cur = groups[j];
            // symmetry: groups holding equal totals are interchangeable,
            // so try each distinct total only once
            if (tried.contains(cur)) continue;
            tried.add(cur);
            groups[j] += nums[i];
            backtrack(i + 1, Math.max(curMax, groups[j]));
            groups[j] -= nums[i];
        }
    }
}
