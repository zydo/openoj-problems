class Solution {
  public:
    bool canForceWin(int maxNumber, int target) {
        // Target already reached before any move: the first player wins.
        if (target <= 0) {
            return true;
        }
        // The whole pool cannot reach the target, so nobody ever wins.
        if ((long long)maxNumber * (maxNumber + 1) / 2 < target) {
            return false;
        }
        // State = bitmask of used integers (m <= 20 keeps it to 2^m states);
        // `remaining` is derived from the mask, so memoizing on it suffices.
        vector<int8_t> memo(1 << maxNumber, -1);
        return canWin(0, target, maxNumber, memo);
    }

  private:
    bool canWin(int state, int remaining, int maxNumber, vector<int8_t> &memo) {
        if (memo[state] != -1) {
            return memo[state] == 1;
        }
        for (int choice = 1; choice <= maxNumber; choice++) {
            int bit = 1 << (choice - 1);
            if (state & bit) {
                continue;
            }
            // Immediate win on reaching the target, else the move wins
            // exactly when it strands the opponent in a losing state.
            if (choice >= remaining || !canWin(state | bit, remaining - choice, maxNumber, memo)) {
                memo[state] = 1;
                return true;
            }
        }
        memo[state] = 0;
        return false;
    }
};
