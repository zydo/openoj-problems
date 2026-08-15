import java.util.Arrays;

class Solution {

    public int minGroups(int[][] intervals) {
        int n = intervals.length;
        int[] starts = new int[n];
        int[] ends = new int[n];
        for (int i = 0; i < n; i++) {
            starts[i] = intervals[i][0];
            ends[i] = intervals[i][1];
        }
        Arrays.sort(starts);
        Arrays.sort(ends);
        int groups = 0;
        int active = 0;
        int i = 0;
        int j = 0;
        while (i < n) {
            if (starts[i] <= ends[j]) {
                active += 1;
                if (active > groups) {
                    groups = active;
                }
                i += 1;
            } else {
                active -= 1;
                j += 1;
            }
        }
        return groups;
    }
}
