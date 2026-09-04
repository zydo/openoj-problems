# Solutions — Smallest Number After Deletions

## Monotonic stack

Exactly `len(digits) - k` characters survive, in their original order, so the
question is which subsequence of that fixed length reads lowest. Because all
candidates share a length, they compare position by position from the left,
which turns the choice into a greedy one: whenever a character already committed
to the answer is bigger than the character now arriving, committing it was a
mistake. Swapping the smaller character into that earlier slot lowers the value
no matter what happens afterwards, since one place further left outranks the
whole tail behind it.

A stack holds the committed run and enforces that rule directly. Each arriving
character pops every committed character above it, one erasure per pop, while
erasures remain; then it is pushed. The run therefore never descends. A
character enters the stack once and leaves at most once, so the sweep is linear
in the length of the input — necessary, since the input reaches 10^5 characters
and enumerating erasure choices is hopeless well before that.

Two adjustments finish the job. If the sweep ends with erasures unspent — which
is what happens when the input already ascends, as `2589` does — the surviving
run is the whole input and the leftovers must be taken off the _back_, where the
largest characters sit; `stack[:-k]` does that. And the greedy happily leaves a
zero at the front, as it does on `20304` after the `2` goes, so the leading
zeros are trimmed and an empty trim is reported as `"0"` rather than the empty
string.

The exchange argument behind the greedy is short: take any optimal answer that
agrees with the stack on some prefix and then keeps a character the stack
erased. That character is larger than the one the stack put in its place, so
substituting gives an answer no larger, and induction carries it to the end.

**Complexity:** `O(n)` time, `O(n)` space.
