# Solutions — Subarrays Whose XOR Vanishes

## Prefix XOR Hash Count

A move subtracts the same power of two from a pair of numbers that both hold
that bit — clearing one set bit in each of two elements, so the parity of set
bits at every bit position inside the subarray is untouched. The XOR of the
subarray is exactly that parity vector, and an all-zero subarray has parity
vector zero: the XOR is invariant under any move sequence, and a subarray
reduces to zeros if and only if its XOR is already `0`.

Counting zero-XOR subarrays is then the classic prefix trick. With `x` the
running XOR of the elements seen so far, the stretch between two cut points
XORs to zero exactly when the prefixes at those cuts are equal — so a hash
map of prefix counts (seeded with `count[0] = 1` for the empty prefix before
any element) turns the whole count into one sweep: at each step, every
earlier equal prefix is one reducible subarray ending at the current
element, and the current prefix is then recorded for later steps.

The seed is what witnesses subarrays starting at index 0 — a prefix that
returns to `0` pairs with the empty prefix to certify that the whole leading
stretch XORs to zero. Values up to `10⁶` keep prefixes within 20 bits, so
the map stays small and lookups are constant time on average; an all-zero
array makes every one of its `n(n+1)/2` subarrays reducible, which the
64-bit accumulation in the fixed-width ports absorbs.

Worked on Example 1, `nums = [5,6,3,5]`: the prefixes run `0, 5, 3, 0, 5`;
the two equal pairs — the zeros and the fives — mark exactly the subarrays
`[5,6,3]` and `[6,3,5]`, so the answer is 2.

**Complexity:** `O(n)` time, `O(n)` space.
