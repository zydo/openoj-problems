import java.util.HashMap;
import java.util.Map;

class Solution {

    public boolean canForceWin(int maxNumber, int target) {
        // Target already reached before any move: the first player wins.
        if (target <= 0) {
            return true;
        }
        // The whole pool cannot reach the target, so nobody ever wins.
        if (
            ((long) maxNumber * (maxNumber + 1)) / 2 <
            target
        ) {
            return false;
        }
        // State = bitmask of used integers (m <= 20 keeps it to 2^m states);
        // `remaining` is derived from the mask, so memoizing on it suffices.
        Map<Integer, Boolean> memo = new HashMap<>();
        return canWin(0, target, maxNumber, memo);
    }

    private boolean canWin(
        int state,
        int remaining,
        int maxNumber,
        Map<Integer, Boolean> memo
    ) {
        Boolean cached = memo.get(state);
        if (cached != null) {
            return cached;
        }
        for (int choice = 1; choice <= maxNumber; choice++) {
            int bit = 1 << (choice - 1);
            if ((state & bit) != 0) {
                continue;
            }
            // Immediate win on reaching the target, else the move wins
            // exactly when it strands the opponent in a losing state.
            if (
                choice >= remaining ||
                !canWin(
                    state | bit,
                    remaining - choice,
                    maxNumber,
                    memo
                )
            ) {
                memo.put(state, true);
                return true;
            }
        }
        memo.put(state, false);
        return false;
    }
}
