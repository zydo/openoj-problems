import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int maximumRobots(
        int[] chargeTimes,
        int[] runningCosts,
        long budget
    ) {
        int n = chargeTimes.length;
        Deque<Integer> dq = new ArrayDeque<>(); // indices with decreasing chargeTimes
        long run = 0;
        int left = 0;
        int best = 0;
        for (int right = 0; right < n; right++) {
            while (
                !dq.isEmpty() &&
                chargeTimes[dq.peekLast()] <= chargeTimes[right]
            ) {
                dq.pollLast();
            }
            dq.addLast(right);
            run += runningCosts[right];
            while (
                !dq.isEmpty() &&
                chargeTimes[dq.peekFirst()] + (long) (right - left + 1) * run >
                    budget
            ) {
                if (dq.peekFirst() == left) {
                    dq.pollFirst();
                }
                run -= runningCosts[left];
                left++;
            }
            best = Math.max(best, right - left + 1);
        }
        return best;
    }
}
