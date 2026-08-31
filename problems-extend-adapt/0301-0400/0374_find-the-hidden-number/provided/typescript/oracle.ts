// Problem-provided oracle (NumberJudge), TypeScript side. Compiled with every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the hidden picked number (generic value) and the
// query budget. Integers may arrive as BigInt for exactness.
class NumberJudge {
    private pick: number;
    private budget: number;

    constructor(construction: any[], budget: any) {
        this.pick = Number(construction[0]);
        this.budget = Number(budget);
    }

    compareGuess(num: number): number {
        if (this.budget <= 0) {
            throw new Error("NumberJudge query budget exhausted");
        }
        this.budget -= 1;
        if (num > this.pick) {
            return -1;
        }
        if (num < this.pick) {
            return 1;
        }
        return 0;
    }
}
