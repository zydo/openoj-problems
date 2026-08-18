# Solutions — Lone Element

Two single-scan reads of the same parity structure: cancel the pairs bitwise,
or track membership and see what is left over.

## XOR

The operation has exactly the algebra this task wants. A value folded against
itself vanishes (`x ^ x = 0`), a value folded against nothing survives
(`x ^ 0 = x`), and commutativity plus associativity mean the fold's result
never depended on the arrival order in the first place. So folding the whole
array into one running accumulator cancels every twice-occurring value and
deposits the lone value in the accumulator at the end.

The code is that fold and nothing more: start at 0, fold each value in turn,
return the accumulator. No counters, no membership set, no sorting — which is
what buys the constant-space bound while the one sweep keeps the time linear.
Negatives need no branch of their own: XOR acts on two's-complement bits, and
the full fold reconstructs the unpaired value whatever its sign.

On `[2, 9, 2, 6, 9]` the two 2s annihilate, the two 9s annihilate, and 6 is
what the accumulator holds when the sweep ends.

**Complexity:** `O(n)` time, `O(1)` space.

## Hash

Watch membership instead of algebra. Walk the array with a set: a value not
yet in the set joins it; a value already there leaves it. A twice-occurring
value inserts itself and is then erased by its own twin, so when the walk
ends the set holds precisely the values seen an odd number of times — on a
well-formed input, the lone element alone.

Reducing the survivors back to an answer folds them with XOR, and that step
is not cosmetic: any even-count value cancels in an XOR fold regardless, so
folding the odd-count survivors gives exactly what folding the entire array
would give. The two variants therefore agree on every input, not just on
inputs that honor the pairing promise.

Each element costs one average-`O(1)` set operation, so the pass stays
linear; the price is memory, since the set can grow to about half the array
before the twins arrive. The remove-then-insert idiom doubles as test and
update in a single lookup.

**Complexity:** `O(n)` time, `O(n)` space.
