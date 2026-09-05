# Solutions — Kindred Pair XOR I

## Check every pair

The constraints are tiny — at most `50` values, each at most `100` — so the
direct reading of the definition is already fast enough: try every way to
pick two integers and keep the best XOR among the pairs that qualify. The
pair condition is symmetric in `x` and `y`, and picking the same integer
twice is explicitly allowed, so it is enough to loop over the pairs
`nums[i]` and `nums[j]` with `j >= i`; that covers every unordered pair plus
the `(x, x)` pairs, which are always kindred and always contribute `0`.

A pair `(x, y)` with `x <= y` is kindred exactly when `y - x <= x`, so the
check is one subtraction and one comparison per candidate. Every XOR value
involved is below `128` (two numbers at most `100` differ only in their low
seven bits), so plain 32-bit integers are comfortable in every language and
no special width handling is needed. Whenever a candidate beats the running
maximum, it replaces it; the maximum starts at `0`, which is already a valid
answer for any input because `(x, x)` is always kindred.

**Complexity:** `O(n^2)` time, `O(1)` space.
