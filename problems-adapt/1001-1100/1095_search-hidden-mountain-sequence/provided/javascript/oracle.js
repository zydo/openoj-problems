// Problem-provided oracle (MountainReader), JavaScript side. Evaluated
// with every submission by the judge; never editable in the editor.
// Constructed from the case state: the sequence's values (generic
// array) and the query budget. Integers may arrive as BigInt for
// exactness.
class MountainReader {
    constructor(construction, budget) {
        this.values = construction[0].map((item) => Number(item));
        this.budget = Number(budget);
    }

    get(index) {
        if (this.budget <= 0) {
            throw new Error("MountainReader query budget exhausted");
        }
        this.budget -= 1;
        if (index < 0 || index >= this.values.length) {
            throw new Error("MountainReader index out of range");
        }
        return this.values[index];
    }

    length() {
        return this.values.length;
    }
}
