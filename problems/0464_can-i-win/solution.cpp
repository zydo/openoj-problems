class Solution {
  public:
    bool canIWin(int maxChoosableInteger, int desiredTotal) {
        if (desiredTotal <= 0) {
            return true;
        }
        if ((long long)maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) {
            return false;
        }
        vector<int8_t> memo(1 << maxChoosableInteger, -1);
        return canWin(0, desiredTotal, maxChoosableInteger, memo);
    }

  private:
    bool canWin(int state, int remaining, int maxChoosableInteger, vector<int8_t> &memo) {
        if (memo[state] != -1) {
            return memo[state] == 1;
        }
        for (int choice = 1; choice <= maxChoosableInteger; choice++) {
            int bit = 1 << (choice - 1);
            if (state & bit) {
                continue;
            }
            if (choice >= remaining ||
                !canWin(state | bit, remaining - choice, maxChoosableInteger, memo)) {
                memo[state] = 1;
                return true;
            }
        }
        memo[state] = 0;
        return false;
    }
};
