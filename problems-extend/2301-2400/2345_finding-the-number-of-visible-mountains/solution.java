import java.util.*;

class Solution {

    public int visibleMountains(int[][] peaks) {
        // (u, v) = (x - y, x + y): mountain b hides peak a iff
        // u_b <= u_a and v_b >= v_a. Sort by u ascending, v descending,
        // then a peak is visible iff its v beats every earlier one strictly.
        // v is carried negated, so "largest v so far" is the smallest negv.
        int n = peaks.length;
        long[] us = new long[n];
        long[] negvs = new long[n];
        Integer[] order = new Integer[n];
        for (int i = 0; i < n; i++) {
            us[i] = (long) peaks[i][0] - peaks[i][1];
            negvs[i] = -((long) peaks[i][0] + peaks[i][1]);
            order[i] = i;
        }
        Arrays.sort(order, (a, b) -> {
            if (us[a] != us[b]) return Long.compare(us[a], us[b]);
            return Long.compare(negvs[a], negvs[b]);
        });
        int count = 0;
        boolean bestSeen = false;
        long best = 0;
        int i = 0;
        while (i < n) {
            int j = i + 1;
            while (j < n && us[order[j]] == us[order[i]] && negvs[order[j]] == negvs[order[i]]) {
                j++;
            }
            if (j - i == 1 && (!bestSeen || negvs[order[i]] < best)) {
                count++;
            }
            if (!bestSeen || negvs[order[i]] < best) {
                best = negvs[order[i]];
                bestSeen = true;
            }
            i = j;
        }
        return count;
    }
}
