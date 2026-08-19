import java.util.ArrayDeque;
import java.util.Deque;

class Solution {

    public int longestAffordableStretch(int[] startCosts, int[] usageCosts, long budget) {
        int n = startCosts.length;
        Deque<Integer> dq = new ArrayDeque<>(); // indices with decreasing startCosts
        long run = 0;
        int left = 0;
        int best = 0;
        // cost max(charge) + k*sum(run) is monotone in the window, so a
        // two-pointer sweep maximizes length under the budget
        for (int right = 0; right < n; right++) {
            // back indices with charge <= the new one can never be the max
            while (!dq.isEmpty() && startCosts[dq.peekLast()] <= startCosts[right]) {
                dq.pollLast();
            }
            dq.addLast(right);
            run += usageCosts[right];
            // over budget: shrink from the left, dropping the front (the
            // argmax) once left passes it; the window may empty to length 0
            while (!dq.isEmpty() && startCosts[dq.peekFirst()] + (long) (right - left + 1) * run > budget) {
                if (dq.peekFirst() == left) {
                    dq.pollFirst();
                }
                run -= usageCosts[left];
                left++;
            }
            best = Math.max(best, right - left + 1);
        }
        return best;
    }
}
