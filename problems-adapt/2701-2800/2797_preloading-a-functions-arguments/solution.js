// The wrapper copies args, walks the copy once overwriting each exact "_"
// with restArgs[cursor++], and appends whatever restArgs the cursor never
// reached. Top-level-only exact equality keeps a "_" nested inside an
// array — or a near-miss like "__" — an ordinary value.
var preload = function (fn, args) {
    return function (...restArgs) {
        const modified = [...args];
        let cursor = 0;
        for (let i = 0; i < modified.length && cursor < restArgs.length; i++) {
            if (modified[i] === "_") {
                modified[i] = restArgs[cursor++];
            }
        }
        // apply, not spread: V8 puts spread call arguments on the stack
        // and a long argument list overflows it
        return fn.apply(null, modified.concat(restArgs.slice(cursor)));
    };
};

class Solution {
    runPartial(preloadCase) {
        const preloadFn = preload(preloadCase.fn, preloadCase.args);
        return preloadFn(...preloadCase.restArgs);
    }
}
