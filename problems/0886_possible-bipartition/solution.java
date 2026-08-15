import java.util.*;

class Solution {

    public boolean possibleBipartition(int n, int[][] dislikes) {
        List<List<Integer>> adjacency = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            adjacency.add(new ArrayList<>());
        }
        for (int[] d : dislikes) {
            adjacency.get(d[0]).add(d[1]);
            adjacency.get(d[1]).add(d[0]);
        }

        int[] color = new int[n + 1]; // 0 = uncolored, 1 / -1 = the two groups
        for (int start = 1; start <= n; start++) {
            if (color[start] != 0) {
                continue;
            }
            color[start] = 1;
            Deque<Integer> queue = new ArrayDeque<>();
            queue.offer(start);
            while (!queue.isEmpty()) {
                int person = queue.poll();
                for (int neighbor : adjacency.get(person)) {
                    if (color[neighbor] == 0) {
                        color[neighbor] = -color[person];
                        queue.offer(neighbor);
                    } else if (color[neighbor] == color[person]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
