import java.util.HashSet;
import java.util.Set;

class Solution {

    private int[] children;
    private int[] cookies;
    private int k;
    private long best;

    public int distributeCookies(int[] cookies, int k) {
        this.cookies = cookies;
        this.k = k;
        this.children = new int[k];
        this.best = Long.MAX_VALUE;
        backtrack(0, 0);
        return (int) best;
    }

    private void backtrack(int i, long curMax) {
        if (curMax >= best) return;
        if (i == cookies.length) {
            best = curMax;
            return;
        }
        Set<Long> tried = new HashSet<>();
        for (int j = 0; j < k; j++) {
            long cur = children[j];
            if (tried.contains(cur)) continue;
            tried.add(cur);
            children[j] += cookies[i];
            backtrack(i + 1, Math.max(curMax, children[j]));
            children[j] -= cookies[i];
        }
    }
}
