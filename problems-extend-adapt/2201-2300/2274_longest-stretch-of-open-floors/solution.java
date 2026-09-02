import java.util.Arrays;

class Solution {

    public int longestOpenStretch(int bottom, int top, int[] blocked) {
        Arrays.sort(blocked);
        int best = Math.max(blocked[0] - bottom, top - blocked[blocked.length - 1]);
        for (int i = 1; i < blocked.length; i++) {
            best = Math.max(best, blocked[i] - blocked[i - 1] - 1);
        }
        return best;
    }
}
