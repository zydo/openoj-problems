# Solutions — Evaluate Nested Arithmetic Calls

## Recursive Descent Parsing

The grammar has two alternatives and only two — a literal, or `op(a,b)` with a
three-letter name — so one recursive routine `parse(i) -> (value, next index)`
covers the entire language. The character at `i` selects the branch: a digit or
`-` opens a literal whose sign-and-digit run is scanned off and handed to an
integer conversion; anything else must be an operator, and its three letters
come out of a single slice.

The operator branch tracks the fixed spelling of a call exactly: step four
characters forward to sit just past `op(`, parse the first argument
recursively, step over the comma, parse the second argument, step over the
`)`. Every recursive call returns with its index already parked after what it
ate, so the caller never re-reads anything. The four-way test on the name then
applies the arithmetic to the two sub-values on the way out of the recursion —
one left-to-right pass, evaluating bottom-up.

For `div(sub(mul(9,4),6),add(2,1))` the innermost `mul(9,4)` resolves to 36,
`sub(36,6)` to 30, `add(2,1)` to 3, and the outer division yields 10 — the
recursion does this bookkeeping by construction.

Two boundaries matter. Values can climb toward `2^62` in deep chains of
`mul`, so the fixed-width languages need full 64-bit arithmetic; quotients are
guaranteed exact, so plain division is safe. And the recursion depth equals
the call nesting depth, which the length bound lets grow proportionally to the
input — a run of thousands of chained calls is what the time and space bounds
have in mind.

**Complexity:** `O(L)` time (L = length of `expression`), `O(L)` space for the
recursion stack.
