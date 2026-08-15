import java.util.*;

class Solution {

    public int minJumps(int[] arr) {
        int n = arr.length;
        if (n == 1) {
            return 0;
        }
        Map<Integer, List<Integer>> indices = new HashMap<>();
        for (int i = 0; i < n; i++) {
            indices.computeIfAbsent(arr[i], k -> new ArrayList<>()).add(i);
        }
        int[] dist = new int[n];
        Arrays.fill(dist, -1);
        dist[0] = 0;
        Deque<Integer> queue = new ArrayDeque<>();
        queue.add(0);
        while (!queue.isEmpty()) {
            int i = queue.poll();
            int d = dist[i] + 1;
            List<Integer> nexts = indices.remove(arr[i]);
            if (nexts == null) {
                nexts = new ArrayList<>();
            }
            nexts.add(i - 1);
            nexts.add(i + 1);
            for (int j : nexts) {
                if (j >= 0 && j < n && dist[j] == -1) {
                    dist[j] = d;
                    if (j == n - 1) {
                        return d;
                    }
                    queue.add(j);
                }
            }
        }
        return dist[n - 1];
    }
}
