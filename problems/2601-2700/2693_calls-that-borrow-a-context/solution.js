class Solution {
    callWithContext(borrowCase) {
        // Enhance every function with borrow: it installs the
        // function on the context object under a freshly created symbol
        // and invokes it there. A method call always makes its object the
        // receiver, so context becomes this exactly as the built-in call
        // promises — and a symbol can never collide with an existing
        // property (string keys or other symbols), so the temporary slot
        // neither clobbers state nor leaks between calls.
        Function.prototype.borrow = function (context, ...args) {
            const fn = this;
            const slot = Symbol("borrow");
            context[slot] = fn;
            try {
                return context[slot](...args);
            } finally {
                delete context[slot];
            }
        };
        return borrowCase.fn.borrow(borrowCase.obj, ...borrowCase.inputs);
    }
}
