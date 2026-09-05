class Solution {
    callMethod(methodCase) {
        const obj = makeAnyMethodObject();
        return obj[methodCase.method]();
    }
}

// The any-method object: a Proxy whose get trap answers EVERY
// property lookup — including inherited-looking names like "constructor"
// or "__proto__" — with a function closing over the looked-up name, so
// calling any method yields that method's own name.
function makeAnyMethodObject() {
    return new Proxy(
        {},
        {
            get(target, prop) {
                return () => prop;
            },
        },
    );
}
