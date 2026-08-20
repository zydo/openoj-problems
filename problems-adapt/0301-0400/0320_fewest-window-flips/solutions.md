# Solutions — Fewest Window Flips

## Greedy scan with a flip-parity hint array

Start at the left end and find the first position still reading `0`. Only a
window covering that position can repair it, and every such window except one
also reaches back over positions the sweep has already settled — undoing
finished work. So exactly one window is available, the one that opens at that
position. There is no branching to explore: the sweep's hand is forced at every
step, which is what makes the resulting count minimal, and a position whose
forced window would hang off the right end of the array is a proof that no
sequence of flips can succeed.

Rewriting `k` entries each time a window opens would cost `O(nk)`, so the code
never materialises the flips. It carries `flip`, the running XOR of every
window still covering the current index, and reads the effective value as
`nums[i] ^ flip`. Opening a window at `i` sets `flip ^= 1` immediately and
writes `hint[i + k] ^= 1`; the loop's first act at each index, `flip ^=
hint[i]`, then folds in precisely the windows that expire there. The `hint`
array is a difference array in disguise, over XOR instead of addition.

Take `nums = [0,1,1,0,1,0,0,0]` with `k = 3`. Index 0 reads `0`, so a window
opens and `hint[3]` is marked; index 1 now reads `1 ^ 1 = 0`, opening a second
window and marking `hint[4]`. The two expiries then cancel through indices 3
and 4, which read as ones, and index 5 opens the third and last window — three
flips, matching the third example.

The bound check runs before the count: `i + k > n` returns `-1` on the spot.
The expiry is recorded only when `i + k < n`, since a window that finishes on
the final index has nothing left to expire into.

**Complexity:** `O(n)` time, `O(n)` space for the `hint` array.
