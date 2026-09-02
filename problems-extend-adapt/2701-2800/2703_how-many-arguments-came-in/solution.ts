class Solution {
    solve(callArgsCase: CallArgsCase): number {
        // TypeScript's idiomatic arity read: a rest parameter collects
        // every positional argument the call actually delivered into one
        // array, whose .length is the requested count regardless of what
        // each value happens to be.
        function countArguments(...args: unknown[]): number {
            return args.length;
        }
        return countArguments(...callArgsCase.args);
    }
}
