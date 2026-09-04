class NumberPack {
    constructor(nums) {
        this.nums = nums;
    }
    // + converts both operands to primitives by calling valueOf on each
    // before adding, so summing the stored elements here makes pack
    // addition yield the combined element total.
    valueOf() {
        return this.nums.reduce((sum, x) => sum + x, 0);
    }
    // String() (and template interpolation) falls back to toString,
    // which renders the comma-separated bracketed form "[a,b,c]" — an
    // empty array joins to "" and keeps its bare brackets, "[]".
    toString() {
        return "[" + this.nums.join(",") + "]";
    }
}

class Solution {
    solve(packCase) {
        const packs = packCase.arrays.map((nums) => new NumberPack(nums));
        if (packCase.operation === "String") {
            return String(packs[0]);
        }
        // Left-to-right fold with the real operator: the first reduction
        // adds two instances (both valueOf paths fire), later steps add a
        // plain number to the next instance, matching chained additions
        // exactly because integer summing is associative.
        return packs.reduce((sum, pack) => sum + pack);
    }
}
