import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

class Solution {

    public int minimumTime(int n, int[][] relations, int[] time) {
        List<List<Integer>> adjacency = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            adjacency.add(new ArrayList<>());
        }
        int[] indegree = new int[n + 1];
        for (int[] relation : relations) {
            adjacency.get(relation[0]).add(relation[1]);
            indegree[relation[1]] += 1;
        }
        // finish[i] = earliest month at which course i completes.
        int[] finish = new int[n + 1];
        Queue<Integer> queue = new ArrayDeque<>();
        for (int i = 1; i <= n; i++) {
            if (indegree[i] == 0) {
                finish[i] = time[i - 1];
                queue.add(i);
            }
        }
        int answer = 0;
        while (!queue.isEmpty()) {
            int course = queue.poll();
            answer = Math.max(answer, finish[course]);
            for (int nxt : adjacency.get(course)) {
                finish[nxt] = Math.max(
                    finish[nxt],
                    finish[course] + time[nxt - 1]
                );
                indegree[nxt] -= 1;
                if (indegree[nxt] == 0) {
                    queue.add(nxt);
                }
            }
        }
        return answer;
    }
}
