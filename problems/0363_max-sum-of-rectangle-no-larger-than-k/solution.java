import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {

    public int maxSumSubmatrix(int[][] matrix, int k) {
        int m = matrix.length;
        int n = matrix[0].length;
        Long best = null;
        for (int top = 0; top < m; top++) {
            long[] colSum = new long[n];
            for (int bottom = top; bottom < m; bottom++) {
                for (int c = 0; c < n; c++) {
                    colSum[c] += matrix[bottom][c];
                }
                long prefix = 0;
                List<Long> prefixes = new ArrayList<>();
                prefixes.add(0L);
                for (int c = 0; c < n; c++) {
                    prefix += colSum[c];
                    long target = prefix - k;
                    int position = Collections.binarySearch(prefixes, target);
                    if (position < 0) {
                        position = -(position + 1); // bisect_left insertion point
                    }
                    if (position < prefixes.size()) {
                        long candidate = prefix - prefixes.get(position);
                        if (best == null || candidate > best) {
                            best = candidate;
                        }
                    }
                    int at = Collections.binarySearch(prefixes, prefix);
                    if (at < 0) {
                        at = -(at + 1);
                    }
                    prefixes.add(at, prefix);
                }
            }
        }
        return best.intValue();
    }
}
