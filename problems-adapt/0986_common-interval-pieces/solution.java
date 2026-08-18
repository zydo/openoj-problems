import java.util.ArrayList;
import java.util.List;

class Solution {

    public int[][] commonIntervalPieces(int[][] rangesA, int[][] rangesB) {
        List<int[]> result = new ArrayList<>();
        int i = 0;
        int j = 0;
        while (i < rangesA.length && j < rangesB.length) {
            // The overlap of the two current intervals is [max starts,
            // min ends]; lo <= hi means they intersect (closed intervals,
            // so touching endpoints still count).
            int lo = Math.max(rangesA[i][0], rangesB[j][0]);
            int hi = Math.min(rangesA[i][1], rangesB[j][1]);
            if (lo <= hi) {
                result.add(new int[] { lo, hi });
            }
            // Retire the interval that ends earlier: later intervals in the
            // other list start strictly after its end, so it is done forever.
            if (rangesA[i][1] < rangesB[j][1]) {
                i++;
            } else {
                j++;
            }
        }
        return result.toArray(new int[0][]);
    }
}
