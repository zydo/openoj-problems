import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int provinces = 0;
        for (int start = 0; start < n; start++) {
            if (visited[start]) {
                continue;
            }
            provinces++;
            visited[start] = true;
            Deque<Integer> stack = new ArrayDeque<>();
            stack.push(start);
            while (!stack.isEmpty()) {
                int city = stack.pop();
                for (int other = 0; other < n; other++) {
                    if (isConnected[city][other] == 1 && !visited[other]) {
                        visited[other] = true;
                        stack.push(other);
                    }
                }
            }
        }
        return provinces;
    }
}
