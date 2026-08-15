import java.util.HashMap;
import java.util.Map;

class Solution {

    public boolean canIWin(int maxChoosableInteger, int desiredTotal) {
        if (desiredTotal <= 0) {
            return true;
        }
        if (
            ((long) maxChoosableInteger * (maxChoosableInteger + 1)) / 2 <
            desiredTotal
        ) {
            return false;
        }
        Map<Integer, Boolean> memo = new HashMap<>();
        return canWin(0, desiredTotal, maxChoosableInteger, memo);
    }

    private boolean canWin(
        int state,
        int remaining,
        int maxChoosableInteger,
        Map<Integer, Boolean> memo
    ) {
        Boolean cached = memo.get(state);
        if (cached != null) {
            return cached;
        }
        for (int choice = 1; choice <= maxChoosableInteger; choice++) {
            int bit = 1 << (choice - 1);
            if ((state & bit) != 0) {
                continue;
            }
            if (
                choice >= remaining ||
                !canWin(
                    state | bit,
                    remaining - choice,
                    maxChoosableInteger,
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
