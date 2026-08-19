# Solutions — Least Edits to Invert an Expression

## Stack evaluation with flip costs

Reduce every subexpression to a pair `(v, c)`: the value `v` it currently
has, and the least edit count `c` that flips that value. A digit enters as
`(bit, 1)`, one edit being all it takes to change a digit. When two
operands meet an operator, `v` is the plain AND/OR, while `c` is derived
case by case from the two independent edit families — rewriting an operand
(paying its flip cost) or exchanging the operator (paying 1).

AND yielding 1 (`1 & 1`) is undone by pushing either operand down to 0,
costing `min(ca, cb)`. AND yielding 0 splits by operands: two zeros force
you to also trade `&` for `|` so a single raised 1 can get through,
`1 + min(ca, cb)`; exactly one zero lets you either raise that zero (its
flip cost) or just swap the operator for 1 — take the cheaper. OR mirrors
all of it: `0 | 0` lifts one operand to 1 for `min(ca, cb)`; `0 | 1` and
`1 | 0` cost the zero-neighbor's flip or one operator swap; `1 | 1`
demands both fall, met by converting to `&` and flipping one operand,
`1 + min(ca, cb)`. Every branch reads as "alter the current value by the
cheapest local edit", and the recurrence keeps the minimum — which is what
Example 2 exercises: `0&0&0` folds to `(0, 2)`, the price of raising the
tail while opening an OR gate.

A stack carries it through the string, holding operators and operand
pairs alike. Each `)` pops back to its matching `(`, reverses the
collected items into left-to-right order, and reduces them stepwise —
no precedence anywhere, mirroring the problem's evaluation rule. Whatever
survives at the top level is reduced the same way at the end, and the
second component of that final pair is the answer. Every character is
pushed once and popped once.

**Complexity:** `O(n)` time, `O(n)` space.
