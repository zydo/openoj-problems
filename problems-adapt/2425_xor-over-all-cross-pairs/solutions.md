# Solutions — XOR Over All Cross Pairs

## XOR parity collapse

The combination results are the `n * m` values `a_i ^ b_j` (with `n =
len(nums1)`, `m = len(nums2)`), and the task is the XOR of all of them.
Expand that grand XOR: each element of `nums1` meets every element of
`nums2`, so it occurs `m` times, and symmetrically each element of `nums2`
occurs `n` times. A value XORed with itself an even number of times
disappears, so parity is the whole story: `nums1` leaves behind its overall
XOR exactly when `m` is odd, and `nums2` exactly when `n` is odd.

The code is two conditional linear folds: XOR all of `nums1` into the answer
if `len(nums2)` is odd, all of `nums2` if `len(nums1)` is odd, return. Two
even lengths give 0 no matter the contents; with one odd length the other
array's contents matter only through its own XOR. That is the whole collapse
from up to `10^10` combination values to at most `2 * 10^5` XOR operations.

Nothing beyond a couple of accumulators is needed.

**Complexity:** `O(n + m)` time, `O(1)` space.
