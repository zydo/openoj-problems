import java.util.HashMap;
import java.util.Map;

class TransitLog {

    private final Map<Integer, String[]> checkins = new HashMap<>(); // id -> {station, time}
    private final Map<String, long[]> totals = new HashMap<>(); // "start->end" -> {sum, count}

    public TransitLog() {}

    public void tapIn(int id, String stop, int t) {
        checkins.put(id, new String[] { stop, Integer.toString(t) });
    }

    public void tapOut(int id, String stop, int t) {
        // the trip collapses to one duration folded into a per-pair sum+count;
        // consuming the check-in frees the id to travel again immediately
        String[] start = checkins.remove(id);
        long duration = t - Long.parseLong(start[1]);
        String key = start[0] + "->" + stop;
        long[] bucket = totals.computeIfAbsent(key, ignored -> new long[2]);
        bucket[0] += duration;
        bucket[1] += 1;
    }

    public double averageTrip(String fromStop, String toStop) {
        // no durations are ever stored — just divide the running totals
        long[] bucket = totals.get(fromStop + "->" + toStop);
        return (double) bucket[0] / bucket[1];
    }
}
