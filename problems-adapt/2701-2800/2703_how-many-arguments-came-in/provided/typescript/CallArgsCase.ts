// bundle-provided case carrier for this problem (not editable here; the
// judge assembles this source into every submission):
//   CallArgsCase exposes the problem's one judged invocation: .args is the
//   JSON array of values this case spreads into countArguments(), and
//   the judged result is how many arguments the call received.
class CallArgsCase {
    args: any[];
    constructor(values: any[], _queryBudget?: unknown) {
        const [args] = values;
        this.args = args;
    }
}
