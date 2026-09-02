// bundle-provided case carrier for this problem (not editable here; the
// judge assembles this source into every submission):
//   AssertionCase exposes the problem's one judged invocation: .func is the
//   case's thunk source — an arrow function of the submission's global
//   checkThat — and drive() runs that thunk to completion, catching any
//   thrown error. verdict() is the recorded outcome: {"value": <v>} when
//   the thunk returned normally, {"error": "<message>"} when it threw.
type AssertionOutcome = { value: any } | { error: string };

class AssertionCase {
    func: string;
    outcome: AssertionOutcome | null;
    constructor(values: any[], _queryBudget?: unknown) {
        const [func] = values;
        this.func = func;
        this.outcome = null;
    }

    // Build the case's thunk with the submission's checkThat in scope, call
    // it, and record what the tested expression produced. Compiling the
    // thunk stays outside the try so a malformed source surfaces as a
    // runtime error rather than a verdict.
    drive(checkThat: (val: any) => unknown): void {
        const thunk = new Function("checkThat", "return (" + this.func + ");")(checkThat) as () => any;
        try {
            this.outcome = { value: thunk() };
        } catch (problem) {
            this.outcome = {
                error: problem instanceof Error ? problem.message : String(problem),
            };
        }
    }

    verdict(): AssertionOutcome {
        return this.outcome as AssertionOutcome;
    }
}
