# Solutions — Range XOR Queries

## Prefix XOR

XOR undoes itself (`x ^ x = 0`, `x ^ 0 = x`), so it telescopes the way
addition does, only better — subtraction is never needed. Keep `prefix[t]`
as the XOR of the first `t` elements, starting from `prefix[0] = 0`. The XOR
over `[l, r]` is then `prefix[r + 1] ^ prefix[l]`: every element with index
below `l` sits in both operands and wipes itself out, and what survives is
exactly `nums[l] ^ … ^ nums[r]`.

The code runs one sweep to build the table, then spends one XOR per query.
That replaces a fresh O(n) re-XOR for every question with O(1) — the
difference that matters with up to 3 x 10⁴ elements and as many queries.

Nothing at the edges needs special care: `l == r` collapses to
`prefix[r + 1] ^ prefix[r]`, which is `nums[r]` by construction; a whole-
array query is `prefix[n] ^ prefix[0]`; and positivity of the values is
irrelevant because XOR stays inside its operands' bit width.

**Complexity:** `O(n + q)` time, `O(n)` space, with `q` queries.
