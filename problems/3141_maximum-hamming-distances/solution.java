import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {

    public int[] maxHammingDistances(int[] nums, int m) {
        int size = 1 << m;
        int full = size - 1;
        int[] dist = new int[size];
        java.util.Arrays.fill(dist, size + 1);
        Deque<Integer> queue = new ArrayDeque<>();
        Set<Integer> seen = new HashSet<>();
        for (int value : nums) {
            if (seen.add(value)) {
                dist[value] = 0;
                queue.add(value);
            }
        }
        while (!queue.isEmpty()) {
            int v = queue.poll();
            int nd = dist[v] + 1;
            for (int bit = 0; bit < m; bit++) {
                int u = v ^ (1 << bit);
                if (dist[u] > nd) {
                    dist[u] = nd;
                    queue.add(u);
                }
            }
        }
        List<Integer> result = new ArrayList<>();
        int[] out = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            out[i] = m - dist[full ^ nums[i]];
        }
        return out;
    }
}
