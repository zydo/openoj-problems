// Problem-provided oracle (KindOracle), JavaScript side. Evaluated
// with every submission by the judge; never editable in the editor.
// Constructed from the case state: the kinds assignment (generic
// array, integers may arrive as BigInt for exactness) plus the query
// budget; only hasSameKind reveals it.
class KindOracle {
    constructor(construction, budget) {
        this.kinds = construction[0].map((item) => Number(item));
        this.budget = budget;
    }

    hasSameKind(a, b) {
        if (this.budget <= 0) {
            throw new Error("KindOracle query budget exhausted");
        }
        this.budget -= 1;
        if (a < 0 || a >= this.kinds.length || b < 0 || b >= this.kinds.length) {
            return false;
        }
        return this.kinds[a] === this.kinds[b];
    }
}
