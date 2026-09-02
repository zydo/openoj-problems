// bundle-provided case carrier for this problem (not editable here; the
// judge assembles this source into every submission):
//   EchoCase exposes the problem's one judged invocation: .str is the
//   string under test and .times is the count echo(x) must return
//   it repeated by.
class EchoCase {
    str: string;
    times: number;
    constructor(values: any[], _queryBudget?: unknown) {
        const [str, times] = values;
        this.str = str;
        this.times = times;
    }
}
