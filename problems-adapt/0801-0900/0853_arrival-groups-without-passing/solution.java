import java.util.Arrays;

class Solution {

    public int countArrivalGroups(int destination, int[] starts, int[] velocities) {
        int n = starts.length;
        // Cars cannot pass each other, so sweep from the car nearest
        // the destination backward.
        Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) {
            idx[i] = i;
        }
        Arrays.sort(idx, (a, b) -> {
            int cmp = Integer.compare(starts[b], starts[a]);
            if (cmp != 0) {
                return cmp;
            }
            return Integer.compare(velocities[b], velocities[a]);
        });
        int fleets = 0;
        double lastTime = 0.0;
        for (int i : idx) {
            // A car's fate is its alone-time to the destination.
            double time = (double) (destination - starts[i]) / velocities[i];
            // Strictly later never catches the fleet ahead: a new
            // fleet lead. Otherwise it merges (equality at the destination
            // merges), and lastTime — the current fleet's arrival
            // time — stays put.
            if (time > lastTime) {
                fleets++;
                lastTime = time;
            }
        }
        return fleets;
    }
}
