import java.util.*;

class Solution {

    public int mostFilledContainers(int[] capacity, int[] contents, int spare) {
        int n = capacity.length;
        long[] needs = new long[n];
        for (int i = 0; i < n; i++) {
            needs[i] = (long) capacity[i] - contents[i];
        }
        Arrays.sort(needs);
        long remaining = spare;
        int full = 0;
        for (int i = 0; i < n && needs[i] <= remaining; i++) {
            remaining -= needs[i];
            full++;
        }
        return full;
    }
}
