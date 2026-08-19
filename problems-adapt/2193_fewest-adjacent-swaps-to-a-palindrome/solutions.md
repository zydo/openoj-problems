# Solutions — Fewest Adjacent Swaps to a Palindrome

## Greedy matching from the outside in

Adjacent swaps can reach any rearrangement, so the question is only which
rearrangement, and the answer is to never look past the outermost pair.
When `s[left]` and `s[right]` already agree the pair is free; otherwise,
find the rightmost occurrence of `s[left]` inside the window and bubble it
rightward to `right` — `right - k` swaps — then shrink the window by one on
each side and repeat. Each pair is settled at the minimum cost its side
allows, and settling it never raises the cost of the inner substring, which
is why the local greedy is globally optimal. (Matching from the left end
with the leftmost occurrence of `s[right]` is the mirror-image strategy and
costs the same.)

The exception is the odd letter. If no partner for `s[left]` exists in the
window, that letter is the one destined for the exact center — the input
guarantees at most one such letter — and the cheapest thing to do with it
is swap it a single step inward and retry the same end. It keeps walking
inward until the characters around it pair off; `"cbaab"` shows the
pattern, with the leading `c` nudged twice as the window closes into
`"bacab"`.

Tracing `"caacr"`: the `c` at index 3 bubbles to the end (one swap,
`"caarc"`), then the `a` at index 2 bubbles one step (`"carac"`) — two
swaps in total.

Each outer pair costs one rightward bubble pass, so the two-pointer sweep
is quadratic in the worst case — tolerable at `n <= 2000`. The string is
copied into a list first because the swaps mutate it.

**Complexity:** `O(n²)` time, `O(n)` space.
