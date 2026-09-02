// Problem-provided driver for 2677 dealing-the-array-into-hands. Assembled into every
// submission by the judge ahead of the submitted code; never editable in
// the editor. This file is the hidden implementation — solvers see only
// the public API documented in the statement.
//
// The driver owns one case's flat array and hand size (the same shape as
// the statement's Input). drive() receives the submission's chinking
// function and calls it exactly once with (.arr, .size); the returned
// array of hands is validated to be an array of arrays and recorded as
// this case's judged output.

class DealProbe {
    // The interactive wrapper hands the oracle one array of the manifest's
    // construct values (arr, size) plus the query budget (unused — one
    // judged call per case needs no call accounting).
    constructor([arr, size], budget) {
        void budget;
        this.arr = arr;
        this.size = size;
        this.output = null;
    }

    // Run the submission's dealer against this case's input.
    drive(dealFn) {
        if (typeof dealFn !== "function") {
            throw new Error("drive expects the submission's function");
        }
        const result = dealFn(this.arr, this.size);
        if (!Array.isArray(result) || !result.every((row) => Array.isArray(row))) {
            throw new Error("deal must return an array of subarrays");
        }
        this.output = result;
    }

    verdict() {
        return this.output;
    }
}
