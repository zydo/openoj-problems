// bundle-provided case carrier for this problem (not editable here; the
// judge assembles this source into every submission):
//   TreeDiffCase exposes one judged comparison: .obj1 and .obj2 are the two
//   deeply nested structures under test; drive(treeDiff) invokes the
//   submission's differ once with that pair and records its return, and
//   the recorded object is what the judge scores.
class TreeDiffCase {
    constructor(values) {
        const [obj1, obj2] = values;
        this.obj1 = obj1;
        this.obj2 = obj2;
        this.recorded = undefined;
        this.driven = false;
    }

    drive(treeDiff) {
        if (typeof treeDiff !== "function") {
            throw new Error("drive expects the treeDiff function");
        }
        const result = treeDiff(this.obj1, this.obj2);
        if (result === null || result === undefined || typeof result !== "object" || Array.isArray(result)) {
            throw new Error("treeDiff must return an object");
        }
        this.recorded = result;
        this.driven = true;
    }

    verdict() {
        if (!this.driven) {
            throw new Error("treeDiffCase.drive(treeDiff) was never called");
        }
        return this.recorded;
    }
}
