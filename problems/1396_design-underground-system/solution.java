import java.util.HashMap;
import java.util.Map;

class UndergroundSystem {

    private final Map<Integer, String[]> checkins = new HashMap<>(); // id -> {station, time}
    private final Map<String, long[]> totals = new HashMap<>(); // "start->end" -> {sum, count}

    public UndergroundSystem() {}

    public void checkIn(int id, String stationName, int t) {
        checkins.put(id, new String[] { stationName, Integer.toString(t) });
    }

    public void checkOut(int id, String stationName, int t) {
        String[] start = checkins.remove(id);
        long duration = t - Long.parseLong(start[1]);
        String key = start[0] + "->" + stationName;
        long[] bucket = totals.computeIfAbsent(key, ignored -> new long[2]);
        bucket[0] += duration;
        bucket[1] += 1;
    }

    public double getAverageTime(String startStation, String endStation) {
        long[] bucket = totals.get(startStation + "->" + endStation);
        return (double) bucket[0] / bucket[1];
    }
}
