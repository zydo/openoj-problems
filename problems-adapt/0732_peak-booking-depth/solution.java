import java.util.TreeMap;

class BookingDepth {

    // Per-instant change in the number of live intervals, held in time order:
    // +1 where one opens, -1 where one closes.
    private final TreeMap<Integer, Integer> delta = new TreeMap<>();

    public BookingDepth() {}

    public int add(int start, int end) {
        delta.merge(start, 1, Integer::sum);
        delta.merge(end, -1, Integer::sum);
        int best = 0;
        int active = 0;
        // Sweep boundaries in time order; the running sum is the number of
        // events active at that moment, so its peak is the deepest overlap seen.
        // Changes at one instant merge, so an interval closing where another
        // opens is never counted twice.
        for (int value : delta.values()) {
            active += value;
            best = Math.max(best, active);
        }
        return best;
    }
}
