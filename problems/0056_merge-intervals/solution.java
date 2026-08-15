import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

class Solution {

    public int[][] merge(int[][] intervals) {
        int[][] ordered = intervals.clone();
        Arrays.sort(
            ordered,
            Comparator.<int[]>comparingInt(a -> a[0]).thenComparingInt(
                a -> a[1]
            )
        );
        List<int[]> merged = new ArrayList<>();
        for (int[] interval : ordered) {
            int start = interval[0];
            int end = interval[1];
            if (
                !merged.isEmpty() && start <= merged.get(merged.size() - 1)[1]
            ) {
                int[] last = merged.get(merged.size() - 1);
                if (end > last[1]) {
                    last[1] = end;
                }
            } else {
                merged.add(new int[] { start, end });
            }
        }
        return merged.toArray(new int[0][]);
    }
}
