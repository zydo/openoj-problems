# Solutions — Operators Between Digits

## Backtracking with Running Evaluation

Two families of choice generate every expression: at each gap, how many
more digits join the current operand, and which operator closes it. The
search makes both explicit — from position `index` it stretches the
operand over every feasible `end`, and for each operand so formed it
recurses under each operator — so the recursion's leaves are precisely the
well-formed expressions over `num`. Instead of accumulating strings and
evaluating them afterwards, each branch carries `current`, the value of
the prefix built so far; a leaf then needs one comparison, `current ==
target`, and only survivors are appended.

Multiplication is the branch that needs care, because it may not be
applied to `current` — it applies to the operand that directly precedes
it. Hence a second piece of state, `prev`, the value of the trailing
multiplicand chain. A `'+'` or `'-'` folds the new operand into `current`
and resets the chain to the operand (negated after `'-'`, so that a later
`'*'` undoes the subtraction correctly). A `'*'` swaps the chain's old
contribution for its new one: the total becomes
`current - prev + prev * nxt` and the chain becomes `prev * nxt`. The very
first operand, chosen at `index == 0`, seeds both numbers and needs no
operator.

Leading zeros never enter the tree: while splitting, an operand whose
first digit is `'0'` is allowed only in its one-digit form, so the split
loop stops after the lone `0`. With at most ten digits, each of the `n - 1`
gaps contributes at most four branches (extend, or one of three
operators), bounding the tree at about `4^(n-1)` leaves, each holding a
string of length up to `2n`; the recursion itself descends at most `n`
levels, and the result list is output rather than scratch space.

**Complexity:** `O(n · 4^(n-1))` time, `O(n)` space.
