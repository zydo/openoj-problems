// One closed-over flag separates the single real call from every later
// one: on first entry the wrapper flips the flag, spreads all arguments
// through to fn and returns whatever fn produced; every later entry sees
// the flag already flipped and hands back undefined without touching fn.
function atMostOnce(fn: (...args: any[]) => any): (...args: any[]) => any {
    let called = false;
    return (...args: any[]): any => {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    };
}

class Solution {
    run(singleUseCase: SingleUseCase): void {
        singleUseCase.drive(atMostOnce);
    }
}
