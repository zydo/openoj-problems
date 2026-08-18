# Solutions — Balanced Brackets

## Stack

Closers undo openers in the opposite order of their arrival — whatever was
opened last is what has to close first. That is last-in-first-out behaviour,
and a stack expresses it exactly. A dictionary from each closer to its
required opener turns "is this the right partner?" into one lookup.

The string is read once, left to right. Openers go onto the stack. A closer
faces a single combined test: an empty stack means nothing is open, so this
closer has no partner, and otherwise `stack.pop()` hands back the top, which
must equal the opener the closer demands — popping a `(` when a `]` arrives
fails on the spot. Folding the pop into the comparison means no separate
peek-then-pop step exists to write.

A full scan without a rejection still is not acceptance: brackets left
dangling are unbalanced too, so the method ends with `return not stack`,
which is what catches an input like `"((("`. Only the six bracket characters
can appear, so nothing else needs considering along the way.

**Complexity:** `O(n)` time, `O(n)` space.
