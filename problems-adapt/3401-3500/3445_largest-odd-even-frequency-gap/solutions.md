# Solutions — Largest Odd-Even Frequency Gap

## Prefix parities with a growing minimum table

The alphabet is only five digits, so the pair `(a, b)` — `a` supplying the odd
count, `b` the even one — can simply be enumerated: twenty ordered pairs cover
every answer. For a fixed pair, walk a prefix index `i` from `0` to `n` and
record `diff[i]` = (#a among the first `i` characters) − (#b), together with
the parities `pa[i]`, `pb[i]` of those two counts. A window `s[l..r-1]` then
scores `diff[r] - diff[l]`, and it is legal exactly when `pa[r]` differs from
`pa[l]` (odd count of `a`) while `pb[r]` agrees with `pb[l]` (even count of
`b`), on top of the window rules.

The "even but not zero" clause on `b` is the subtle constraint. Track
`last_b_at[r]`, the position of the final `b` inside the first `r`
characters: the window retains a `b` precisely when `l <= last_b_at[r]`.
Together with the minimum length this pins the admissible left boundaries to
`l in [0, min(r - k, last_b_at[r])]`, and over that range only the smallest
`diff[l]` with the required parity signature `(pa[r] xor 1, pb[r])` matters —
`diff[r]` minus that minimum is the best gap ending at `r`.

Both arguments of the `min` grow with `r`, so the admissible range is a
prefix that only ever extends. A pointer walks newly admitted boundaries and
folds their `diff[l]` into a two-by-two table `min_val[p_a][p_b]`; each `r`
then reads its candidate in constant time. When no `b` has appeared yet the
range is empty and `r` contributes nothing, which is correct: a zero count of
`b` is not even.

Example 3 makes the parity bookkeeping visible. With `s = "333331131"` and
`k = 7`, the pair `('3', '1')` reaches `diff = 5 - 2 = 3` at the boundary
after seven characters, where `pa` has flipped an odd number of times and
`pb` has not; extending to the full string repairs neither condition — `pa`
flips back — and the whole string can only offer `'1'` (three copies) against
six `'3'`s for `-3`. Pairs whose digit never occurs leave their table at
infinity and never surface, and the stated guarantee ensures the sentinel
initialization is always beaten.

**Complexity:** `O(25 * n)` time, `O(n)` space.
