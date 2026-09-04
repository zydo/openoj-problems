// The whole contract is strict equality. checkThat captures its argument in
// a closure and hands back the two matchers over that one captured value:
// sameAs reports true when the values === each other and throws the exact
// message "Not Equal" otherwise; notSameAs is the complement, throwing
// "Equal" when the values coincide. Native === supplies every facet the
// cases probe — no type coercion, NaN never equal to itself, 0 === -0,
// and objects compared by reference, not contents.
function checkThat(val) {
    return {
        sameAs(other) {
            if (val === other) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notSameAs(other) {
            if (val !== other) {
                return true;
            }
            throw new Error("Equal");
        },
    };
}

class Solution {
    run(assertionCase) {
        assertionCase.drive(checkThat);
    }
}
