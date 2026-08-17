import java.util.PriorityQueue;

class SeatManager {

    private final PriorityQueue<Integer> returned = new PriorityQueue<>();
    private int nextSeat = 1;

    public SeatManager(int n) {
        this.nextSeat = 1;
    }

    public int reserve() {
        if (!returned.isEmpty() && returned.peek() < nextSeat) {
            return returned.poll();
        }
        return nextSeat++;
    }

    public void unreserve(int seatNumber) {
        returned.offer(seatNumber);
    }
}
