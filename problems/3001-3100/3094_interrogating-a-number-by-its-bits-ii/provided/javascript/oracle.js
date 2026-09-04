// Problem-provided oracle (RestlessNumber), JavaScript side. Evaluated with
// every submission by the judge; never editable in the editor.
// Constructed from the case state: the initial hidden number (generic
// value) and the query budget. Integers may arrive as BigInt for
// exactness.
class RestlessNumber {
    constructor(construction, budget) {
        this.n = Number(construction[0]);
        this.budget = Number(budget);
    }

    commonBits(num) {
        if (this.budget <= 0) {
            throw new Error("RestlessNumber query budget exhausted");
        }
        this.budget -= 1;
        let diff = (this.n ^ num) & 0x3fffffff;
        let agreements = 30;
        while (diff !== 0) {
            agreements -= diff & 1;
            diff >>>= 1;
        }
        this.n ^= num;
        return agreements;
    }
}
