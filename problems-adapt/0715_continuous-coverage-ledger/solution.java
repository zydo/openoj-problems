import java.util.ArrayList;
import java.util.List;

class CoverageLedger {

    // Tracked set as canonical disjoint intervals (parallel starts/ends):
    // the lists stay sorted and gap-separated, so a fully-tracked query is
    // always contained in a single stored interval.
    private final List<Integer> starts = new ArrayList<>();
    private final List<Integer> ends = new ArrayList<>();

    public CoverageLedger() {}

    public void addSpan(int start, int end) {
        int i = lowerBound(ends, start); // first interval ending at/after start
        int j = upperBound(starts, end); // first interval starting after end
        if (i < j) {
            start = Math.min(start, starts.get(i));
            end = Math.max(end, ends.get(j - 1));
        }
        splice(starts, i, j, start);
        splice(ends, i, j, end);
    }

    public boolean coversSpan(int start, int end) {
        int i = upperBound(starts, start) - 1; // last interval starting at/before start
        return i >= 0 && ends.get(i) >= end;
    }

    public void removeSpan(int start, int end) {
        int i = upperBound(ends, start); // first interval ending after start
        int j = lowerBound(starts, end); // first interval starting at/after end
        List<Integer> newStarts = new ArrayList<>();
        List<Integer> newEnds = new ArrayList<>();
        if (i < j) {
            if (starts.get(i) < start) {
                newStarts.add(starts.get(i));
                newEnds.add(start);
            }
            if (ends.get(j - 1) > end) {
                newStarts.add(end);
                newEnds.add(ends.get(j - 1));
            }
        }
        replace(starts, i, j, newStarts);
        replace(ends, i, j, newEnds);
    }

    /** First index with values[index] >= target (bisect_left). */
    private static int lowerBound(List<Integer> values, int target) {
        int low = 0;
        int high = values.size();
        while (low < high) {
            int mid = (low + high) >>> 1;
            if (values.get(mid) < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    /** First index with values[index] > target (bisect_right). */
    private static int upperBound(List<Integer> values, int target) {
        int low = 0;
        int high = values.size();
        while (low < high) {
            int mid = (low + high) >>> 1;
            if (values.get(mid) <= target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    private static void splice(List<Integer> values, int from, int to, int value) {
        values.subList(from, to).clear();
        values.add(from, value);
    }

    private static void replace(List<Integer> values, int from, int to, List<Integer> replacement) {
        values.subList(from, to).clear();
        values.addAll(from, replacement);
    }
}
