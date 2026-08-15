import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {

    public int[] survivedRobotsHealths(
        int[] positions,
        int[] healths,
        String directions
    ) {
        int n = positions.length;
        int[] h = Arrays.copyOf(healths, n);
        Integer[] order = new Integer[n];
        for (int i = 0; i < n; i++) {
            order[i] = i;
        }
        Arrays.sort(order, (a, b) ->
            Integer.compare(positions[a], positions[b])
        );
        int[] stack = new int[n];
        int top = -1;
        for (int idx : order) {
            if (directions.charAt(idx) == 'R') {
                stack[++top] = idx;
            } else {
                boolean alive = true;
                while (top >= 0 && directions.charAt(stack[top]) == 'R') {
                    int t = stack[top];
                    if (h[t] < h[idx]) {
                        h[idx] -= 1;
                        top--;
                    } else if (h[t] > h[idx]) {
                        h[t] -= 1;
                        alive = false;
                        break;
                    } else {
                        top--;
                        alive = false;
                        break;
                    }
                }
                if (alive) {
                    stack[++top] = idx;
                }
            }
        }
        Set<Integer> survivors = new HashSet<>();
        for (int i = 0; i <= top; i++) {
            survivors.add(stack[i]);
        }
        List<Integer> out = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (survivors.contains(i)) {
                out.add(h[i]);
            }
        }
        int[] result = new int[out.size()];
        for (int i = 0; i < out.size(); i++) {
            result[i] = out.get(i);
        }
        return result;
    }
}
