import java.util.ArrayList;
import java.util.List;

class ReservationBook {

    // Accepted reservations as parallel sorted starts/ends lists: a new event can
    // only conflict with the reservation before and after its insertion point.
    private final List<Integer> starts = new ArrayList<>();
    private final List<Integer> ends = new ArrayList<>();

    public ReservationBook() {}

    public boolean reserveSlot(int start, int end) {
        int low = 0;
        int high = starts.size();
        while (low < high) {
            int mid = (low + high) >>> 1;
            if (starts.get(mid) <= start) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        int index = low - 1; // last reservation with start <= start
        // Half-open intervals: strict tests mean touching endpoints coexist.
        if (index >= 0 && ends.get(index) > start) {
            return false;
        }
        if (index + 1 < starts.size() && starts.get(index + 1) < end) {
            return false;
        }
        // Insert exactly at the searched position — stays sorted, no re-sort.
        starts.add(index + 1, start);
        ends.add(index + 1, end);
        return true;
    }
}
