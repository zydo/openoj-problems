import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Set;

class SpreadSeating {

    // Max-heap of free-gap segments [dist, spot, l, r] between occupied
    // seats (sentinels -1 and n at the edges), lazily deleted through the
    // live-segment set: candidate seat and distance are pure functions of
    // (l, r), so stale entries are safe to skip.
    private final int n;
    private final List<Integer> occupied = new ArrayList<>();
    private final Set<Long> live = new HashSet<>();
    private final PriorityQueue<long[]> heap = new PriorityQueue<>((a, b) -> {
        if (a[0] != b[0]) {
            return Long.compare(b[0], a[0]); // larger distance first
        }
        return Long.compare(a[1], b[1]); // then lower seat number
    });

    public SpreadSeating(int n) {
        this.n = n;
    }

    public int assign() {
        if (occupied.isEmpty()) {
            occupied.add(0);
            addSegment(0, n);
            return 0;
        }
        while (!heap.isEmpty()) {
            long[] top = heap.poll();
            int spot = (int) top[1];
            int l = (int) top[2];
            int r = (int) top[3];
            if (!live.contains(key(l, r))) {
                continue; // stale entry
            }
            live.remove(key(l, r));
            int index = Collections.binarySearch(occupied, spot);
            occupied.add(index < 0 ? -(index + 1) : index, spot);
            addSegment(l, spot);
            addSegment(spot, r);
            return spot;
        }
        throw new IllegalStateException("no seat available");
    }

    public void vacate(int p) {
        int index = Collections.binarySearch(occupied, p);
        occupied.remove(index < 0 ? -(index + 1) : index);
        int left = index - 1 >= 0 ? occupied.get(index - 1) : -1;
        int right = index < occupied.size() ? occupied.get(index) : n;
        live.remove(key(left, p));
        live.remove(key(p, right));
        if (!occupied.isEmpty() && right - left >= 2) {
            addSegment(left, right);
        }
    }

    private void addSegment(int l, int r) {
        if (r - l < 2) {
            return; // no free seat strictly between
        }
        long dist;
        long spot;
        if (l == -1) {
            dist = r;
            spot = 0;
        } else if (r == n) {
            dist = n - 1 - l;
            spot = n - 1;
        } else {
            spot = (l + r) / 2;
            dist = (r - l) / 2;
        }
        live.add(key(l, r));
        heap.offer(new long[] { dist, spot, l, r });
    }

    private static long key(int l, int r) {
        return (l + 1) * 2_000_000_000L + r;
    }
}
