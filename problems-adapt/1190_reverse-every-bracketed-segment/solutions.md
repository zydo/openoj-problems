# Solutions — Reverse Every Bracketed Segment

## Stack of fragments

A stack of text fragments tracks the bracket nesting one level per entry. An
opening bracket pushes a fresh fragment onto the stack; ordinary letters
append to whichever fragment sits on top; a closing bracket means its pair is
complete, so the top fragment comes off, flips around, and glues itself onto
the fragment now exposed beneath it.

Why folding at the close is enough: reversal is its own inverse, so nesting
composes. Flipping an inner segment when its own bracket closes, then
flipping the outer segment later, puts each character in its final resting
place without ever revisiting it. Locating pairs and flipping them one at a
time instead costs quadratic time on deeply nested inputs; the stack folds
every flip into the merge and touches each character once per level overall,
for linear total work.

A base fragment is pushed before the scan begins, playing the role of the
outermost level; when the string ends, it is the only fragment left and holds
the answer. Balanced brackets guarantee that every pop has something beneath
it. Brackets themselves never enter a fragment, so the output is plain text
by construction.

Walked on `s = "(no(is)op)"`:

1. The outer `(` opens a fragment, and `no` lands in it.
2. The inner `(` opens another; `is` collects there, and its `)` pops it,
   flips it to `si`, and appends: the outer fragment reads `nosi`.
3. `op` extends it to `nosiop`.
4. The final `)` pops, flips, and appends `poison` to the base fragment.

**Complexity:** `O(n)` time, `O(n)` space.
