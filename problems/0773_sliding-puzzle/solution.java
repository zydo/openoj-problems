import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashSet;
import java.util.Set;

class Solution {

    private static final String TARGET = "123450";
    private static final int[][] NEIGHBORS = {
        { 1, 3 },
        { 0, 2, 4 },
        { 1, 5 },
        { 0, 4 },
        { 3, 5, 1 },
        { 2, 4 },
    };

    public int slidingPuzzle(int[][] board) {
        StringBuilder sb = new StringBuilder();
        for (int[] row : board) {
            for (int v : row) {
                sb.append(v);
            }
        }
        String start = sb.toString();
        if (start.equals(TARGET)) {
            return 0;
        }
        Set<String> visited = new HashSet<>();
        visited.add(start);
        Deque<Object[]> queue = new ArrayDeque<>();
        queue.add(new Object[] { start, 0 });
        while (!queue.isEmpty()) {
            Object[] head = queue.poll();
            String state = (String) head[0];
            int moves = (Integer) head[1];
            int zero = state.indexOf('0');
            for (int nxt : NEIGHBORS[zero]) {
                char[] chars = state.toCharArray();
                char tmp = chars[zero];
                chars[zero] = chars[nxt];
                chars[nxt] = tmp;
                String newState = new String(chars);
                if (newState.equals(TARGET)) {
                    return moves + 1;
                }
                if (visited.add(newState)) {
                    queue.add(new Object[] { newState, moves + 1 });
                }
            }
        }
        return -1;
    }
}
