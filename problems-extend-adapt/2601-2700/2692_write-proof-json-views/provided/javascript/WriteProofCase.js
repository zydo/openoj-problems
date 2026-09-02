// bundle-provided case carrier for this problem (not editable here; the
// judge assembles this source into every submission):
//   WriteProofCase exposes the problem's one judged invocation: .obj is the
//   case's JSON value and .fn is the case's arrow-function source, which
//   receives the write-proof view of obj as its argument. drive() builds no
//   immutability itself — it hands the submission's writeProof the raw
//   obj, compiles the thunk, runs it to completion, and catches any
//   thrown value. verdict() is the recorded outcome: {"value": <v>} when
//   the thunk returned normally, {"error": "<message>"} when it threw.
class WriteProofCase {
    constructor(values) {
        const [obj, fn] = values;
        this.obj = obj;
        this.fn = fn;
        this.outcome = null;
    }

    // Build the write-proof view with the submission's writeProof, then
    // call the case's fn with that view as its argument, and record what
    // the attempted operation produced. Both builds stay outside the try
    // so a malformed source (or a broken writeProof) surfaces as a
    // runtime error rather than a verdict.
    drive(writeProof) {
        const immutable = writeProof(this.obj);
        const fn = new Function("return (" + this.fn + ");")();
        try {
            this.outcome = { value: fn(immutable) };
        } catch (problem) {
            this.outcome = {
                error: problem instanceof Error ? problem.message : String(problem),
            };
        }
    }

    verdict() {
        return this.outcome;
    }
}
