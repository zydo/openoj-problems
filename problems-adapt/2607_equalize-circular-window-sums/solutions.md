# Solutions — Equalize Circular Window Sums

## Residue Classes and Medians

Place two windows of length `k` side by side, the second shifted by one
position. They share `k - 1` elements, so demanding equal sums cancels
everything shared and leaves `arr[(i + k) mod n] = arr[i]`. Apply that at
every position: walking around the ring in strides of `k` must never change
the value. The orbits of that walk are precisely the residue classes modulo
`g = gcd(n, k)`.

The condition is also sufficient. When each class holds one constant value,
a stretch of `k` consecutive positions contains each of the `g` classes
exactly `k / g` times, so every window sum is the same combination of class
values. The problem therefore splits: pick one target per class, pay the
unit-step distance from every member to it.

Distance to a shared target is minimized at a median, so each class is
sorted and its element at index `len(group) // 2` taken as the target — for
a class of even size, either middle element costs the same. Take
`arr = [6, 2, 6, 2]` with `k = 3`: `g = gcd(4, 3) = 1`, the single class
sorts to `[2, 2, 6, 6]`, the target is `6`, and the answer is
`4 + 4 + 0 + 0 = 8`. With `arr = [2, 7, 1, 7]` and `k = 2` the classes are
the even positions `[2, 1]` and the odd positions `[7, 7]`; only the first
needs work, one step, for a total of 1.

Because the classes partition all `n` positions, extracting and sorting
every class costs no more than one global sort.

**Complexity:** `O(n log n)` time, `O(n)` space.
