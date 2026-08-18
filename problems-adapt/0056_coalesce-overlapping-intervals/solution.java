import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

class Solution {

    public int[][] coalesce(int[][] intervals) {
        // Sort by start (end as tiebreaker) so any interval overlapping an
        // earlier one must overlap or touch the most recent coalesced interval;
        // a sweep that only tracks the last coalesced interval then suffices.
        // Sorting the clone leaves the input untouched.
        int[][] ordered = intervals.clone();
        Arrays.sort(
            ordered,
            Comparator.<int[]>comparingInt(a -> a[0]).thenComparingInt(
                a -> a[1]
            )
        );
        List<int[]> coalesced = new ArrayList<>();
        for (int[] interval : ordered) {
            int start = interval[0];
            int end = interval[1];
            // `<=` counts touching intervals as overlapping, as required.
            // The start is already covered, so only the right edge matters.
            if (
                !coalesced.isEmpty() && start <= coalesced.get(coalesced.size() - 1)[1]
            ) {
                int[] last = coalesced.get(coalesced.size() - 1);
                // Raise the right edge when larger; an interval fully
                // swallowed by the coalesce leaves it untouched.
                if (end > last[1]) {
                    last[1] = end;
                }
            } else {
                // No overlap with the last coalesced interval: new group.
                coalesced.add(new int[] { start, end });
            }
        }
        return coalesced.toArray(new int[0][]);
    }
}
