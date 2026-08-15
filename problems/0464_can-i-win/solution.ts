function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
    if (desiredTotal <= 0) {
        return true;
    }
    if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal) {
        return false;
    }
    const memo = new Map<number, boolean>();

    const canWin = (state: number, remaining: number): boolean => {
        const cached = memo.get(state);
        if (cached !== undefined) {
            return cached;
        }
        for (let choice = 1; choice <= maxChoosableInteger; choice++) {
            const bit = 1 << (choice - 1);
            if (state & bit) {
                continue;
            }
            if (
                choice >= remaining ||
                !canWin(state | bit, remaining - choice)
            ) {
                memo.set(state, true);
                return true;
            }
        }
        memo.set(state, false);
        return false;
    };

    return canWin(0, desiredTotal);
}
