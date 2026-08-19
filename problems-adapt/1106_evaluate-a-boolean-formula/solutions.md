# Solutions — Evaluate a Boolean Formula

## Recursive Descent Parser

The grammar nests inside itself, so the natural evaluator is a descent that
walks the string once with a position cursor and hands each construct its
own call. Each call returns two things — the value of the piece it read,
and the cursor position just past it — so a parent resumes exactly where
its child finished, with no lookahead and no backtracking.

Atoms come first: `t` and `f` resolve immediately and consume one
character. Anything else must be an operator, followed without fail by
`'('`, so the cursor jumps two. Then operands are read until the matching
`')'`: parse one, look at the character it stopped on — a comma promises
another operand, anything else is the closing parenthesis — and continue or
stop accordingly. When the list closes, the operator folds it: `!` flips
its sole operand, `&` asks whether every value is true, `|` whether any is.

Tracing `"!(|(f,f,&(f,t)))"`: the outer call sees `!`, skips to the
disjunction, whose three operands parse to false, false, and — via a
conjunction reading `f` then `t` — false. Disjunction of three falses is
false, and the negation returns true. A one-operand list such as `&(f)`
never triggers the comma branch; depth is bounded by the parenthesis
nesting, and because every call consumes at least one character the total
work is linear in the length.

**Complexity:** `O(L)` time, `O(L)` stack space in the worst case, for
formula length `L`.
