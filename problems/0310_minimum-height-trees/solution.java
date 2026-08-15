import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Deque;
import java.util.List;

class Solution {

    public int[] findMinHeightTrees(int n, int[][] edges) {
        if (n <= 2) {
            int[] r = new int[n];
            for (int i = 0; i < n; i++) r[i] = i;
            return r;
        }
        List<List<Integer>> adjacency = new ArrayList<>();
        for (int i = 0; i < n; i++) adjacency.add(new ArrayList<>());
        int[] degree = new int[n];
        for (int[] e : edges) {
            int a = e[0],
                b = e[1];
            adjacency.get(a).add(b);
            adjacency.get(b).add(a);
            degree[a]++;
            degree[b]++;
        }
        Deque<Integer> leaves = new ArrayDeque<>();
        for (int i = 0; i < n; i++) if (degree[i] == 1) leaves.add(i);
        int remaining = n;
        while (remaining > 2) {
            for (int k = leaves.size(); k > 0; k--) {
                int leaf = leaves.poll();
                remaining--;
                for (int neighbor : adjacency.get(leaf)) {
                    degree[neighbor]--;
                    if (degree[neighbor] == 1) leaves.add(neighbor);
                }
            }
        }
        int[] result = new int[leaves.size()];
        int idx = 0;
        for (int v : leaves) result[idx++] = v;
        Arrays.sort(result);
        return result;
    }
}
