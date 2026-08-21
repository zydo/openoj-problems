import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

class PriceLog {

    // timestamp -> currently valid price; a correction is an overwrite.
    private final Map<Integer, Integer> priceAt = new HashMap<>();
    // Twin lazy heaps over {price, timestamp}: entries are pushed on record
    // and never removed; stale ones are discarded only at the top.
    private final PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> Integer.compare(b[0], a[0]));
    private final PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
    private int latestTimestamp = 0;

    public PriceLog() {}

    public void record(int timestamp, int price) {
        priceAt.put(timestamp, price);
        if (timestamp > latestTimestamp) {
            latestTimestamp = timestamp;
        }
        maxHeap.offer(new int[] { price, timestamp });
        minHeap.offer(new int[] { price, timestamp });
    }

    public int latest() {
        return priceAt.get(latestTimestamp);
    }

    public int highest() {
        // An entry is garbage exactly when its timestamp now maps to a
        // different price; poll those, then the top is the true highest.
        while (true) {
            int[] top = maxHeap.peek();
            if (priceAt.get(top[1]) == top[0]) {
                return top[0];
            }
            maxHeap.poll();
        }
    }

    public int lowest() {
        // Same lazy cleanup on the min side.
        while (true) {
            int[] top = minHeap.peek();
            if (priceAt.get(top[1]) == top[0]) {
                return top[0];
            }
            minHeap.poll();
        }
    }
}
