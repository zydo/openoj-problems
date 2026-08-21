# Solutions — Next Greater, Second Match

## Dual Monotonic Stacks

Chasing the second greater match is the textbook next-greater stack run one
round further. Stack `first` holds indices that have not yet met any greater
value, weakly descending in value from bottom to top; when a value `x`
arrives, every index it pops from `first` has just been paid its first
greater value. Those indices still owe one more, so instead of vanishing they
graduate into a second stack.

Stack `second` holds indices awaiting their second match, and the arriving
`x` writes `result[j] = x` for each index `j` it clears from that stack's
top. For those pops to be valid, `second` must be weakly descending too — and
that is where the ordering trap hides. A batch knocked off `first` leaves in
rising order of value (the deepest residents carry the smallest values), so
appending it to `second` as-is would crown the batch's largest value at the
top and wreck the invariant. Pushing the batch back-to-front repairs it,
which is why the code gathers the popped indices and replays them reversed.

Every index enters `first` once, crosses to `second` at most once, and leaves
`second` at most once, so the inner while-loops amount to linear total work.
Whoever remains stranded in either stack at the end never collected two
greater values and keeps the `-1` the result was seeded with — equal values
never pop anything, since the comparison is strict `<`, which is why
`[2, 2, 5]` yields all `-1`: each 2's lone greater value is the single 5.
On `[1, 7, 2, 8, 3, 9]`: the 7 graduates index 0 off `first`, and the 2 that
follows immediately pays that index its second match; later the 8 graduates
both 7 and 2 in a single visit, after which 3 settles 2's second match and 9
pays 7's.

**Complexity:** `O(n)` time, `O(n)` space.
