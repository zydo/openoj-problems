import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {

    public int fewestTransitLines(int[][] lines, int startStop, int endStop) {
        // Early exits: same stop needs no line; an endpoint on no route
        // has no path.
        if (startStop == endStop) {
            return 0;
        }
        // Map each stop to the lines passing through it.
        Map<Integer, List<Integer>> stopToRoutes = new HashMap<>();
        for (int r = 0; r < lines.length; r++) {
            for (int s : lines[r]) {
                stopToRoutes.computeIfAbsent(s, k -> new ArrayList<>()).add(r);
            }
        }
        if (!stopToRoutes.containsKey(startStop) || !stopToRoutes.containsKey(endStop)) {
            return -1;
        }
        Set<Integer> usedRoutes = new HashSet<>();
        Set<Integer> seenStops = new HashSet<>();
        seenStops.add(startStop);
        Deque<int[]> queue = new ArrayDeque<>();
        queue.add(new int[] { startStop, 0 });
        while (!queue.isEmpty()) {
            int[] front = queue.poll();
            int stop = front[0];
            int rides = front[1];
            List<Integer> list = stopToRoutes.getOrDefault(stop, new ArrayList<>());
            for (int r : list) {
                // BFS over stops: boarding a route reaches all its
                // stops one level deeper. Expand each route only once
                // ever — re-boarding can only revisit stops already
                // found at an equal or smaller ride count.
                if (usedRoutes.contains(r)) {
                    continue;
                }
                usedRoutes.add(r);
                for (int nxt : lines[r]) {
                    // The endStop is counted on sight — no need to
                    // enqueue it.
                    if (nxt == endStop) {
                        return rides + 1;
                    }
                    if (seenStops.add(nxt)) {
                        queue.add(new int[] { nxt, rides + 1 });
                    }
                }
            }
        }
        return -1;
    }
}
