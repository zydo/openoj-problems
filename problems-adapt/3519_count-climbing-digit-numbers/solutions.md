# Solutions — Count Climbing-Digit Numbers

## Digit DP over Base-b Digits

Split the range as `count(r) - count(l - 1)`, where `count(x)` tallies the
climbers in `[0, x]`. Both bounds can carry a hundred decimal digits, so the
decrement of `l` is done as string arithmetic, and each bound is converted to
base `b` by repeated short division of its digit string: one left-to-right
sweep over the decimal digits emits the next base-`b` digit as the final
remainder, and the loop repeats until the string is exhausted. At most ~333
base-2 digits come out of this, so conversion is cheap next to the DP.

`count(x)` fills a bottom-up table `g[pos][last][tight][started]` over the
converted digits. `tight` records that the prefix chosen so far equals the
bound's own prefix, which caps the next digit at the bound's digit there
instead of `b - 1`. `started` separates leading zeros from the number's real
digits: before the number begins, any digit is legal and `last` is
meaningless; once started, a digit `d` is admissible only when `d >= last`,
which is precisely the climbing rule. The base case at the far end is 1, every
entry stays reduced modulo `10^9 + 7`, and the answer reads off
`g[0][0][tight=1][started=0]`.

For a feel of the counts: base 3 up to twenty gives exactly eight climbers —
1, 2, 11, 12, 22, 111, 112, 122 — and the DP reproduces that by letting the
"started" arm carry the growing digit while the tight arm trims everything
above the bound's own digits.

Edge cases: `l = "1"` makes the decrement yield `"0"`, whose count is 0;
leading zeros never fabricate climbers because the started flag isolates them
from genuine zero digits inside the number; and `b` tops out at 10, so each
position loops over at most ten digits.

**Complexity:** `O(D · (|r| + b²))` time with `D` the number of base-`b`
digits, `O(D · b)` space.
