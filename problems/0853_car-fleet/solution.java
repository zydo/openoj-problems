import java.util.Arrays;

class Solution {

    public int carFleet(int target, int[] position, int[] speed) {
        int n = position.length;
        Integer[] idx = new Integer[n];
        for (int i = 0; i < n; i++) {
            idx[i] = i;
        }
        Arrays.sort(idx, (a, b) -> {
            int cmp = Integer.compare(position[b], position[a]);
            if (cmp != 0) {
                return cmp;
            }
            return Integer.compare(speed[b], speed[a]);
        });
        int fleets = 0;
        double lastTime = 0.0;
        for (int i : idx) {
            double time = (double) (target - position[i]) / speed[i];
            if (time > lastTime) {
                fleets++;
                lastTime = time;
            }
        }
        return fleets;
    }
}
