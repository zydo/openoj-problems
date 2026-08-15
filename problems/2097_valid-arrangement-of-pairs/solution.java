import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Deque;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public int[][] validArrangement(int[][] pairs) {
        Map<Integer, List<Integer>> adj = new LinkedHashMap<>();
        Map<Integer, Integer> indeg = new HashMap<>();
        Map<Integer, Integer> outdeg = new LinkedHashMap<>();
        for (int[] p : pairs) {
            adj.computeIfAbsent(p[0], k -> new ArrayList<>()).add(p[1]);
            outdeg.merge(p[0], 1, Integer::sum);
            indeg.merge(p[1], 1, Integer::sum);
        }

        int start = pairs[0][0];
        for (int u : outdeg.keySet()) {
            if (outdeg.get(u) - indeg.getOrDefault(u, 0) == 1) {
                start = u;
                break;
            }
        }

        Deque<Integer> stack = new ArrayDeque<>();
        List<Integer> path = new ArrayList<>();
        stack.push(start);
        while (!stack.isEmpty()) {
            int u = stack.peek();
            List<Integer> edges = adj.get(u);
            if (edges != null && !edges.isEmpty()) {
                stack.push(edges.remove(edges.size() - 1));
            } else {
                path.add(u);
                stack.pop();
            }
        }
        Collections.reverse(path);

        int[][] res = new int[path.size() - 1][2];
        for (int i = 0; i + 1 < path.size(); i++) {
            res[i][0] = path.get(i);
            res[i][1] = path.get(i + 1);
        }
        return res;
    }
}
