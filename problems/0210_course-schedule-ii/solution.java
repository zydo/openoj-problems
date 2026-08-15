import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

class Solution {

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        List<List<Integer>> adjacency = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            adjacency.add(new ArrayList<>());
        }
        int[] indegree = new int[numCourses];
        for (int[] pair : prerequisites) {
            int course = pair[0];
            int prereq = pair[1];
            adjacency.get(prereq).add(course);
            indegree[course] += 1;
        }
        Deque<Integer> queue = new ArrayDeque<>();
        for (int i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                queue.add(i);
            }
        }
        int[] order = new int[numCourses];
        int taken = 0;
        while (!queue.isEmpty()) {
            int node = queue.poll();
            order[taken++] = node;
            for (int nxt : adjacency.get(node)) {
                if (--indegree[nxt] == 0) {
                    queue.add(nxt);
                }
            }
        }
        if (taken == numCourses) {
            return order;
        }
        return new int[0];
    }
}
