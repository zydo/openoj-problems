# Solutions — Best Duplicate-Free Window Score

Scoring exactly one duplicate-free stretch as highly as possible is, once
the story is stripped away, a search for the maximum-sum window whose
elements are all distinct. Distinctness is what makes that search a clean
two-pointer sweep — and every value being positive is what makes the
longest distinct window ending at each position also the richest one
there.

## Two-pointer window of distinct values

Sweep the right end forward one element at a time, keeping the window's
running sum. The moment the incoming value is already present the window
would repeat it, so retire elements from the left — dropping each one's
count and its contribution to the sum — until the collision clears; then
admit the new value and compare the settled window's sum against the best
so far. Values lie in `[1, 10^4]`, so a flat count array of 10001 slots
replaces a hash map: presence is one array read, constant and
cache-friendly.

The sweep never misses the optimum. For a fixed right end `r`, every
distinct window ending at `r` is a suffix of the longest one — a shorter
window sits inside it — and since all values are positive, the longest
suffix has the largest sum. Recording the settled window's sum at each `r`
therefore visits the best candidate ending at every position, and the
answer is the maximum over the sweep. On `nums = [3,1,4,1,5,9,2,6]` the
window settles at `[4,1,5,9,2,6]` for 27; on the second example `[2,7,1]`
and `[1,7,2]` both reach 10.

The running sum can reach `10^5 * 10^4 = 10^9`, barely inside 32 bits, so
the fixed-width languages accumulate it in a 64-bit wide type and narrow
once at the return. The count array is the only auxiliary memory, and its
size follows the value range rather than `n`.

**Complexity:** `O(n)` time, `O(V)` space (`V` = value range).
