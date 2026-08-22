import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class VersionedArray {

    // Per-index history of [commitId, val] pairs; versions are virtual: the
    // counter current is the id the next commit() will return.
    private final Map<Integer, List<int[]>> history = new HashMap<>();
    private int current = 0;

    public VersionedArray(int length) {}

    public void set(int index, int val) {
        List<int[]> entries = history.computeIfAbsent(index, ignored -> new ArrayList<>());
        if (!entries.isEmpty() && entries.get(entries.size() - 1)[0] == current) {
            entries.get(entries.size() - 1)[1] = val;
        } else {
            entries.add(new int[] { current, val });
        }
    }

    public int commit() {
        return current++;
    }

    public int get(int index, int commitId) {
        List<int[]> entries = history.get(index);
        if (entries == null) {
            return 0;
        }
        int low = 0;
        int high = entries.size();
        while (low < high) {
            int mid = (low + high) >>> 1;
            if (entries.get(mid)[0] <= commitId) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low == 0 ? 0 : entries.get(low - 1)[1]; // low == 0: never written
    }
}
