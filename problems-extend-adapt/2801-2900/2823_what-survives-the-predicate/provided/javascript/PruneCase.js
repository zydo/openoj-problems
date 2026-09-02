// bundle-provided case carrier for this problem (not editable here; the
// judge assembles this source into every submission):
//   PruneCase exposes the problem's one judged invocation: .obj is the
//   case's JSON object or array and .fn is the callable built from the
//   case's function source. drive(deepPrune) hands the submission's
//   deepPrune that pair once and records what it returned; verdict()
//   hands the recorded answer to the judge — the filtered object or
//   array verbatim, with the documented "no valid data left" outcome
//   recorded as JSON null.
class PruneCase {
    constructor(values) {
        const [obj, source] = values;
        this.obj = obj;
        this.fn = new Function("return (" + source + ");")();
        this.filtered = null;
        this.driven = false;
    }

    drive(deepPrune) {
        if (typeof deepPrune !== "function") {
            throw new Error("drive expects the deepPrune function");
        }
        const result = deepPrune(this.obj, this.fn);
        this.filtered = result === undefined ? null : result;
        this.driven = true;
    }

    verdict() {
        if (!this.driven) {
            throw new Error("pruneCase.drive(deepPrune) was never called");
        }
        return this.filtered;
    }
}
