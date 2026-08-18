# Solutions — Calculator With Parentheses And Precedence

## Recursive descent parser

Stop thinking of `s` as characters and think of it as three nested layers. The
top layer is a chain of terms separated by `'+'` and `'-'`; the middle layer is a
chain of factors separated by `'*'` and `'/'`; the bottom layer is either a digit
run or a bracketed expression. Write one function per layer — `expr`, `term`,
`factor` — and hand all three the same cursor into the string. Precedence falls
out of the layering, because `expr` only ever adds up values that `term` has
already finished multiplying. Nesting falls out of the recursion, because
`factor` reacts to `'('` by calling `expr` and then stepping over the `')'` that
closed it.

The contract that makes this work is where each function leaves the cursor: on
the first symbol it is not responsible for. `term` returns as soon as it meets
`'+'`, `'-'`, `')'` or the end; `expr` returns on `')'` or the end. Whoever asked
for the value picks up from exactly there, which is how a `')'` gets handed back
to the enclosing `factor` rather than being consumed by mistake. Digit runs are
read greedily, so multi-digit operands cost nothing extra, and the cursor crosses
each character once.

Division is the one place a port goes wrong. A group can evaluate to a negative
number, and the required rounding is toward zero — on `(4-9)/2` the parser
divides `-5` by `2` and must produce `-2`. Languages whose `/` or `//` floors
produce `-3` instead, so the reference divides the magnitudes and puts the sign
back by comparing the operands' signs. Nesting can also reach thousands of levels
inside the length bound, one frame per open bracket, so the Python port lifts the
interpreter's recursion limit before it starts.

**Complexity:** `O(n)` time, since each character is consumed exactly once, and
`O(n)` space for a call stack as deep as the bracket nesting.
