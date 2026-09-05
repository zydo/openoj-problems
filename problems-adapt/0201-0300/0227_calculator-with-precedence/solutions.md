# Solutions — Calculator With Precedence

## Stack of Signed Terms

`*` and `/` bind tighter than `+` and `-`, so the expression is secretly a
plain sum: collect each maximal run of `*` and `/` into a single term, then add
the terms. The reading that makes this easy is to _defer_ the additions — scan
left to right assembling the current number, and when an operator (or the end
of the text) arrives, apply the operator that came **before** the number. A
stack collects the terms as they finish; the answer is the stack's sum.

The pending operator decides what the freshly read number does. `+` pushes the
number as a new term. `-` pushes its negation. `*` takes the term on top of the
stack, multiplies it by the number, and puts the product back; `/` does the
same with division. On `" 2*3-10/4 "` the terms become `6` (from `2*3`) and
`2` (from `10/4` with the remainder dropped), and their sum is `4`. One detail
in the flush test matters: the check for "operator or last character" must not
be an `else`-branch of the digit test, because a digit sitting in the final
position has to do both jobs — extend the number and flush it — and chaining
the two tests would silently lose the last term.

Division is the one place a port can be quietly wrong. It must drop toward
zero, and the term on top of the stack may be negative: evaluating `8-12/5`
hands `-12` to the division, whose correct result is `-2`, while a
floor-division operator would answer `-3`. The code divides absolute values
and reattaches the sign, which is correct in both directions and costs one
comparison. Each character is read once with constant-time work per number,
and the stack holds at most one entry per additive term.

**Complexity:** `O(n)` time, `O(n)` space.
