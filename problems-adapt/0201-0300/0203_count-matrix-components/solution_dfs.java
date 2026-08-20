import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int countComponents(int[][] adjacency) {
        int n = adjacency.length;
        boolean[] visited = new boolean[n];
        int components = 0;
        for (int start = 0; start < n; start++) {
            if (visited[start]) {
                continue;
            }
            // An unvisited city during the sweep starts a new component;
            // this one traversal absorbs exactly one component.
            components++;
            visited[start] = true;
            Deque<Integer> stack = new ArrayDeque<>();
            stack.push(start);
            while (!stack.isEmpty()) {
                int city = stack.pop();
                for (int other = 0; other < n; other++) {
                    if (adjacency[city][other] == 1 && !visited[other]) {
                        // Mark at push time so no city is stacked twice;
                        // membership is by visitation, so self-loops and the
                        // symmetric matrix never double count.
                        visited[other] = true;
                        stack.push(other);
                    }
                }
            }
        }
        return components;
    }
}
