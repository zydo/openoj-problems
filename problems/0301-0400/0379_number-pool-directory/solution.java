import java.util.HashSet;
import java.util.PriorityQueue;
import java.util.Set;

class NumberPool {

    // A used set, a fresh-number counter, and a released min-heap: acquire()
    // pops the smallest released number before minting a fresh one, so
    // the smallest available number always comes out; returnNumber() is a
    // no-op on an available number.
    private final int limit;
    private int next;
    private final Set<Integer> used = new HashSet<>();
    private final PriorityQueue<Integer> released = new PriorityQueue<>();

    public NumberPool(int maxNumbers) {
        limit = maxNumbers;
    }

    public int acquire() {
        if (!released.isEmpty()) {
            // Every released number is smaller than every fresh one, so
            // the heap's minimum is the smallest available number.
            int number = released.poll();
            used.add(number);
            return number;
        }
        if (next < limit) {
            // Fresh numbers are minted in ascending order, so the counter
            // itself needs no bookkeeping.
            int number = next;
            ++next;
            used.add(number);
            return number;
        }
        return -1;
    }

    public boolean isAvailable(int number) {
        return !used.contains(number);
    }

    public void returnNumber(int number) {
        // remove() answers whether the number was in use, which makes
        // releasing an available number a no-op.
        if (used.remove(number)) {
            released.offer(number);
        }
    }
}
