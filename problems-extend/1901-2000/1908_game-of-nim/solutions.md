# Solutions — Game of Nim

This is classic multi-pile Nim, and it has a closed-form answer: the
mover loses exactly when the piles XOR to zero. One fold over the array
decides the game, no search required.

## Nim-sum (Bouton's theorem)

Call the XOR of all pile sizes the **nim-sum**. The terminal position —
every pile empty — has nim-sum 0 and the mover loses, which seeds the
argument. From any position with nim-sum 0, every possible move changes
one pile, hence flips the XOR away from 0: a player facing 0 can only
hand the opponent a nonzero nim-sum. From any position with a nonzero
nim-sum, let d be the value's highest set bit; some pile has that bit
set, and that pile p satisfies p XOR nim-sum < p, so reducing it to
p XOR nim-sum is a legal move that lands the opponent back on exactly 0.

The player who faces nim-sum 0 is therefore doomed: whatever they do, the
opponent can always restore 0, stones strictly decrease each turn, and
the terminal all-empty position (nim-sum 0) must eventually arrive on the
doomed player's own turn. Facing a nonzero nim-sum is a win by the same
recycling argument — always answer with the restoring move. Alice moves
first, so she wins exactly when the nim-sum of `piles` is nonzero, which
is one XOR fold over at most seven values. This is the linear-time
solution the follow-up alludes to, and it needs nothing but an integer
accumulator — every pile fits in a few bits, so no overflow concern
exists in any language.

**Complexity:** `O(n)` time, `O(1)` space.
