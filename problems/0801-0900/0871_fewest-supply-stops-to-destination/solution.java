import java.util.*;

class Solution {

    public int minimumSupplyStops(int destination, int initialRange, int[][] supplies) {
        long fuel = initialRange;
        PriorityQueue<Integer> available = new PriorityQueue<>(Collections.reverseOrder());
        int stops = 0;
        int i = 0;
        int n = supplies.length;
        while (true) {
            if (fuel >= destination) {
                return stops;
            }
            while (i < n && supplies[i][0] <= fuel) {
                available.offer(supplies[i][1]);
                i++;
            }
            if (available.isEmpty()) {
                return -1;
            }
            fuel += available.poll();
            stops++;
        }
    }
}
