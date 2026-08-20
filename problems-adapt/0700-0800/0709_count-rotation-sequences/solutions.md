# Solutions — Count Rotation Sequences

## Rotation classes and matrix exponentiation

Cutting a suffix and reattaching it up front slides every character by the
same amount, so after any number of operations the string is still one of the
`n` rotations of the original — and if `t` is not one of them, no sequence
exists and the answer is `0`. That turns "which strings are reachable" into
"which rotations", a finite set we can partition.

Counting the rotations of `s` that spell `t` is substring search: a rotation
of `s` starting at offset `i` equals `t` exactly when `t` occurs at offset
`i` of `s + s`. Searching only the first `2n - 1` characters keeps the
full-length rotation from being counted twice. KMP does this in one linear
pass; call the number of matches `cnt`. In Example 1 (`"world"` into
`"ldwor"`), all letters are distinct, so `cnt = 1`; in Example 2 the period-2
string `"xyxyxy"` matches at offsets `0, 2, 4`, so `cnt = 3`.

The `k` operations form a walk of length `k` over the `n` rotations, and only
membership in one of two classes matters — the `cnt` rotations that spell
`t`, and the `n - cnt` that do not. From a rotation in the first class, one
operation reaches `cnt - 1` other first-class rotations (sliding by zero is
forbidden because `l` must satisfy `0 < l < n`) and `n - cnt` second-class
rotations; from a second-class rotation it reaches `cnt` first-class and
`n - 1 - cnt` second-class ones. Walk counts therefore obey a two-state
recurrence with transition matrix `[[cnt-1, cnt], [n-cnt, n-1-cnt]]` — for
Example 1 that is `[[0, 1], [4, 3]]`.

With `k` as large as `10^15`, iterating the recurrence is hopeless, but the
matrix is a fixed `2x2`, so it is raised to the `k`-th power by repeated
squaring: `O(log k)` constant-size multiplications, each reduced modulo
`10^9 + 7`. The starting vector is `(1, 0)` when `s == t` (position 0 is a
first-class rotation from the outset) and `(0, 1)` otherwise; the answer is
the first-class component after applying the powered matrix. When `cnt = 0`
that component is `0`, exactly the unreachable case of Example 3.

**Complexity:** `O(n + log k)` time, `O(n)` space.
