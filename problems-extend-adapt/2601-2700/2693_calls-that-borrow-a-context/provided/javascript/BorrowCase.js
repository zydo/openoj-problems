// bundle-provided case carrier for this problem (not editable here; the
// judge assembles this source into every submission):
//   BorrowCase exposes the problem's one judged invocation: .fn is the
//   callable built from the case's function source, .obj is the context
//   target (the first borrow argument), and .inputs holds the
//   additional arguments for that single call.
class BorrowCase {
    constructor(values) {
        const [source, obj, inputs] = values;
        this.fn = new Function("return (" + source + ");")();
        this.obj = obj;
        this.inputs = inputs;
    }
}
