import java.util.*;

class Solution {

    public int openLock(String[] deadends, String target) {
        Set<String> dead = new HashSet<>(Arrays.asList(deadends));
        String start = "0000";
        if (dead.contains(start)) return -1;
        Set<String> seen = new HashSet<>();
        seen.add(start);
        ArrayDeque<String> queue = new ArrayDeque<>();
        queue.add(start);
        int steps = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int s = 0; s < size; s++) {
                String state = queue.poll();
                if (state.equals(target)) return steps;
                for (int i = 0; i < 4; i++) {
                    for (int delta : new int[] { 1, -1 }) {
                        int digit = (state.charAt(i) - '0' + delta + 10) % 10;
                        String nxt =
                            state.substring(0, i) +
                            (char) ('0' + digit) +
                            state.substring(i + 1);
                        if (!seen.contains(nxt) && !dead.contains(nxt)) {
                            seen.add(nxt);
                            queue.add(nxt);
                        }
                    }
                }
            }
            steps++;
        }
        return -1;
    }
}
