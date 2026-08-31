import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public String predictFactionVictory(String council) {
        // Two queues of senator indices, filled in string order: the fronts
        // are the earliest still-living senator of each party in the current
        // wrap-around pass.
        int n = council.length();
        Deque<Integer> radiant = new ArrayDeque<>();
        Deque<Integer> dire = new ArrayDeque<>();
        for (int i = 0; i < n; ++i) {
            (council.charAt(i) == 'R' ? radiant : dire).add(i);
        }
        // Each step the two fronts fight: the smaller index acts first, bans
        // the loser (popped for good), and re-enqueues itself at index + n,
        // its position in the next round's pass. Every fight removes one
        // senator permanently, so at most n - 1 fights decide the council.
        while (!radiant.isEmpty() && !dire.isEmpty()) {
            int r = radiant.poll();
            int d = dire.poll();
            if (r < d) {
                radiant.add(r + n);
            } else {
                dire.add(d + n);
            }
        }
        return radiant.isEmpty() ? "Dire" : "Radiant";
    }
}
