# Solutions — Length After Repeated Letter Expansions

## Folding t Rounds into a 26×26 Matrix Power

Since each letter expands on its own, the layout of `s` is irrelevant —
reduce it to a frequency vector `v` with one slot per letter. A round is
then a linear map on those slots: letter `j` contributes one copy to
each of the `nums[j]` letters that follow it cyclically, so the matrix
`M` of the map holds `M[i][j] = 1` precisely when letter `j` emits letter
`i`. The frequency vector after `t` rounds is `M^t · v`, and summing its
entries — the letter counts are what the length is made of — gives the
answer modulo `10⁹ + 7`.

Raising `M` to the `t`-th power uses binary exponentiation: square
repeatedly and multiply into an identity-seeded accumulator whenever a
bit of `t` is set, so the whole climb costs `O(log t)` products of
26×26 matrices. Each product skips zero entries of its left operand,
which pays off on the early sparse squarings even though powers of `M`
fill in quickly. Reduce on every addition and the arithmetic never
leaves the modulus.

Linearity is what makes this exact rather than approximate: the count of
letter `i` after one more round is a fixed integer combination of the
current counts, and composing rounds composes the combinations — there
is no carrying, cancellation, or interaction to track beyond the matrix
product. Wrap-around needs no special casing, being nothing more than
the cyclic index `(j + a) mod 26` in the construction of `M`; and
because `nums[j] >= 1`, no letter ever disappears, though lengths still
explode — starting from `s = "a"` with `nums[0] = nums[1] = 2`, two
rounds already produce the trace `a -> bc -> cdd` of length 3, and by
`t = 10⁹` only the modular residue is tractable.

**Complexity:** `O(|s| + 26³ log t)` time, `O(26²)` space.
