import java.util.*;

class Solution {

    public int[] closestRoom(int[][] rooms, int[][] queries) {
        int n = rooms.length;
        int q = queries.length;
        Integer[] roomsBySize = new Integer[n];
        for (int i = 0; i < n; i++) {
            roomsBySize[i] = i;
        }
        Arrays.sort(roomsBySize, (a, b) ->
            Integer.compare(rooms[b][1], rooms[a][1])
        );
        Integer[] queryOrder = new Integer[q];
        for (int j = 0; j < q; j++) {
            queryOrder[j] = j;
        }
        Arrays.sort(queryOrder, (a, b) ->
            Integer.compare(queries[b][1], queries[a][1])
        );
        TreeSet<Integer> ids = new TreeSet<>();
        int[] answers = new int[q];
        int ri = 0;
        for (int j : queryOrder) {
            int preferred = queries[j][0];
            int minSize = queries[j][1];
            while (ri < n && rooms[roomsBySize[ri]][1] >= minSize) {
                ids.add(rooms[roomsBySize[ri]][0]);
                ri++;
            }
            Integer floor = ids.floor(preferred);
            Integer ceil = ids.ceiling(preferred);
            int best = -1;
            long bestDist = Long.MAX_VALUE;
            if (floor != null) {
                best = floor;
                bestDist = (long) preferred - floor;
            }
            if (ceil != null && (long) ceil - preferred < bestDist) {
                best = ceil;
            }
            answers[j] = best;
        }
        return answers;
    }
}
