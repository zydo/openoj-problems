import java.util.TreeMap;

class MyCalendarThree {

    private final TreeMap<Integer, Integer> delta = new TreeMap<>();

    public MyCalendarThree() {}

    public int book(int startTime, int endTime) {
        delta.merge(startTime, 1, Integer::sum);
        delta.merge(endTime, -1, Integer::sum);
        int best = 0;
        int active = 0;
        for (int value : delta.values()) {
            active += value;
            best = Math.max(best, active);
        }
        return best;
    }
}
