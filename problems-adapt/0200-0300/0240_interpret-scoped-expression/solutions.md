# Solutions — Interpret Scoped Expression

## Recursive Descent with Scoped Environments

Padding both parenthesis characters with spaces and splitting on whitespace
turns the input into a flat list whose entries are exactly the atoms and the
brackets. From there a single routine `parse(i, env)` does all the work: it
reads the one term beginning at index `i` and hands back its value along with
the index just past the term, which is what lets a caller read two siblings
back to back. When the token at `i` is not a bracket the answer is immediate —
a leading lowercase letter marks a name, resolved against `env`, and anything
else is a literal. `env` is passed down the recursion, which is how a nested
term sees the bindings made around it.

`add` and `mult` read their two operands recursively, combine them, and step
over the closing bracket. `let` begins by copying `env`; that copy is the whole
of the scoping rule, since every binding the form makes lands in the copy and
dies with it. Pairs are then walked in order, each term evaluated against the
copy as it stands at that moment, so a pair can read what earlier pairs wrote —
this is why `(let k 2 k (add k k) (mult k -3))` ends up multiplying by 4 rather
than 2. The body is evaluated last, in the same copy, and its value is the
value of the form.

Deciding where the pairs end is the only place the grammar needs lookahead. A
bracket or a literal at that position must be a term; a name is the body only
if the very next token is the closing bracket, and otherwise it is the left
half of another pair. Because the routine indexes into the token list instead
of slicing substrings, each token is looked at a bounded number of times and
the parse itself is linear. What lifts the bound is the environment copying:
`L` nested forms can each hold a map of size `L`, which sets both the time and
the space figures below. Inputs with shallow nesting or few names run much
nearer to linear.

**Complexity:** `O(L^2)` time, `O(L^2)` space.
