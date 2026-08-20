import java.util.Arrays;

class Solution {

    public int fewestSegments(int[][] segments, int span) {
        // Jump-game greedy over segments sorted by start.
        int[][] ordered = segments.clone();
        Arrays.sort(ordered, (a, b) -> a[0] != b[0] ? Integer.compare(a[0], b[0]) : Integer.compare(a[1], b[1]));
        int count = 0;
        int covered = 0;
        int farthest = 0;
        int i = 0;
        int n = ordered.length;
        while (covered < span) {
            // Cursor i never resets: every segment starting at or before `covered`
            // is examined once, tracking the farthest reach it enables.
            while (i < n && ordered[i][0] <= covered) {
                if (ordered[i][1] > farthest) {
                    farthest = ordered[i][1];
                }
                i++;
            }
            // No usable segment reaches past the current coverage: an unbridgeable gap.
            if (farthest == covered) {
                return -1;
            }
            // Take one segment — the farthest-reaching — and jump the frontier.
            covered = farthest;
            count++;
        }
        return count;
    }
}
