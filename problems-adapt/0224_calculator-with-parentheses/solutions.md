# Solutions — Calculator With Parentheses

## Sign-Tracking Stack

Only addition and subtraction appear, so however deeply the expression nests,
it collapses to a single sum of signed terms. One left-to-right pass carries
three values: `result`, the running total of the current level; `sign`, the
sign owed to the next term; and `num`, the number under construction. A digit
extends `num` place by place as `num = num * 10 + digit`; an operator folds the
finished number in as `result += sign * num` and then records its own sign for
the term still to come.

Brackets suspend a level and resume it later, which is what the stack is for.
On `'('` the current `result` and `sign` are set aside and both restart — total
zero, sign positive — so the enclosed text is evaluated exactly as if it were a
fresh expression. On `')'` the inner number is folded in and the inner total is
combined with the set-aside context in one step: the restored sign multiplies
the inner value and the restored outer total is added back. The sign was set
aside last, so it is the first thing taken back.

Walking `"(8-(3+1))"` through the scan:

1. The opening `'('` sets aside `(0, +1)` and restarts.
2. `8` assembles; the `'-'` folds it in (`result = 8`) and leaves `sign = -1`.
3. The inner `'('` sets aside `(8, -1)` and restarts.
4. `3+1` assembles and folds to an inner total of `4`.
5. Its `')'` combines: `4 × (-1) + 8 = 4`, restoring the outer level.
6. The final `')'` combines again: `4 × 1 + 0 = 4`, and nothing remains.

A `'-'` in front of a number or a group is not a separate case: it just leaves
`sign = -1`, so whatever arrives next is folded in negated — which is how
`"-(7-3)+2"` comes out as `-4 + 2 = -2`. Spaces match no branch of the scan
and fall through unnoticed. When the text runs out, one last term may still be
sitting assembled but unfolded, hence the closing
`result + sign * num`. Every character is looked at once, each stack operation
is constant time, and the stack never grows past the bracket nesting depth.

**Complexity:** `O(n)` time, `O(n)` space.
