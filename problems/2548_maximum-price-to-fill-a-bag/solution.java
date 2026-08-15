import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {

    public double maxPrice(int[][] items, int capacity) {
        long totalWeight = 0;
        for (int[] item : items) totalWeight += item[1];
        if (totalWeight < capacity) return -1.0;
        // Stable sort by price-per-weight ratio, descending.
        List<int[]> ordered = new ArrayList<>();
        for (int[] item : items) ordered.add(item);
        Collections.sort(ordered, (a, b) ->
            Double.compare((double) b[0] / b[1], (double) a[0] / a[1])
        );
        double price = 0.0;
        long remaining = capacity;
        for (int[] item : ordered) {
            if (remaining <= 0) break;
            int p = item[0],
                w = item[1];
            if (w <= remaining) {
                price += p;
                remaining -= w;
            } else {
                price += p * ((double) remaining / w);
                remaining = 0;
            }
        }
        return price;
    }
}
