impl Solution {
    pub fn can_force_win(maxNumber: i32, target: i32) -> bool {
        // Target already reached before any move: the first player wins.
        if target <= 0 {
            return true;
        }
        // The whole pool cannot reach the target, so nobody ever wins.
        let max = maxNumber;
        if (max as i64) * (max as i64 + 1) / 2 < target as i64 {
            return false;
        }
        // State = bitmask of used integers (m <= 20 keeps it to 2^m
        // states); `remaining` is derived from the mask, so memoizing on it
        // suffices.
        let mut memo: Vec<i8> = vec![-1; 1usize << max];

        fn can_win(state: usize, remaining: i32, max: i32, memo: &mut Vec<i8>) -> bool {
            if memo[state] != -1 {
                return memo[state] == 1;
            }
            let mut choice = 1;
            while choice <= max {
                let bit = 1usize << (choice - 1);
                if state & bit == 0 {
                    // Immediate win on reaching the target, else the move
                    // wins exactly when it strands the opponent in a losing
                    // state.
                    if choice >= remaining || !can_win(state | bit, remaining - choice, max, memo) {
                        memo[state] = 1;
                        return true;
                    }
                }
                choice += 1;
            }
            memo[state] = 0;
            false
        }

        can_win(0, target, max, &mut memo)
    }
}
